<script lang="ts" module>
	import type { GameElement } from '$lib/engine/types';

	function getInteractVerb(element: GameElement): string {
		switch (element.behavior) {
			case 'portal': return 'navigate';
			case 'collapsible': return element.state.open ? 'collapse' : 'expand';
			case 'dialog-trap': return 'open dialog';
			case 'submit-gate': return 'submit';
			case 'elevator': return 'change floor';
			default: return 'interact';
		}
	}
</script>

<script lang="ts">
	import { onMount, onDestroy, type Snippet } from 'svelte';
	import { goto } from '$app/navigation';
	import {
		type GameState, type GameElement as GE,
		DEFAULT_CONFIG,
		initInput, pollInput,
		updateElementBounds, resolveAllCollisions, checkDeathCollisions, findNearestInteractive,
		updatePlayerPhysics, applyElementBehavior, applyMovement, handleJump,
		createCamera, updateCamera, getCameraTransform,
		updateParticles, emitRunTrail, emitJumpBurst, emitWallSlideTrail, emitDeathBurst,
		scanForGameElements,
		type CursorMode, CURSOR_MODES, applyCursorMode,
	} from '$lib/engine';
	import { createGameLoop, type GameLoop } from '$lib/engine/game-loop';
	import Caret from './Caret.svelte';
	import HUD from './HUD.svelte';
	import TagLabels from './TagLabels.svelte';
	import DOMInspector from './DOMInspector.svelte';

	interface Props {
		worldWidth?: number;
		worldHeight?: number;
		spawnX?: number;
		spawnY?: number;
		roomName?: string;
		children: Snippet;
	}

	let {
		worldWidth = 3000,
		worldHeight = 2000,
		spawnX = 200,
		spawnY = 200,
		roomName = 'index.html',
		children,
	}: Props = $props();

	let worldEl: HTMLElement;
	let containerEl: HTMLElement;
	let loop: GameLoop;

	let cursorMode: CursorMode = $state('line');

	let state = $state<GameState>({
		player: {
			pos: { x: spawnX, y: spawnY },
			vel: { x: 0, y: 0 },
			width: 20,
			height: 40,
			grounded: false,
			wallSliding: false,
			wallDir: 0,
			facing: 1,
			jumping: false,
			dead: false,
			respawnPos: { x: spawnX, y: spawnY },
			checkpoints: [],
		},
		camera: createCamera(worldWidth, worldHeight),
		elements: [],
		input: {
			left: false,
			right: false,
			jump: false,
			jumpPressed: false,
			interact: false,
			interactPressed: false,
		},
		config: { ...DEFAULT_CONFIG },
		particles: [],
		time: 0,
		deltaTime: 0,
		paused: false,
		currentRoom: roomName,
	});

	let coyoteTimer = 0;
	let jumpBufferTimer = 0;
	let deathTimer = 0;
	let doubleJumpAvailable = false;
	let nearestInteractive: GE | null = $state(null);
	let nearestElement: GE | null = $state(null);
	let frameCount = 0;
	let collectibles = $state(0);
	let showInspector = $state(true);

	function respawn() {
		state.player.pos = { ...state.player.respawnPos };
		state.player.vel = { x: 0, y: 0 };
		state.player.dead = false;
		state.player.grounded = false;
		deathTimer = 0;
	}

	function switchCursor(mode: CursorMode) {
		cursorMode = mode;
		state.config = applyCursorMode(state.player, { ...DEFAULT_CONFIG }, mode);
	}

	function update(dt: number) {
		if (state.paused) return;
		state.time += dt;
		state.deltaTime = dt;

		pollInput(state.input);

		// Toggle inspector with Tab
		// Pause with Escape
		// (handled in keydown listener)

		if (state.player.dead) {
			deathTimer += dt;
			if (deathTimer > 1) respawn();
			updateParticles(state.particles, dt);
			return;
		}

		// Movement
		applyMovement(state.player, state.input.left, state.input.right, state.config);

		// Jump buffering
		if (state.input.jumpPressed) {
			jumpBufferTimer = state.config.jumpBufferTime;
		}
		if (jumpBufferTimer > 0) jumpBufferTimer -= dt;

		// Coyote time
		if (state.player.grounded) {
			coyoteTimer = state.config.coyoteTime;
			doubleJumpAvailable = true;
		}
		if (coyoteTimer > 0) coyoteTimer -= dt;

		// Jump
		const jumpResult = handleJump(state.player, state.config, coyoteTimer, jumpBufferTimer);
		coyoteTimer = jumpResult.coyoteTimer;
		jumpBufferTimer = jumpResult.jumpBufferTimer;

		// Double jump for outline cursor
		if (!jumpResult.jumped && state.input.jumpPressed && !state.player.grounded && !state.player.wallSliding) {
			const abilities = CURSOR_MODES[cursorMode].abilities;
			if (abilities.doubleJump && doubleJumpAvailable) {
				state.player.vel.y = state.config.jumpForce * 0.85;
				doubleJumpAvailable = false;
				emitJumpBurst(state.particles, state.player);
			}
		}

		if (jumpResult.jumped) {
			emitJumpBurst(state.particles, state.player);
		}

		// Physics
		updatePlayerPhysics(state.player, state.config, dt);

		// Update element positions
		frameCount++;
		if (frameCount % 3 === 0 && containerEl) {
			updateElementBounds(state.elements, containerEl);
		}

		// Collision resolution
		const collisions = resolveAllCollisions(state.player, state.elements);

		// Apply element behaviors
		for (const collision of collisions) {
			applyElementBehavior(state.player, collision, state.config, dt);

			// Block cursor breaks destructible elements
			if (collision.element?.behavior === 'breakable' && CURSOR_MODES[cursorMode].abilities.breakBlocks) {
				collision.element.active = false;
				collision.element.el.style.opacity = '0.2';
				collision.element.el.style.pointerEvents = 'none';
			}

			// Check for cursor pickup
			if (collision.element?.el.dataset.cursorMode) {
				const newMode = collision.element.el.dataset.cursorMode as CursorMode;
				if (CURSOR_MODES[newMode] && newMode !== cursorMode) {
					switchCursor(newMode);
					collectibles++;
				}
			}
		}

		// Track nearest element for DOM Inspector
		let closestDist = 150;
		nearestElement = null;
		for (const el of state.elements) {
			if (!el.active) continue;
			const dx = (el.bounds.x + el.bounds.width / 2) - (state.player.pos.x + state.player.width / 2);
			const dy = (el.bounds.y + el.bounds.height / 2) - (state.player.pos.y + state.player.height / 2);
			const dist = Math.hypot(dx, dy);
			if (dist < closestDist) {
				closestDist = dist;
				nearestElement = el;
			}
		}

		// Death zones
		const deathZone = checkDeathCollisions(state.player, state.elements);
		if (deathZone) {
			state.player.dead = true;
			emitDeathBurst(state.particles, state.player);
		}

		// Fall off bottom
		if (state.player.pos.y > worldHeight + 100) {
			state.player.dead = true;
			emitDeathBurst(state.particles, state.player);
		}

		// Interaction
		nearestInteractive = findNearestInteractive(state.player, state.elements, 80);
		if (state.input.interactPressed && nearestInteractive) {
			handleInteraction(nearestInteractive);
		}

		// Particles
		emitRunTrail(state.particles, state.player);
		if (state.player.wallSliding) {
			emitWallSlideTrail(state.particles, state.player);
		}
		updateParticles(state.particles, dt);

		// Camera
		updateCamera(state.camera, state.player, dt);
	}

	function handleInteraction(element: GE) {
		switch (element.behavior) {
			case 'portal': {
				const href = element.state.href as string;
				if (href && href.startsWith('/')) {
					goto(href);
				}
				break;
			}
			case 'collapsible': {
				const details = element.el as HTMLDetailsElement;
				details.open = !details.open;
				element.state.open = details.open;
				setTimeout(() => {
					if (containerEl) updateElementBounds(state.elements, containerEl);
				}, 50);
				break;
			}
			case 'dialog-trap': {
				const dialog = element.el as HTMLDialogElement;
				if (dialog.open) {
					dialog.close();
				} else {
					dialog.showModal();
				}
				break;
			}
			case 'submit-gate': {
				element.el.classList.toggle('game-unlocked');
				element.state.unlocked = !element.state.unlocked;
				break;
			}
			case 'elevator': {
				const select = element.el as HTMLSelectElement;
				select.selectedIndex = (select.selectedIndex + 1) % select.options.length;
				const offset = select.selectedIndex * -60;
				element.el.style.transform = `translateY(${offset}px)`;
				break;
			}
		}
	}

	function render(_alpha: number) {
		// Rendering handled by Svelte reactivity
	}

	onMount(() => {
		initInput(state.input);

		// Extra key handlers
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				state.paused = !state.paused;
			}
			if (e.code === 'Tab') {
				e.preventDefault();
				showInspector = !showInspector;
			}
			// Number keys to switch cursor mode (for testing)
			if (e.code === 'Digit1') switchCursor('line');
			if (e.code === 'Digit2') switchCursor('underline');
			if (e.code === 'Digit3') switchCursor('block');
			if (e.code === 'Digit4') switchCursor('outline');
		};
		window.addEventListener('keydown', handleKeyDown);

		requestAnimationFrame(() => {
			if (containerEl) {
				state.elements = scanForGameElements(containerEl);
				updateElementBounds(state.elements, containerEl);
			}
			loop = createGameLoop(update, render);
			loop.start();
		});

		const handleResize = () => {
			state.camera.viewportWidth = window.innerWidth;
			state.camera.viewportHeight = window.innerHeight;
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	onDestroy(() => {
		loop?.stop();
	});
</script>

<div id="game-world" bind:this={worldEl}>
	<div
		class="world-container"
		bind:this={containerEl}
		style:width="{worldWidth}px"
		style:height="{worldHeight}px"
		style:transform={getCameraTransform(state.camera)}
	>
		{@render children()}
		<TagLabels elements={state.elements} />
		<Caret player={state.player} particles={state.particles} {cursorMode} />

		{#if nearestInteractive && !state.player.dead}
			<div
				class="interact-prompt"
				style:left="{nearestInteractive.bounds.x + nearestInteractive.bounds.width / 2}px"
				style:top="{nearestInteractive.bounds.y - 30}px"
			>
				<kbd class="prompt-key">E</kbd>
				<span class="prompt-text">{getInteractVerb(nearestInteractive)}</span>
			</div>
		{/if}
	</div>

	<HUD
		{roomName}
		playerPos={state.player.pos}
		grounded={state.player.grounded}
		paused={state.paused}
		{cursorMode}
		{collectibles}
	/>

	<DOMInspector element={nearestElement} visible={showInspector} />
</div>

<style>
	.world-container {
		position: absolute;
		top: 0;
		left: 0;
		will-change: transform;
	}

	.interact-prompt {
		position: absolute;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 4px 10px;
		background: var(--color-hud-bg);
		border: 1px solid var(--color-hud-border);
		border-radius: 6px;
		font-family: var(--font-mono);
		font-size: 11px;
		color: #e4e4e7;
		pointer-events: none;
		z-index: 101;
		animation: prompt-bob 1.5s ease-in-out infinite;
		white-space: nowrap;
	}

	.prompt-key {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 18px;
		height: 18px;
		background: var(--color-dom-surface);
		border: 1px solid var(--color-dom-border);
		border-radius: 3px;
		font-size: 10px;
		font-weight: 700;
		color: var(--color-caret);
	}

	.prompt-text {
		color: var(--color-syntax-comment);
	}

	@keyframes prompt-bob {
		0%, 100% { transform: translateX(-50%) translateY(0); }
		50% { transform: translateX(-50%) translateY(-4px); }
	}
</style>
