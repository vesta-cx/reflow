import type { GameInput } from './types';

const keys = new Set<string>();
const justPressed = new Set<string>();

export function initInput(): GameInput {
	if (typeof window === 'undefined') return createEmptyInput();

	window.addEventListener('keydown', (e) => {
		if (!keys.has(e.code)) {
			justPressed.add(e.code);
		}
		keys.add(e.code);

		// Prevent page scroll from game keys
		if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
			e.preventDefault();
		}
	});

	window.addEventListener('keyup', (e) => {
		keys.delete(e.code);
	});

	// Clear on blur to prevent stuck keys
	window.addEventListener('blur', () => {
		keys.clear();
		justPressed.clear();
	});

	return createEmptyInput();
}

function createEmptyInput(): GameInput {
	return {
		left: false,
		right: false,
		jump: false,
		jumpPressed: false,
		interact: false,
		interactPressed: false,
	};
}

export function pollInput(input: GameInput): void {
	input.left = keys.has('ArrowLeft') || keys.has('KeyA');
	input.right = keys.has('ArrowRight') || keys.has('KeyD');
	input.jump = keys.has('ArrowUp') || keys.has('KeyW') || keys.has('Space');
	input.jumpPressed = justPressed.has('ArrowUp') || justPressed.has('KeyW') || justPressed.has('Space');
	input.interact = keys.has('KeyE') || keys.has('Enter');
	input.interactPressed = justPressed.has('KeyE') || justPressed.has('Enter');

	// Clear just-pressed after reading
	justPressed.clear();
}
