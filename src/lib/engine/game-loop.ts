/** Fixed-timestep game loop with interpolation */

type UpdateFn = (dt: number) => void;
type RenderFn = (alpha: number) => void;

export interface GameLoop {
	start: () => void;
	stop: () => void;
	isRunning: () => boolean;
}

const FIXED_DT = 1 / 120; // 120hz physics
const MAX_FRAME_TIME = 0.05; // Prevent spiral of death

export function createGameLoop(update: UpdateFn, render: RenderFn): GameLoop {
	let running = false;
	let rafId: number | null = null;
	let lastTime = 0;
	let accumulator = 0;

	function frame(time: number) {
		if (!running) return;

		const currentTime = time / 1000;
		let frameTime = currentTime - lastTime;
		lastTime = currentTime;

		// Clamp frame time to prevent spiral
		if (frameTime > MAX_FRAME_TIME) frameTime = MAX_FRAME_TIME;

		accumulator += frameTime;

		// Fixed-step physics updates
		while (accumulator >= FIXED_DT) {
			update(FIXED_DT);
			accumulator -= FIXED_DT;
		}

		// Render with interpolation alpha
		const alpha = accumulator / FIXED_DT;
		render(alpha);

		rafId = requestAnimationFrame(frame);
	}

	return {
		start() {
			if (running) return;
			running = true;
			lastTime = performance.now() / 1000;
			accumulator = 0;
			rafId = requestAnimationFrame(frame);
		},
		stop() {
			running = false;
			if (rafId !== null) {
				cancelAnimationFrame(rafId);
				rafId = null;
			}
		},
		isRunning: () => running,
	};
}
