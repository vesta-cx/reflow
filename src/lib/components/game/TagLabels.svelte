<script lang="ts">
	import type { GameElement } from '$lib/engine/types';
	import { getElementLabel, getElementColor } from '$lib/engine/elements';

	interface Props {
		elements: GameElement[];
	}

	let { elements }: Props = $props();
</script>

{#each elements as ge (ge.el)}
	{#if ge.active}
		<div
			class="tag-label-container"
			style:left="{ge.bounds.x}px"
			style:top="{ge.bounds.y}px"
			style:width="{ge.bounds.width}px"
			style:height="{ge.bounds.height}px"
		>
			<!-- Tag name label -->
			<span
				class="tag-label"
				style:color={getElementColor(ge.behavior)}
			>
				{getElementLabel(ge.el)}
			</span>

			<!-- Box model outline -->
			<div
				class="element-outline"
				style:border-color={getElementColor(ge.behavior)}
			></div>
		</div>
	{/if}
{/each}

<style>
	.tag-label-container {
		position: absolute;
		pointer-events: none;
		z-index: 50;
	}

	.tag-label {
		position: absolute;
		top: -16px;
		left: 2px;
		font-family: var(--font-mono);
		font-size: 9px;
		opacity: 0.5;
		white-space: nowrap;
		line-height: 1;
		padding: 1px 4px;
		background: rgba(9, 9, 11, 0.7);
		border-radius: 2px;
	}

	.element-outline {
		position: absolute;
		inset: 0;
		border: 1px dashed;
		opacity: 0.15;
		border-radius: 2px;
		pointer-events: none;
	}
</style>
