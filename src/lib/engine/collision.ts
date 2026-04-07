import type { AABB, CollisionResult, GameElement, PlayerState, Vec2 } from './types';

/** Get the AABB of a DOM element relative to the game world container */
export function getElementBounds(el: HTMLElement, container: HTMLElement): AABB {
	const elRect = el.getBoundingClientRect();
	const containerRect = container.getBoundingClientRect();
	return {
		x: elRect.left - containerRect.left,
		y: elRect.top - containerRect.top,
		width: elRect.width,
		height: elRect.height,
	};
}

/** Update cached bounds for all game elements */
export function updateElementBounds(elements: GameElement[], container: HTMLElement): void {
	for (const ge of elements) {
		if (!ge.active) continue;
		ge.bounds = getElementBounds(ge.el, container);
	}
}

/** Get the player's AABB */
export function getPlayerAABB(player: PlayerState): AABB {
	return {
		x: player.pos.x,
		y: player.pos.y,
		width: player.width,
		height: player.height,
	};
}

/** Check if two AABBs overlap */
export function aabbOverlap(a: AABB, b: AABB): boolean {
	return (
		a.x < b.x + b.width &&
		a.x + a.width > b.x &&
		a.y < b.y + b.height &&
		a.y + a.height > b.y
	);
}

/** Get the overlap vector between two AABBs */
function getOverlap(a: AABB, b: AABB): Vec2 {
	const overlapX = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
	const overlapY = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
	return { x: overlapX, y: overlapY };
}

/** Determine which side of B was hit by A */
function getCollisionSide(a: AABB, b: AABB, overlap: Vec2): 'top' | 'bottom' | 'left' | 'right' {
	const aCenterX = a.x + a.width / 2;
	const aCenterY = a.y + a.height / 2;
	const bCenterX = b.x + b.width / 2;
	const bCenterY = b.y + b.height / 2;

	if (overlap.x < overlap.y) {
		return aCenterX < bCenterX ? 'left' : 'right';
	} else {
		return aCenterY < bCenterY ? 'top' : 'bottom';
	}
}

/** Resolve collision between player and a single element */
export function resolveCollision(player: PlayerState, element: GameElement): CollisionResult {
	const playerBox = getPlayerAABB(player);

	if (!aabbOverlap(playerBox, element.bounds)) {
		return { hit: false, element: null, overlap: { x: 0, y: 0 }, side: null };
	}

	const overlap = getOverlap(playerBox, element.bounds);
	const side = getCollisionSide(playerBox, element.bounds, overlap);

	// One-way platforms: only collide from top, and only when falling
	if (element.oneWay) {
		if (side !== 'top' || player.vel.y < 0) {
			return { hit: false, element: null, overlap: { x: 0, y: 0 }, side: null };
		}
		// Also skip if player's feet were already below the top of the platform
		const feetY = player.pos.y + player.height;
		const platformTop = element.bounds.y;
		if (feetY - player.vel.y * 0.016 > platformTop + 4) {
			return { hit: false, element: null, overlap: { x: 0, y: 0 }, side: null };
		}
	}

	return { hit: true, element, overlap, side };
}

/** Check all collisions and resolve them, applying physics responses */
export function resolveAllCollisions(player: PlayerState, elements: GameElement[]): CollisionResult[] {
	const results: CollisionResult[] = [];
	player.grounded = false;
	player.wallSliding = false;
	player.wallDir = 0;

	// Sort elements by distance to player for stable resolution
	const sorted = elements
		.filter(e => e.active && e.behavior !== 'death')
		.sort((a, b) => {
			const distA = Math.hypot(
				a.bounds.x + a.bounds.width / 2 - player.pos.x,
				a.bounds.y + a.bounds.height / 2 - player.pos.y
			);
			const distB = Math.hypot(
				b.bounds.x + b.bounds.width / 2 - player.pos.x,
				b.bounds.y + b.bounds.height / 2 - player.pos.y
			);
			return distA - distB;
		});

	for (const element of sorted) {
		const result = resolveCollision(player, element);
		if (!result.hit) continue;

		results.push(result);

		// Apply position correction based on collision side
		switch (result.side) {
			case 'top':
				player.pos.y = element.bounds.y - player.height;
				player.vel.y = 0;
				player.grounded = true;
				break;
			case 'bottom':
				player.pos.y = element.bounds.y + element.bounds.height;
				player.vel.y = 0;
				break;
			case 'left':
				player.pos.x = element.bounds.x - player.width;
				if (!player.grounded && player.vel.y > 0) {
					player.wallSliding = true;
					player.wallDir = 1;
				}
				player.vel.x = 0;
				break;
			case 'right':
				player.pos.x = element.bounds.x + element.bounds.width;
				if (!player.grounded && player.vel.y > 0) {
					player.wallSliding = true;
					player.wallDir = -1;
				}
				player.vel.x = 0;
				break;
		}
	}

	return results;
}

/** Check if player is colliding with any death zones */
export function checkDeathCollisions(player: PlayerState, elements: GameElement[]): GameElement | null {
	const playerBox = getPlayerAABB(player);
	for (const element of elements) {
		if (!element.active || element.behavior !== 'death') continue;
		if (aabbOverlap(playerBox, element.bounds)) {
			return element;
		}
	}
	return null;
}

/** Find nearest interactive element within range */
export function findNearestInteractive(player: PlayerState, elements: GameElement[], range: number): GameElement | null {
	const playerCenterX = player.pos.x + player.width / 2;
	const playerCenterY = player.pos.y + player.height / 2;
	let nearest: GameElement | null = null;
	let nearestDist = range;

	for (const element of elements) {
		if (!element.active) continue;
		const interactiveBehaviors = ['portal', 'collapsible', 'bouncy', 'typewriter', 'elevator', 'submit-gate', 'dialog-trap'];
		if (!interactiveBehaviors.includes(element.behavior)) continue;

		const elCenterX = element.bounds.x + element.bounds.width / 2;
		const elCenterY = element.bounds.y + element.bounds.height / 2;
		const dist = Math.hypot(elCenterX - playerCenterX, elCenterY - playerCenterY);

		if (dist < nearestDist) {
			nearestDist = dist;
			nearest = element;
		}
	}

	return nearest;
}
