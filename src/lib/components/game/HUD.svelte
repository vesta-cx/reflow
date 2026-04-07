<script lang="ts">
	import type { Vec2 } from '$lib/engine/types';
	import type { CursorMode } from '$lib/engine/powerups';

	interface Props {
		roomName: string;
		playerPos: Vec2;
		grounded: boolean;
		paused: boolean;
		cursorMode?: CursorMode;
		collectibles?: number;
	}

	let {
		roomName,
		playerPos,
		grounded,
		paused,
		cursorMode = 'line',
		collectibles = 0,
	}: Props = $props();
</script>

<div class="hud">
	<!-- Top bar: file tab style -->
	<div class="hud-tab-bar">
		<div class="hud-tab active">
			<span class="tab-icon">&#9679;</span>
			<span class="tab-name">{roomName}</span>
		</div>
		<div class="hud-tab inactive">
			<span class="tab-name">styles.css</span>
		</div>
	</div>

	<!-- Bottom bar: status bar style -->
	<div class="hud-status-bar">
		<div class="status-section">
			<span class="status-item cursor-mode" title="Cursor mode">
				{#if cursorMode === 'line'}
					<span class="cursor-icon line">│</span>
				{:else if cursorMode === 'underline'}
					<span class="cursor-icon underline">▁</span>
				{:else if cursorMode === 'block'}
					<span class="cursor-icon block">█</span>
				{:else}
					<span class="cursor-icon outline">▯</span>
				{/if}
				<span class="mode-label">{cursorMode}</span>
			</span>
			<span class="status-divider">│</span>
			<span class="status-item" title="Position">
				Ln {Math.round(playerPos.y)}, Col {Math.round(playerPos.x)}
			</span>
			<span class="status-divider">│</span>
			<span class="status-item grounded" class:active={grounded}>
				{grounded ? 'GROUNDED' : 'AIRBORNE'}
			</span>
		</div>
		<div class="status-section right">
			{#if collectibles > 0}
				<span class="status-item collectibles">
					<span class="collectible-icon">◆</span> {collectibles}
				</span>
				<span class="status-divider">│</span>
			{/if}
			<span class="status-item">UTF-8</span>
			<span class="status-divider">│</span>
			<span class="status-item brand">Reflow</span>
		</div>
	</div>

	<!-- Pause overlay -->
	{#if paused}
		<div class="pause-overlay">
			<div class="pause-text">// PAUSED</div>
			<div class="pause-hint">Press ESC to resume</div>
		</div>
	{/if}
</div>

<style>
	.hud {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 200;
		font-family: var(--font-mono);
	}

	.hud-tab-bar {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		gap: 0;
		background: rgba(9, 9, 11, 0.9);
		border-bottom: 1px solid var(--color-dom-border);
		height: 32px;
	}

	.hud-tab {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 0 16px;
		font-size: 12px;
		height: 100%;
		border-right: 1px solid var(--color-dom-border);
	}

	.hud-tab.active {
		background: var(--color-dom-surface);
		color: #e4e4e7;
	}

	.hud-tab.inactive {
		color: var(--color-syntax-comment);
	}

	.tab-icon {
		font-size: 8px;
		color: var(--color-caret);
	}

	.tab-name {
		font-size: 12px;
	}

	.hud-status-bar {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 12px;
		background: var(--color-caret-glow);
		height: 24px;
		font-size: 11px;
		color: white;
	}

	.status-section {
		display: flex;
		align-items: center;
		gap: 0;
	}

	.status-section.right {
		gap: 0;
	}

	.status-item {
		padding: 0 8px;
		white-space: nowrap;
	}

	.status-divider {
		color: rgba(255, 255, 255, 0.3);
		font-size: 10px;
	}

	.cursor-mode {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.cursor-icon {
		font-size: 14px;
		line-height: 1;
	}

	.mode-label {
		text-transform: uppercase;
		font-size: 10px;
		letter-spacing: 0.5px;
	}

	.grounded {
		font-size: 10px;
		letter-spacing: 0.5px;
		opacity: 0.7;
	}

	.grounded.active {
		opacity: 1;
	}

	.collectible-icon {
		color: var(--color-syntax-tag);
	}

	.brand {
		font-weight: 700;
		letter-spacing: 1px;
	}

	.pause-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgba(9, 9, 11, 0.8);
		backdrop-filter: blur(4px);
	}

	.pause-text {
		font-size: 48px;
		font-weight: 700;
		color: var(--color-syntax-comment);
		font-family: var(--font-mono);
	}

	.pause-hint {
		margin-top: 12px;
		font-size: 14px;
		color: var(--color-syntax-comment);
	}
</style>
