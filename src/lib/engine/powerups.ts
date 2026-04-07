import type { PlayerState, GameConfig } from './types';

/**
 * Terminal cursor modes as power-ups:
 * - line: Default thin cursor (│). Normal stats.
 * - underline: Underline cursor (▁). Faster, lower jump, slides under things.
 * - block: Full block cursor (█). Tankier, slower, breaks things.
 * - outline: Hollow block cursor (▯). Can phase through one-way platforms downward.
 */
export type CursorMode = 'line' | 'underline' | 'block' | 'outline' | 'pointer';

export interface CursorPowerUp {
	mode: CursorMode;
	label: string;
	icon: string;
	description: string;
	/** Player dimensions in this mode */
	width: number;
	height: number;
	/** Config overrides */
	configOverrides: Partial<GameConfig>;
	/** Special abilities */
	abilities: {
		breakBlocks: boolean;
		phaseDown: boolean;
		slideUnder: boolean;
		doubleJump: boolean;
		/** Pointer mode: can drag/resize elements but can't interact with finish/checkpoints */
		domManipulation: boolean;
	};
}

export const CURSOR_MODES: Record<CursorMode, CursorPowerUp> = {
	line: {
		mode: 'line',
		label: 'Line',
		icon: '│',
		description: 'The classic blinking cursor. Balanced and agile.',
		width: 20,
		height: 40,
		configOverrides: {},
		abilities: {
			breakBlocks: false,
			phaseDown: false,
			slideUnder: false,
			doubleJump: false,
			domManipulation: false,
		},
	},
	underline: {
		mode: 'underline',
		label: 'Underline',
		icon: '▁',
		description: 'Low profile. Faster, can slide under gaps.',
		width: 24,
		height: 12,
		configOverrides: {
			moveSpeed: 380,
			jumpForce: -400,
			maxFallSpeed: 900,
		},
		abilities: {
			breakBlocks: false,
			phaseDown: false,
			slideUnder: true,
			doubleJump: false,
			domManipulation: false,
		},
	},
	block: {
		mode: 'block',
		label: 'Block',
		icon: '█',
		description: 'Full block. Heavy hitter, breaks destructible elements.',
		width: 24,
		height: 32,
		configOverrides: {
			moveSpeed: 200,
			jumpForce: -480,
			gravity: 2200,
			bounceForce: -750,
		},
		abilities: {
			breakBlocks: true,
			phaseDown: false,
			slideUnder: false,
			doubleJump: false,
			domManipulation: false,
		},
	},
	outline: {
		mode: 'outline',
		label: 'Outline',
		icon: '▯',
		description: 'Hollow cursor. Can phase through one-way platforms and double jump.',
		width: 22,
		height: 36,
		configOverrides: {
			moveSpeed: 260,
			jumpForce: -490,
			gravity: 1600,
			maxFallSpeed: 600,
		},
		abilities: {
			breakBlocks: false,
			phaseDown: true,
			slideUnder: false,
			doubleJump: true,
			domManipulation: false,
		},
	},
	pointer: {
		mode: 'pointer',
		label: 'Pointer',
		icon: '⇱',
		description: 'Mouse cursor mode. Drag and resize DOM elements, but can\'t platform or interact with goals. Return to a caret station to switch back.',
		width: 24,
		height: 24,
		configOverrides: {
			moveSpeed: 350,
			gravity: 0,
			jumpForce: 0,
			maxFallSpeed: 0,
		},
		abilities: {
			breakBlocks: false,
			phaseDown: false,
			slideUnder: false,
			doubleJump: false,
			domManipulation: true,
		},
	},
};

/** Apply a cursor mode to the player and config */
export function applyCursorMode(
	player: PlayerState,
	config: GameConfig,
	mode: CursorMode,
): GameConfig {
	const powerUp = CURSOR_MODES[mode];

	// Update player dimensions
	player.width = powerUp.width;
	player.height = powerUp.height;

	// Apply config overrides
	const newConfig = { ...config };
	Object.assign(newConfig, powerUp.configOverrides);

	return newConfig;
}
