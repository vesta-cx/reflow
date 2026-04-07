/** Core game engine types for Reflow */

export interface Vec2 {
	x: number;
	y: number;
}

export interface AABB {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface PlayerState {
	pos: Vec2;
	vel: Vec2;
	width: number;
	height: number;
	grounded: boolean;
	wallSliding: boolean;
	wallDir: -1 | 0 | 1;
	facing: -1 | 1;
	jumping: boolean;
	dead: boolean;
	respawnPos: Vec2;
	/** Collected items / checkpoints */
	checkpoints: Vec2[];
}

export type ElementBehavior =
	| 'solid'        // basic platform
	| 'bouncy'       // button - bounces player
	| 'portal'       // link - teleports to another room
	| 'collapsible'  // details - opens/closes
	| 'wall-jump'    // aside - wall jump surface
	| 'moving'       // nav - moves
	| 'death'        // footer - kills player
	| 'ceiling'      // header - blocks from above
	| 'checkpoint'   // mark - saves position
	| 'slippery'     // code - ice physics
	| 'wind'         // blockquote - pushes player
	| 'growing'      // progress - expands over time
	| 'typewriter'   // input - type to extend
	| 'elevator'     // select - moves vertically
	| 'floating'     // popover - appears/disappears
	| 'dialog-trap'  // dialog - traps player inside
	| 'grid'         // table - grid-based puzzle
	| 'submit-gate'  // form - submit to open
	| 'breakable';   // destructible

export interface GameElement {
	/** The actual DOM element */
	el: HTMLElement;
	/** Semantic tag name */
	tag: string;
	/** Behavior type */
	behavior: ElementBehavior;
	/** Cached bounding box (updated per frame) */
	bounds: AABB;
	/** Whether player can pass through from below */
	oneWay: boolean;
	/** Custom state for interactive elements */
	state: Record<string, unknown>;
	/** Whether this element is currently active/solid */
	active: boolean;
}

export interface CollisionResult {
	hit: boolean;
	element: GameElement | null;
	/** The overlap/penetration vector */
	overlap: Vec2;
	/** Which side was hit */
	side: 'top' | 'bottom' | 'left' | 'right' | null;
}

export interface Camera {
	x: number;
	y: number;
	targetX: number;
	targetY: number;
	/** Smoothing factor (0-1, lower = smoother) */
	smoothing: number;
	/** World bounds */
	worldWidth: number;
	worldHeight: number;
	viewportWidth: number;
	viewportHeight: number;
}

export interface GameInput {
	left: boolean;
	right: boolean;
	jump: boolean;
	jumpPressed: boolean;
	interact: boolean;
	interactPressed: boolean;
}

export interface GameConfig {
	gravity: number;
	jumpForce: number;
	moveSpeed: number;
	maxFallSpeed: number;
	friction: number;
	airFriction: number;
	wallSlideSpeed: number;
	wallJumpForce: Vec2;
	coyoteTime: number;
	jumpBufferTime: number;
	/** How slippery 'code' elements are */
	iceFriction: number;
	/** Wind force from blockquote */
	windForce: number;
	/** Bounce force from buttons */
	bounceForce: number;
}

export const DEFAULT_CONFIG: GameConfig = {
	gravity: 1800,
	jumpForce: -520,
	moveSpeed: 280,
	maxFallSpeed: 800,
	friction: 0.85,
	airFriction: 0.92,
	wallSlideSpeed: 100,
	wallJumpForce: { x: 320, y: -480 },
	coyoteTime: 0.1,
	jumpBufferTime: 0.12,
	iceFriction: 0.98,
	windForce: 200,
	bounceForce: -650,
};

export interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	life: number;
	maxLife: number;
	color: string;
	size: number;
}

export interface GameState {
	player: PlayerState;
	camera: Camera;
	elements: GameElement[];
	input: GameInput;
	config: GameConfig;
	particles: Particle[];
	time: number;
	deltaTime: number;
	paused: boolean;
	currentRoom: string;
}
