<script lang="ts">
	import GameWorld from '$lib/components/game/GameWorld.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import { Kbd } from '$lib/components/ui/kbd';

	let bossHP = $state(100);
	let bossPhase = $state(1);
	let bossDefeated = $state(false);
	let bossDialogOpen = $state(false);

	function hitBoss() {
		bossHP = Math.max(0, bossHP - 20);
		if (bossHP <= 60 && bossPhase === 1) bossPhase = 2;
		if (bossHP <= 20 && bossPhase === 2) bossPhase = 3;
		if (bossHP <= 0) {
			bossDefeated = true;
			bossDialogOpen = false;
		}
	}
</script>

<GameWorld
	worldWidth={2500}
	worldHeight={2000}
	spawnX={200}
	spawnY={600}
	roomName="dialog-boss.html"
>
	<!-- HEADER -->
	<header
		data-platform
		class="absolute top-0 left-0 w-[2500px] h-[48px] flex items-center justify-between px-8 bg-zinc-900/90 border-b border-zinc-800"
	>
		<div class="flex items-center gap-3">
			<span class="text-lg font-bold text-rose-400 font-mono">👾 Boss Room</span>
			<Badge variant="destructive">DANGER</Badge>
		</div>
		<a href="/" class="text-zinc-400 text-xs font-mono hover:text-white">&lt;a href="/"&gt; ← Escape</a>
	</header>

	<!-- Intro text -->
	<div
		data-platform
		class="absolute top-[500px] left-[100px] w-[500px] px-6 py-4 bg-zinc-900/80 border border-rose-500/20 rounded-xl"
	>
		<h1 class="text-2xl font-bold text-rose-400 mb-2" style="font-family: var(--font-display);">
			The Dialog Boss
		</h1>
		<p class="text-zinc-400 text-xs leading-relaxed">
			Modal dialogs trap focus — you can't interact with anything behind them until dismissed.
			The <code class="text-rose-400">&lt;dialog&gt;</code> boss uses this power against you.
			Close all its modals to defeat it.
		</p>
		<div class="flex gap-2 mt-3">
			<Kbd>E</Kbd>
			<span class="text-zinc-500 text-xs self-center">Interact with buttons to damage boss</span>
		</div>
	</div>

	<!-- Approach platforms -->
	<div data-platform class="absolute top-[700px] left-[100px] w-[400px] h-[8px] bg-zinc-600 rounded-full"></div>
	<div data-platform class="absolute top-[700px] left-[600px] w-[200px] h-[8px] bg-zinc-600 rounded-full"></div>
	<div data-platform class="absolute top-[650px] left-[850px] w-[200px] h-[8px] bg-zinc-600 rounded-full"></div>

	<!-- === BOSS ARENA === -->
	<section
		data-platform
		class="absolute top-[800px] left-[200px] w-[2000px] h-[8px] bg-rose-900/50 rounded-full"
	></section>

	<!-- Boss health display -->
	<div class="absolute top-[750px] left-[700px] w-[400px] text-center">
		{#if !bossDefeated}
			<div class="text-rose-400 font-mono text-sm mb-2">
				&lt;dialog&gt; — Phase {bossPhase}/3
			</div>
			<Progress value={bossHP} max={100} class="h-3" />
			<div class="text-rose-300 text-xs font-mono mt-1">{bossHP}% focus trapped</div>
		{:else}
			<div class="text-emerald-400 font-mono text-lg">✓ Dialog Defeated!</div>
			<div class="text-zinc-500 text-xs mt-1">Focus is free. The modal tyranny has ended.</div>
		{/if}
	</div>

	<!-- Boss body: a giant dialog-styled element -->
	<div
		data-platform
		class="absolute top-[850px] left-[500px] w-[800px] h-[300px] rounded-xl border-2 transition-all duration-500 {bossDefeated ? 'border-emerald-500 bg-emerald-950/20' : 'border-rose-500 bg-rose-950/30'}"
	>
		{#if !bossDefeated}
			<!-- Phase 1: Simple buttons -->
			<div class="p-6">
				<div class="text-rose-300 font-mono text-sm mb-4">
					{#if bossPhase === 1}
						Phase 1: "I am &lt;dialog&gt;. I trap focus. Nothing escapes my modal."
					{:else if bossPhase === 2}
						Phase 2: "You dare dismiss me? I'll spawn more modals!"
					{:else}
						Phase 3: "NO! You can't... the backdrop... is fading..."
					{/if}
				</div>

				<div class="flex gap-3 flex-wrap">
					<button
						data-platform
						onclick={hitBoss}
						class="px-4 py-2 bg-rose-800 hover:bg-rose-700 text-white font-mono text-xs rounded-lg border-b-4 border-rose-950 active:border-b-0 transition-all"
					>
						💥 Hit (Bounce + Damage)
					</button>

					{#if bossPhase >= 2}
						<button
							data-platform
							onclick={hitBoss}
							class="px-4 py-2 bg-rose-800 hover:bg-rose-700 text-white font-mono text-xs rounded-lg border-b-4 border-rose-950 active:border-b-0 transition-all"
						>
							💥 Side Attack
						</button>
					{/if}

					{#if bossPhase >= 3}
						<button
							data-platform
							onclick={hitBoss}
							class="px-4 py-2 bg-amber-800 hover:bg-amber-700 text-white font-mono text-xs rounded-lg border-b-4 border-amber-950 active:border-b-0 transition-all"
						>
							⚡ dialog.close() — FINISHER
						</button>
					{/if}
				</div>

				<!-- Inner platforms in boss body -->
				<div class="flex gap-4 mt-6">
					{#each Array(bossPhase + 2) as _, i}
						<div
							data-platform
							class="h-[6px] bg-rose-700/50 rounded-full"
							style:width="{80 + i * 30}px"
						></div>
					{/each}
				</div>
			</div>
		{:else}
			<div class="flex items-center justify-center h-full flex-col gap-4">
				<span class="text-emerald-400 text-4xl">🎉</span>
				<p class="text-emerald-300 font-mono text-lg">dialog.close() succeeded!</p>
				<p class="text-zinc-500 text-xs">The modal has been dismissed. Focus is restored to the document.</p>
				<Alert.Root class="max-w-md">
					<Alert.Title class="text-xs">A11y Lesson</Alert.Title>
					<Alert.Description class="text-[10px]">
						Modal dialogs (dialog.showModal()) trap focus inside them. This is correct a11y behavior —
						users shouldn't interact with content behind a modal. Always provide a way to close!
					</Alert.Description>
				</Alert.Root>
			</div>
		{/if}
	</div>

	<!-- Wall-jump asides flanking the arena -->
	<aside
		data-platform
		class="absolute top-[700px] left-[100px] w-[50px] h-[500px] bg-zinc-800 border border-violet-500/30 rounded-lg"
	></aside>
	<aside
		data-platform
		class="absolute top-[700px] left-[1650px] w-[50px] h-[500px] bg-zinc-800 border border-violet-500/30 rounded-lg"
	></aside>

	<!-- Escape portal (only after defeat) -->
	{#if bossDefeated}
		<a
			href="/"
			data-platform
			class="absolute top-[1100px] left-[700px] block w-[300px] p-5 bg-gradient-to-br from-emerald-950 to-zinc-900 border border-emerald-500/40 rounded-xl text-center hover:border-emerald-400 transition-colors"
		>
			<div class="text-emerald-400 text-2xl mb-2">🏆</div>
			<div class="text-emerald-300 font-mono text-sm">Return Victorious</div>
			<div class="text-zinc-500 text-xs mt-1">&lt;a href="/"&gt; ← Back to index</div>
		</a>
	{/if}

	<!-- Ground -->
	<section
		data-platform
		class="absolute top-[1300px] left-[0px] w-[2500px] h-[20px] bg-zinc-800 border-t-2 border-zinc-700"
	></section>

	<!-- Footer death zone -->
	<footer
		data-platform
		class="absolute top-[1800px] left-[0px] w-[2500px] h-[200px] bg-gradient-to-b from-rose-950/50 to-rose-950 border-t-2 border-rose-500/30 flex items-start justify-center pt-6"
	>
		<span class="text-rose-400 font-mono text-sm">⚠ &lt;footer&gt; — DEATH ZONE</span>
	</footer>
</GameWorld>
