<script lang="ts">
	import type { GameElement } from '$lib/engine/types';
	import { getLesson, type SemanticLesson } from '$lib/engine/semantics';
	import { getElementColor } from '$lib/engine/elements';

	interface Props {
		element: GameElement | null;
		visible?: boolean;
	}

	let { element, visible = true }: Props = $props();

	let lesson = $derived(element ? getLesson(element.tag) : null);
	let color = $derived(element ? getElementColor(element.behavior) : 'var(--color-dom-border)');
</script>

{#if visible && element && lesson}
	<div class="inspector" style:--accent-color={color}>
		<div class="inspector-header">
			<span class="inspector-icon">🔍</span>
			<span class="inspector-tag">{lesson.tag}</span>
			<span class="inspector-role" title="ARIA role">{lesson.a11yRole}</span>
		</div>

		<div class="inspector-body">
			<!-- Game behavior -->
			<div class="inspector-row">
				<span class="row-label">Game</span>
				<span class="row-value highlight">{lesson.gameBehavior}</span>
			</div>

			<!-- HTML purpose -->
			<div class="inspector-row">
				<span class="row-label">HTML</span>
				<span class="row-value">{lesson.htmlPurpose}</span>
			</div>

			<!-- Why it maps -->
			<div class="inspector-mapping">
				<span class="mapping-label">↔ Why this maps</span>
				<p class="mapping-text">{lesson.whyItMaps}</p>
			</div>

			<!-- A11y tip -->
			<div class="inspector-tip">
				<span class="tip-icon">💡</span>
				<span class="tip-text">{lesson.tip}</span>
			</div>
		</div>
	</div>
{/if}

<style>
	.inspector {
		position: fixed;
		bottom: 36px;
		right: 12px;
		width: 320px;
		max-height: 400px;
		overflow-y: auto;
		background: var(--color-hud-bg);
		border: 1px solid var(--accent-color, var(--color-dom-border));
		border-radius: 8px;
		font-family: var(--font-mono);
		font-size: 11px;
		z-index: 201;
		pointer-events: none;
		backdrop-filter: blur(12px);
		animation: inspector-in 0.2s ease-out;
	}

	@keyframes inspector-in {
		from { opacity: 0; transform: translateY(8px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.inspector-header {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 8px 12px;
		border-bottom: 1px solid rgba(63, 63, 70, 0.3);
		background: rgba(24, 24, 27, 0.5);
	}

	.inspector-icon {
		font-size: 12px;
	}

	.inspector-tag {
		color: var(--accent-color);
		font-weight: 700;
		font-size: 13px;
	}

	.inspector-role {
		margin-left: auto;
		padding: 2px 6px;
		background: rgba(63, 63, 70, 0.3);
		border-radius: 3px;
		color: var(--color-syntax-comment);
		font-size: 9px;
	}

	.inspector-body {
		padding: 8px 12px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.inspector-row {
		display: flex;
		gap: 8px;
	}

	.row-label {
		color: var(--color-syntax-comment);
		min-width: 32px;
		text-transform: uppercase;
		font-size: 9px;
		padding-top: 2px;
		flex-shrink: 0;
	}

	.row-value {
		color: #d4d4d8;
		line-height: 1.4;
	}

	.row-value.highlight {
		color: var(--accent-color);
		font-weight: 600;
	}

	.inspector-mapping {
		margin-top: 4px;
		padding: 6px 8px;
		background: rgba(63, 63, 70, 0.15);
		border-radius: 4px;
		border-left: 2px solid var(--accent-color);
	}

	.mapping-label {
		color: var(--accent-color);
		font-size: 9px;
		text-transform: uppercase;
		font-weight: 600;
		display: block;
		margin-bottom: 4px;
	}

	.mapping-text {
		color: #a1a1aa;
		line-height: 1.5;
		margin: 0;
	}

	.inspector-tip {
		display: flex;
		gap: 6px;
		padding: 6px 8px;
		background: rgba(59, 130, 246, 0.05);
		border-radius: 4px;
		border: 1px solid rgba(59, 130, 246, 0.1);
	}

	.tip-icon {
		font-size: 11px;
		flex-shrink: 0;
	}

	.tip-text {
		color: #71717a;
		line-height: 1.4;
	}
</style>
