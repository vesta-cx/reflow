<script lang="ts">
	import type { PlayerState, Particle } from '$lib/engine/types';
	import type { CursorMode } from '$lib/engine/powerups';

	interface Props {
		player: PlayerState;
		particles: Particle[];
		cursorMode?: CursorMode;
	}

	let { player, particles, cursorMode = 'line' }: Props = $props();

	let animState = $derived.by(() => {
		if (player.dead) return 'dead';
		if (player.wallSliding) return 'wall-slide';
		if (!player.grounded && player.vel.y < -50) return 'jump';
		if (!player.grounded && player.vel.y > 50) return 'fall';
		if (Math.abs(player.vel.x) > 30) return 'run';
		return 'idle';
	});

	let squash = $derived.by(() => {
		if (animState === 'jump') return { x: 0.8, y: 1.3 };
		if (animState === 'fall') return { x: 0.9, y: 1.1 };
		if (animState === 'dead') return { x: 1.5, y: 0.3 };
		return { x: 1, y: 1 };
	});

	let eyeOffset = $derived.by(() => {
		if (animState === 'run') return { x: player.facing * 2, y: 0 };
		if (animState === 'jump') return { x: 0, y: -2 };
		if (animState === 'fall') return { x: 0, y: 2 };
		if (animState === 'wall-slide') return { x: player.wallDir * -3, y: 0 };
		return { x: 0, y: 0 };
	});

	// Eye position varies by cursor mode
	let eyeY = $derived(cursorMode === 'underline' ? 5 : cursorMode === 'block' ? 12 : 14);
	let eyeSpacing = $derived(cursorMode === 'block' ? 4 : 1.5);
</script>

<!-- Player character: Caret -->
<div
	class="caret-container"
	style:left="{player.pos.x}px"
	style:top="{player.pos.y}px"
	style:width="{player.width}px"
	style:height="{player.height}px"
	style:transform="scaleX({player.facing * squash.x}) scaleY({squash.y})"
	data-state={animState}
	data-cursor={cursorMode}
>
	<!-- Glow effect -->
	<div class="caret-glow" class:block-glow={cursorMode === 'block'}></div>

	<!-- LINE mode: classic thin cursor bars -->
	{#if cursorMode === 'line'}
		<svg viewBox="0 0 20 40" class="caret-body" class:blink={animState === 'idle'}>
			<rect x="3" y="2" width="3" height="36" rx="1.5" fill="var(--color-caret)" />
			<rect x="14" y="2" width="3" height="36" rx="1.5" fill="var(--color-caret)" />
			<!-- Eyes -->
			<circle cx={8.5 + eyeOffset.x} cy={eyeY + eyeOffset.y} r="2" fill="#e4e4e7" />
			<circle cx={11.5 + eyeOffset.x} cy={eyeY + eyeOffset.y} r="2" fill="#e4e4e7" />
			<circle cx={8.5 + eyeOffset.x * 1.3} cy={eyeY + eyeOffset.y * 1.2} r="1" fill="var(--color-dom-bg)" />
			<circle cx={11.5 + eyeOffset.x * 1.3} cy={eyeY + eyeOffset.y * 1.2} r="1" fill="var(--color-dom-bg)" />
			{@render legs(20, 40)}
		</svg>

	<!-- UNDERLINE mode: flat wide bar -->
	{:else if cursorMode === 'underline'}
		<svg viewBox="0 0 24 12" class="caret-body" class:blink={animState === 'idle'}>
			<rect x="1" y="7" width="22" height="4" rx="2" fill="var(--color-caret)" />
			<!-- Eyes sit on top of the bar -->
			<circle cx={9 + eyeOffset.x} cy={eyeY + eyeOffset.y} r="2" fill="#e4e4e7" />
			<circle cx={15 + eyeOffset.x} cy={eyeY + eyeOffset.y} r="2" fill="#e4e4e7" />
			<circle cx={9 + eyeOffset.x * 1.3} cy={eyeY + eyeOffset.y * 1.2} r="1" fill="var(--color-dom-bg)" />
			<circle cx={15 + eyeOffset.x * 1.3} cy={eyeY + eyeOffset.y * 1.2} r="1" fill="var(--color-dom-bg)" />
		</svg>

	<!-- BLOCK mode: solid filled rectangle -->
	{:else if cursorMode === 'block'}
		<svg viewBox="0 0 24 32" class="caret-body" class:blink={animState === 'idle'}>
			<rect x="1" y="1" width="22" height="30" rx="3" fill="var(--color-caret)" opacity="0.9" />
			<!-- Eyes are darker on the bright block -->
			<circle cx={8 + eyeOffset.x} cy={eyeY + eyeOffset.y} r="2.5" fill="var(--color-dom-bg)" />
			<circle cx={16 + eyeOffset.x} cy={eyeY + eyeOffset.y} r="2.5" fill="var(--color-dom-bg)" />
			<circle cx={8 + eyeOffset.x * 1.3} cy={eyeY + eyeOffset.y * 1.2} r="1.2" fill="#e4e4e7" />
			<circle cx={16 + eyeOffset.x * 1.3} cy={eyeY + eyeOffset.y * 1.2} r="1.2" fill="#e4e4e7" />
			{@render blockLegs(24, 32)}
		</svg>

	<!-- OUTLINE mode: hollow rectangle border -->
	{:else if cursorMode === 'outline'}
		<svg viewBox="0 0 22 36" class="caret-body" class:blink={animState === 'idle'}>
			<rect x="2" y="2" width="18" height="32" rx="3" fill="none" stroke="var(--color-caret)" stroke-width="2.5" opacity="0.8" />
			<!-- Ghost-like eyes -->
			<circle cx={8 + eyeOffset.x} cy={14 + eyeOffset.y} r="2" fill="var(--color-caret)" opacity="0.8" />
			<circle cx={14 + eyeOffset.x} cy={14 + eyeOffset.y} r="2" fill="var(--color-caret)" opacity="0.8" />
			<circle cx={8 + eyeOffset.x * 1.3} cy={14 + eyeOffset.y * 1.2} r="1" fill="#e4e4e7" />
			<circle cx={14 + eyeOffset.x * 1.3} cy={14 + eyeOffset.y * 1.2} r="1" fill="#e4e4e7" />
			{@render legs(22, 36)}
			<!-- Phase effect: dashed inner border -->
			<rect x="5" y="5" width="12" height="26" rx="1" fill="none" stroke="var(--color-caret)" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.3" />
		</svg>

	<!-- POINTER mode: mouse cursor arrow -->
	{:else}
		<svg viewBox="0 0 24 24" class="caret-body pointer-mode">
			<!-- Classic mouse pointer arrow -->
			<polygon
				points="3,2 3,20 8,16 13,22 16,20 11,14 18,14"
				fill="white"
				stroke="var(--color-dom-bg)"
				stroke-width="1.5"
				stroke-linejoin="round"
			/>
			<!-- Eyes on the arrow body -->
			<circle cx={8 + eyeOffset.x * 0.5} cy={10 + eyeOffset.y * 0.5} r="1.5" fill="var(--color-dom-bg)" />
			<circle cx={8 + eyeOffset.x * 0.7} cy={10 + eyeOffset.y * 0.6} r="0.7" fill="var(--color-caret)" />
		</svg>
	{/if}

	<!-- Death text -->
	{#if animState === 'dead'}
		<span class="death-text">undefined</span>
	{/if}
</div>

<!-- Particles -->
{#each particles as p (p)}
	<div
		class="particle"
		style:left="{p.x}px"
		style:top="{p.y}px"
		style:width="{p.size}px"
		style:height="{p.size}px"
		style:background={p.color}
		style:opacity={p.life / p.maxLife}
	></div>
{/each}

{#snippet legs(w: number, h: number)}
	{#if animState === 'run'}
		{@const phase = Date.now() % 200 < 100}
		<line x1={w*0.35} y1={h*0.9} x2={phase ? w*0.2 : w*0.5} y2={h} stroke="var(--color-caret)" stroke-width="2" stroke-linecap="round" />
		<line x1={w*0.65} y1={h*0.9} x2={phase ? w*0.5 : w*0.8} y2={h} stroke="var(--color-caret)" stroke-width="2" stroke-linecap="round" />
	{:else if animState === 'wall-slide'}
		<line x1={w*0.35} y1={h*0.9} x2={w*0.25} y2={h} stroke="var(--color-caret)" stroke-width="2" stroke-linecap="round" />
		<line x1={w*0.65} y1={h*0.9} x2={w*0.75} y2={h} stroke="var(--color-caret)" stroke-width="2" stroke-linecap="round" />
	{:else if animState !== 'dead'}
		<line x1={w*0.35} y1={h*0.9} x2={w*0.3} y2={h} stroke="var(--color-caret)" stroke-width="2" stroke-linecap="round" />
		<line x1={w*0.65} y1={h*0.9} x2={w*0.7} y2={h} stroke="var(--color-caret)" stroke-width="2" stroke-linecap="round" />
	{/if}
{/snippet}

{#snippet blockLegs(w: number, h: number)}
	{#if animState === 'run'}
		{@const phase = Date.now() % 200 < 100}
		<rect x={phase ? 3 : 8} y={h-3} width="5" height="3" rx="1" fill="var(--color-caret)" />
		<rect x={phase ? 14 : 10} y={h-3} width="5" height="3" rx="1" fill="var(--color-caret)" />
	{:else if animState !== 'dead'}
		<rect x="4" y={h-3} width="5" height="3" rx="1" fill="var(--color-caret)" />
		<rect x="15" y={h-3} width="5" height="3" rx="1" fill="var(--color-caret)" />
	{/if}
{/snippet}

<style>
	.caret-container {
		position: absolute;
		pointer-events: none;
		z-index: 100;
		transform-origin: center bottom;
		transition: transform 0.05s ease-out;
	}

	.caret-glow {
		position: absolute;
		inset: -8px;
		background: radial-gradient(ellipse, var(--color-caret-glow) 0%, transparent 70%);
		opacity: 0.2;
		filter: blur(8px);
		pointer-events: none;
	}

	.caret-glow.block-glow {
		inset: -12px;
		opacity: 0.3;
	}

	.caret-body {
		width: 100%;
		height: 100%;
		filter: drop-shadow(0 0 6px var(--color-caret-glow));
		overflow: visible;
	}

	.caret-body.blink {
		animation: caret-blink 1s step-end infinite;
	}

	[data-cursor="outline"] .caret-body {
		filter: drop-shadow(0 0 8px var(--color-caret-glow)) drop-shadow(0 0 2px var(--color-caret));
	}

	[data-cursor="block"] .caret-body {
		filter: drop-shadow(0 0 10px var(--color-caret-glow));
	}

	.death-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--color-syntax-error);
		white-space: nowrap;
		animation: death-fade 1s ease-out forwards;
	}

	@keyframes death-fade {
		0% { opacity: 1; transform: translate(-50%, -50%); }
		100% { opacity: 0; transform: translate(-50%, -200%); }
	}

	.particle {
		position: absolute;
		border-radius: 50%;
		pointer-events: none;
		z-index: 99;
	}
</style>
