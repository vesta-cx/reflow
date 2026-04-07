import type { GameConfig, GameElement, PlayerState, CollisionResult } from './types';

/** Apply gravity and movement physics to the player */
export function updatePlayerPhysics(
	player: PlayerState,
	config: GameConfig,
	dt: number,
): void {
	// Apply gravity
	if (!player.grounded) {
		player.vel.y += config.gravity * dt;
		player.vel.y = Math.min(player.vel.y, config.maxFallSpeed);
	}

	// Wall sliding slows fall
	if (player.wallSliding) {
		player.vel.y = Math.min(player.vel.y, config.wallSlideSpeed);
	}

	// Apply friction
	if (player.grounded) {
		player.vel.x *= config.friction;
	} else {
		player.vel.x *= config.airFriction;
	}

	// Apply velocity to position
	player.pos.x += player.vel.x * dt;
	player.pos.y += player.vel.y * dt;
}

/** Handle element-specific physics behaviors */
export function applyElementBehavior(
	player: PlayerState,
	collision: CollisionResult,
	config: GameConfig,
	dt: number,
): void {
	if (!collision.element) return;

	switch (collision.element.behavior) {
		case 'bouncy':
			if (collision.side === 'top') {
				player.vel.y = config.bounceForce;
				player.grounded = false;
				// Visual feedback - add CSS class briefly
				collision.element.el.classList.add('game-pressed');
				setTimeout(() => collision.element!.el.classList.remove('game-pressed'), 200);
			}
			break;

		case 'slippery':
			if (player.grounded) {
				player.vel.x *= config.iceFriction;
			}
			break;

		case 'wind': {
			// Blockquote pushes player horizontally
			const windDir = collision.element.state.windDirection as number ?? 1;
			player.vel.x += config.windForce * windDir * dt;
			break;
		}

		case 'moving': {
			// Nav elements move back and forth
			const speed = (collision.element.state.moveSpeed as number) ?? 80;
			const range = (collision.element.state.moveRange as number) ?? 200;
			const startX = (collision.element.state.startX as number) ?? collision.element.bounds.x;
			const time = (collision.element.state.time as number ?? 0) + dt;
			collision.element.state.time = time;

			const offset = Math.sin(time * speed / range) * range;
			const dx = offset - ((collision.element.state.lastOffset as number) ?? 0);
			collision.element.state.lastOffset = offset;

			// Move the element
			const el = collision.element.el;
			el.style.transform = `translateX(${offset}px)`;

			// Carry the player if standing on top
			if (collision.side === 'top' && player.grounded) {
				player.pos.x += dx;
			}
			break;
		}

		case 'floating': {
			// Popover elements phase in and out
			const cycle = (collision.element.state.cycle as number ?? 0) + dt;
			collision.element.state.cycle = cycle;
			const visible = Math.sin(cycle * 1.5) > -0.3;
			collision.element.active = visible;
			collision.element.el.style.opacity = visible ? '1' : '0.15';
			break;
		}

		case 'checkpoint':
			if (collision.side === 'top') {
				player.respawnPos = { ...player.pos };
				collision.element.el.classList.add('game-activated');
			}
			break;

		default:
			break;
	}
}

/** Handle player movement from input */
export function applyMovement(
	player: PlayerState,
	left: boolean,
	right: boolean,
	config: GameConfig,
): void {
	if (left) {
		player.vel.x = -config.moveSpeed;
		player.facing = -1;
	} else if (right) {
		player.vel.x = config.moveSpeed;
		player.facing = 1;
	}
}

/** Handle jump (with coyote time and wall jump) */
export function handleJump(
	player: PlayerState,
	config: GameConfig,
	coyoteTimer: number,
	jumpBufferTimer: number,
): { jumped: boolean; coyoteTimer: number; jumpBufferTimer: number } {
	let newCoyoteTimer = coyoteTimer;
	let newJumpBufferTimer = jumpBufferTimer;

	// Regular jump (with coyote time)
	if (newJumpBufferTimer > 0 && newCoyoteTimer > 0) {
		player.vel.y = config.jumpForce;
		player.grounded = false;
		player.jumping = true;
		newCoyoteTimer = 0;
		newJumpBufferTimer = 0;
		return { jumped: true, coyoteTimer: newCoyoteTimer, jumpBufferTimer: newJumpBufferTimer };
	}

	// Wall jump
	if (newJumpBufferTimer > 0 && player.wallSliding) {
		player.vel.x = config.wallJumpForce.x * player.wallDir;
		player.vel.y = config.wallJumpForce.y;
		player.wallSliding = false;
		player.jumping = true;
		newJumpBufferTimer = 0;
		return { jumped: true, coyoteTimer: newCoyoteTimer, jumpBufferTimer: newJumpBufferTimer };
	}

	return { jumped: false, coyoteTimer: newCoyoteTimer, jumpBufferTimer: newJumpBufferTimer };
}
