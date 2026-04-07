<script lang="ts">
	import GameWorld from '$lib/components/game/GameWorld.svelte';
	import CursorPickup from '$lib/components/game/CursorPickup.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Switch } from '$lib/components/ui/switch';
	import { Slider } from '$lib/components/ui/slider';
	import { Progress } from '$lib/components/ui/progress';
	import { Badge } from '$lib/components/ui/badge';
	import { Label } from '$lib/components/ui/label';
	import { Kbd } from '$lib/components/ui/kbd';

	let formSubmitted = $state(false);
</script>

<GameWorld
	worldWidth={3500}
	worldHeight={2500}
	spawnX={150}
	spawnY={300}
	roomName="forms.html"
>
	<!-- HEADER -->
	<header
		data-platform
		class="absolute top-0 left-0 w-[3500px] h-[48px] flex items-center justify-between px-8 bg-zinc-900/90 border-b border-zinc-800"
	>
		<span class="text-lg font-bold text-cyan-400 font-mono">📝 Form World</span>
		<a href="/" class="text-zinc-400 text-xs font-mono hover:text-white">&lt;a href="/"&gt; ← Back to index</a>
	</header>

	<!-- Title platform -->
	<div
		data-platform
		class="absolute top-[200px] left-[100px] w-[500px] px-6 py-4 bg-zinc-900/80 border border-zinc-800 rounded-xl"
	>
		<h1 class="text-2xl font-bold text-white mb-1" style="font-family: var(--font-display);">
			The Form Page
		</h1>
		<p class="text-zinc-400 text-xs">Every input is a platform. Type to extend. Submit to unlock gates.</p>
	</div>

	<!-- Ground level -->
	<section
		data-platform
		class="absolute top-[450px] left-[0px] w-[3500px] h-[8px] bg-zinc-700 rounded-full"
	></section>

	<!-- === FORM 1: Login form === -->
	<form
		data-platform
		data-behavior="submit-gate"
		class="absolute top-[500px] left-[100px] w-[350px] p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
		onsubmit={(e) => { e.preventDefault(); formSubmitted = true; }}
	>
		<h2 class="text-white font-mono text-sm mb-4">Login Form (Submit to unlock)</h2>

		<div class="flex flex-col gap-3">
			<div>
				<Label class="text-xs text-zinc-400 font-mono mb-1">Username</Label>
				<div data-platform data-behavior="typewriter">
					<Input placeholder="caret_user" class="bg-zinc-950 border-zinc-700 text-sm font-mono" />
				</div>
			</div>
			<div>
				<Label class="text-xs text-zinc-400 font-mono mb-1">Password</Label>
				<div data-platform data-behavior="typewriter">
					<Input type="password" placeholder="••••••••" class="bg-zinc-950 border-zinc-700 text-sm font-mono" />
				</div>
			</div>
			<div class="flex items-center gap-2">
				<Checkbox id="remember" />
				<Label for="remember" class="text-xs text-zinc-400">Remember this cursor</Label>
			</div>
			<button
				data-platform
				type="submit"
				class="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm rounded-lg border-b-4 border-blue-800 transition-all"
			>
				Submit &lt;form&gt;
			</button>
		</div>

		{#if formSubmitted}
			<div class="mt-3 p-2 bg-emerald-950 border border-emerald-500/30 rounded text-emerald-400 text-xs font-mono">
				✓ Gate unlocked! The form has been submitted.
			</div>
		{/if}
	</form>

	<!-- === Input stepping stones === -->
	<div data-platform data-behavior="typewriter" class="absolute top-[550px] left-[550px] w-[200px]">
		<Input placeholder="step 1..." class="bg-zinc-950 border-zinc-700 text-sm font-mono" />
	</div>
	<div data-platform data-behavior="typewriter" class="absolute top-[500px] left-[800px] w-[200px]">
		<Input placeholder="step 2..." class="bg-zinc-950 border-zinc-700 text-sm font-mono" />
	</div>
	<div data-platform data-behavior="typewriter" class="absolute top-[450px] left-[1050px] w-[200px]">
		<Input placeholder="step 3..." class="bg-zinc-950 border-zinc-700 text-sm font-mono" />
	</div>

	<!-- === SELECT: Elevator === -->
	<div class="absolute top-[600px] left-[1350px]">
		<select
			data-platform
			data-behavior="elevator"
			class="w-[250px] h-[50px] bg-zinc-800 border border-purple-500/40 rounded-lg text-purple-300 text-sm font-mono px-4 appearance-none cursor-pointer"
		>
			<option>Floor 1 — Ground</option>
			<option>Floor 2 — Mezzanine</option>
			<option>Floor 3 — Upper</option>
			<option>Floor 4 — Penthouse</option>
		</select>
		<span class="text-zinc-500 text-[9px] font-mono block mt-1">&lt;select&gt; elevator — press E</span>
	</div>

	<!-- === Radio Group: Path selector === -->
	<div
		data-platform
		class="absolute top-[350px] left-[1350px] w-[280px] p-4 bg-zinc-900 border border-zinc-800 rounded-xl"
	>
		<span class="text-zinc-400 text-xs font-mono block mb-3">Choose your path:</span>
		<RadioGroup.Root value="left" class="flex flex-col gap-2">
			<div class="flex items-center gap-2">
				<RadioGroup.Item value="left" id="r1" />
				<Label for="r1" class="text-sm text-zinc-300 font-mono">← Left branch</Label>
			</div>
			<div class="flex items-center gap-2">
				<RadioGroup.Item value="right" id="r2" />
				<Label for="r2" class="text-sm text-zinc-300 font-mono">→ Right branch</Label>
			</div>
			<div class="flex items-center gap-2">
				<RadioGroup.Item value="up" id="r3" />
				<Label for="r3" class="text-sm text-zinc-300 font-mono">↑ Up (secret)</Label>
			</div>
		</RadioGroup.Root>
	</div>

	<!-- === Slider bridge === -->
	<div class="absolute top-[700px] left-[700px] w-[500px]">
		<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
			<span class="text-zinc-400 text-xs font-mono block mb-2">Slider Bridge — drag to extend</span>
			<Slider value={[30]} max={100} step={1} class="w-full" />
			<Progress value={30} class="h-1 mt-3" />
		</div>
	</div>

	<!-- === Switch platforms === -->
	<div class="absolute top-[800px] left-[200px] flex gap-8">
		<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-3">
			<Switch />
			<span class="text-zinc-400 text-xs font-mono">Platform A</span>
		</div>
		<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-3">
			<Switch />
			<span class="text-zinc-400 text-xs font-mono">Platform B</span>
		</div>
		<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-3">
			<Switch />
			<span class="text-zinc-400 text-xs font-mono">Platform C</span>
		</div>
	</div>

	<!-- === Textarea island === -->
	<div class="absolute top-[900px] left-[800px]">
		<div data-platform data-behavior="typewriter" class="w-[400px] p-4 bg-zinc-900 border border-cyan-500/20 rounded-lg">
			<label class="text-zinc-400 text-xs font-mono block mb-2">&lt;textarea&gt; island</label>
			<Textarea
				placeholder="Write your level design notes here..."
				class="bg-zinc-950 border-zinc-700 text-sm font-mono min-h-[100px]"
			/>
		</div>
	</div>

	<!-- === Bouncy buttons row === -->
	<div class="absolute top-[1050px] left-[100px] flex gap-4">
		{#each ['Submit', 'Reset', 'Cancel', 'Confirm', 'Delete'] as label}
			<button
				data-platform
				class="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs rounded-lg border-b-4 border-zinc-900 active:border-b-0 transition-all"
			>
				{label}
			</button>
		{/each}
	</div>

	<!-- === ASIDE walls for wall-jumping === -->
	<aside
		data-platform
		class="absolute top-[500px] left-[1700px] w-[50px] h-[600px] bg-zinc-800 border border-violet-500/30 rounded-lg"
	>
		<span class="text-violet-400 text-[8px] font-mono [writing-mode:vertical-rl] p-2">aside</span>
	</aside>
	<aside
		data-platform
		class="absolute top-[500px] left-[1850px] w-[50px] h-[600px] bg-zinc-800 border border-violet-500/30 rounded-lg"
	>
		<span class="text-violet-400 text-[8px] font-mono [writing-mode:vertical-rl] p-2">aside</span>
	</aside>

	<!-- Pickup at top of wall-jump shaft -->
	<div class="absolute top-[460px] left-[1745px]">
		<CursorPickup mode="underline" />
	</div>

	<!-- === Long ground === -->
	<section
		data-platform
		class="absolute top-[1200px] left-[0px] w-[3500px] h-[20px] bg-zinc-800 border-t-2 border-zinc-700"
	></section>

	<!-- === Portal back === -->
	<a
		href="/"
		data-platform
		class="absolute top-[1140px] left-[100px] block w-[200px] p-4 bg-gradient-to-br from-blue-950 to-zinc-900 border border-blue-500/40 rounded-xl text-center hover:border-blue-400 transition-colors"
	>
		<div class="text-blue-300 font-mono text-sm">&lt;a href="/"&gt;</div>
		<div class="text-zinc-500 text-xs">← Back to Homepage</div>
	</a>

	<!-- === FOOTER === -->
	<footer
		data-platform
		class="absolute top-[2300px] left-[0px] w-[3500px] h-[200px] bg-gradient-to-b from-rose-950/50 to-rose-950 border-t-2 border-rose-500/30 flex items-start justify-center pt-6"
	>
		<span class="text-rose-400 font-mono text-sm">⚠ &lt;footer&gt; — DEATH ZONE</span>
	</footer>
</GameWorld>
