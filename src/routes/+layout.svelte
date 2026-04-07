<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>Reflow — A Platformer Inside the DOM</title>
	<meta name="description" content="Platform on divs. Wall-jump off asides. The DOM is the level." />
</svelte:head>

{@render children()}
