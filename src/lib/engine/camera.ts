import type { Camera, PlayerState } from './types';

export function createCamera(worldWidth: number, worldHeight: number): Camera {
	return {
		x: 0,
		y: 0,
		targetX: 0,
		targetY: 0,
		smoothing: 0.08,
		worldWidth,
		worldHeight,
		viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 1920,
		viewportHeight: typeof window !== 'undefined' ? window.innerHeight : 1080,
	};
}

export function updateCamera(camera: Camera, player: PlayerState, dt: number): void {
	// Target: center on player, slightly ahead in facing direction
	const lookAhead = player.facing * 80;
	camera.targetX = player.pos.x + player.width / 2 - camera.viewportWidth / 2 + lookAhead;
	camera.targetY = player.pos.y + player.height / 2 - camera.viewportHeight / 2 - 50;

	// Clamp target to world bounds
	camera.targetX = Math.max(0, Math.min(camera.targetX, camera.worldWidth - camera.viewportWidth));
	camera.targetY = Math.max(0, Math.min(camera.targetY, camera.worldHeight - camera.viewportHeight));

	// Smooth follow
	const lerp = 1 - Math.pow(1 - camera.smoothing, dt * 60);
	camera.x += (camera.targetX - camera.x) * lerp;
	camera.y += (camera.targetY - camera.y) * lerp;
}

export function getCameraTransform(camera: Camera): string {
	return `translate(${-Math.round(camera.x)}px, ${-Math.round(camera.y)}px)`;
}
