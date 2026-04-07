<script lang="ts">
	import type { CursorMode } from '$lib/engine/powerups';
	import { CURSOR_MODES } from '$lib/engine/powerups';

	interface Props {
		mode: CursorMode;
		collected?: boolean;
	}

	let { mode, collected = false }: Props = $props();

	const powerUp = CURSOR_MODES[mode];
</script>

<div
	class="cursor-pickup"
	class:collected
	data-platform
	data-behavior="checkpoint"
	data-cursor-mode={mode}
>
	<div class="pickup-glow"></div>
	<div class="pickup-icon">{powerUp.icon}</div>
	<div class="pickup-label">{powerUp.label}</div>
</div>

<style>
	.cursor-pickup {
		position: relative;
		width: 48px;
		height: 48px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--color-caret);
		border-radius: 8px;
		background: rgba(96, 165, 250, 0.1);
		animation: pickup-float 2s ease-in-out infinite;
		cursor: default;
	}

	.cursor-pickup.collected {
		opacity: 0.3;
		border-color: var(--color-dom-muted);
		animation: none;
	}

	.pickup-glow {
		position: absolute;
		inset: -6px;
		background: radial-gradient(ellipse, var(--color-caret-glow) 0%, transparent 70%);
		opacity: 0.15;
		filter: blur(6px);
		border-radius: 12px;
	}

	.collected .pickup-glow {
		display: none;
	}

	.pickup-icon {
		font-size: 20px;
		color: var(--color-caret);
		line-height: 1;
	}

	.pickup-label {
		font-family: var(--font-mono);
		font-size: 8px;
		color: var(--color-syntax-comment);
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin-top: 2px;
	}

	@keyframes pickup-float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-6px); }
	}
</style>
