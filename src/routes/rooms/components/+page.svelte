<script lang="ts">
	import GameWorld from '$lib/components/game/GameWorld.svelte';
	import CursorPickup from '$lib/components/game/CursorPickup.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Alert from '$lib/components/ui/alert';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Resizable from '$lib/components/ui/resizable';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { Input } from '$lib/components/ui/input';
	import { Kbd } from '$lib/components/ui/kbd';
	import { Switch } from '$lib/components/ui/switch';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Toggle } from '$lib/components/ui/toggle';
	import { Slider } from '$lib/components/ui/slider';
</script>

<GameWorld
	worldWidth={5000}
	worldHeight={3000}
	spawnX={200}
	spawnY={300}
	roomName="components.html"
>
	<!-- HEADER -->
	<header
		data-platform
		class="absolute top-0 left-0 w-[5000px] h-[48px] flex items-center justify-between px-8 bg-zinc-900/90 border-b border-zinc-800"
	>
		<span class="text-lg font-bold text-violet-400 font-mono">🧩 Component Library</span>
		<a href="/" class="text-zinc-400 text-xs font-mono hover:text-white">&lt;a href="/"&gt; ← Back</a>
	</header>

	<!-- Title -->
	<div
		data-platform
		class="absolute top-[200px] left-[100px] w-[600px] px-6 py-4 bg-zinc-900/80 border border-zinc-800 rounded-xl"
	>
		<h1 class="text-2xl font-bold text-white mb-1" style="font-family: var(--font-display);">
			The Component Library
		</h1>
		<p class="text-zinc-400 text-xs">Every shadcn-svelte component is a platform, obstacle, or interactive element. Explore them all.</p>
		<div class="flex gap-2 mt-3">
			<Badge variant="default">56 components</Badge>
			<Badge variant="secondary">All platformable</Badge>
		</div>
	</div>

	<!-- Main ground -->
	<section
		data-platform
		class="absolute top-[420px] left-[0px] w-[5000px] h-[8px] bg-zinc-700 rounded-full"
	></section>

	<!-- === ROW 1: Card gallery === -->
	<div class="absolute top-[450px] left-[100px] flex gap-6">
		<div data-platform class="w-[240px]">
			<Card.Root class="bg-zinc-900 border-zinc-800">
				<Card.Header>
					<Card.Title class="font-mono text-xs text-white">Alert Card</Card.Title>
				</Card.Header>
				<Card.Content>
					<Alert.Root>
						<Alert.Title class="text-xs">Heads up!</Alert.Title>
						<Alert.Description class="text-[10px]">Alerts warn you about things.</Alert.Description>
					</Alert.Root>
				</Card.Content>
			</Card.Root>
		</div>

		<div data-platform class="w-[240px]">
			<Card.Root class="bg-zinc-900 border-zinc-800">
				<Card.Header>
					<Card.Title class="font-mono text-xs text-white">Progress Card</Card.Title>
				</Card.Header>
				<Card.Content>
					<Progress value={42} class="h-2" />
					<span class="text-zinc-500 text-[9px] font-mono mt-1 block">Level: 42%</span>
				</Card.Content>
			</Card.Root>
		</div>

		<div data-platform class="w-[240px]">
			<Card.Root class="bg-zinc-900 border-zinc-800">
				<Card.Header>
					<Card.Title class="font-mono text-xs text-white">Controls Card</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="flex flex-col gap-2">
						<div class="flex items-center gap-2">
							<Checkbox />
							<span class="text-zinc-400 text-xs">Option A</span>
						</div>
						<div class="flex items-center gap-2">
							<Switch />
							<span class="text-zinc-400 text-xs">Toggle</span>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<!-- === Stepping stones === -->
	{#each [
		{ x: 900, y: 500, w: 120 },
		{ x: 1050, y: 460, w: 100 },
		{ x: 1200, y: 420, w: 130 },
		{ x: 1370, y: 380, w: 110 },
		{ x: 1520, y: 340, w: 140 },
	] as p}
		<div
			data-platform
			class="absolute h-[8px] bg-zinc-600 rounded-full"
			style:left="{p.x}px"
			style:top="{p.y}px"
			style:width="{p.w}px"
		></div>
	{/each}

	<!-- === TABS tower === -->
	<div class="absolute top-[200px] left-[1500px] w-[400px]">
		<Tabs.Root value="buttons">
			<div data-platform>
				<Tabs.List class="bg-zinc-900 border border-zinc-800">
					<Tabs.Trigger value="buttons" class="font-mono text-[10px]">Buttons</Tabs.Trigger>
					<Tabs.Trigger value="badges" class="font-mono text-[10px]">Badges</Tabs.Trigger>
					<Tabs.Trigger value="kbd" class="font-mono text-[10px]">Kbd</Tabs.Trigger>
				</Tabs.List>
			</div>
			<Tabs.Content value="buttons">
				<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-b-lg flex flex-wrap gap-2">
					<Button variant="default" size="sm" class="text-xs">Default</Button>
					<Button variant="secondary" size="sm" class="text-xs">Secondary</Button>
					<Button variant="outline" size="sm" class="text-xs">Outline</Button>
					<Button variant="ghost" size="sm" class="text-xs">Ghost</Button>
					<Button variant="destructive" size="sm" class="text-xs">Destructive</Button>
				</div>
			</Tabs.Content>
			<Tabs.Content value="badges">
				<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-b-lg flex flex-wrap gap-2">
					<Badge>Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="outline">Outline</Badge>
				</div>
			</Tabs.Content>
			<Tabs.Content value="kbd">
				<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-b-lg flex flex-wrap gap-2">
					<Kbd>⌘</Kbd><Kbd>⇧</Kbd><Kbd>⌥</Kbd><Kbd>⌃</Kbd><Kbd>↵</Kbd><Kbd>⎋</Kbd>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>

	<!-- === ASIDE walls === -->
	<aside
		data-platform
		class="absolute top-[300px] left-[2000px] w-[50px] h-[600px] bg-zinc-800 border border-violet-500/30 rounded-lg"
	></aside>
	<aside
		data-platform
		class="absolute top-[300px] left-[2150px] w-[50px] h-[600px] bg-zinc-800 border border-violet-500/30 rounded-lg"
	></aside>

	<!-- Pickup at top of shaft -->
	<div class="absolute top-[260px] left-[2070px]">
		<CursorPickup mode="block" />
	</div>

	<!-- === Bouncy button row === -->
	<div class="absolute top-[900px] left-[100px] flex gap-4">
		{#each ['Primary', 'Secondary', 'Outline', 'Ghost', 'Destructive', 'Link'] as variant}
			<button
				data-platform
				class="px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-[10px] rounded-lg border-b-4 border-zinc-900 transition-all"
			>
				{variant}
			</button>
		{/each}
	</div>

	<!-- === Accordion staircase === -->
	<div class="absolute top-[950px] left-[800px] w-[350px]">
		<Accordion.Root type="single" class="w-full">
			{#each ['Accordion A', 'Accordion B', 'Accordion C (power-up!)'] as item, i}
				<Accordion.Item value="item-{i}">
					<div data-platform>
						<Accordion.Trigger class="text-xs font-mono text-zinc-300">{item}</Accordion.Trigger>
					</div>
					<Accordion.Content>
						{#if i === 2}
							<div class="p-2"><CursorPickup mode="outline" /></div>
						{:else}
							<p class="text-zinc-500 text-[10px] px-1">Expanded content creates new collision surfaces below.</p>
						{/if}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>

	<!-- === Skeleton loading platforms === -->
	<div class="absolute top-[1100px] left-[1400px] flex flex-col gap-4">
		<div data-platform><Skeleton class="h-[45px] w-[350px] bg-zinc-800" /></div>
		<div data-platform><Skeleton class="h-[45px] w-[280px] bg-zinc-800" /></div>
		<div data-platform><Skeleton class="h-[45px] w-[400px] bg-zinc-800" /></div>
		<div data-platform><Skeleton class="h-[45px] w-[320px] bg-zinc-800" /></div>
	</div>

	<!-- === Slider bridge === -->
	<div class="absolute top-[1000px] left-[1800px] w-[500px]">
		<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
			<span class="text-zinc-400 text-[10px] font-mono block mb-2">Slider Bridge</span>
			<Slider value={[60]} max={100} step={1} />
		</div>
	</div>

	<!-- === Toggle platforms === -->
	<div class="absolute top-[800px] left-[2300px] flex gap-4">
		<div data-platform class="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
			<Toggle class="text-[10px] font-mono">Bold</Toggle>
		</div>
		<div data-platform class="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
			<Toggle class="text-[10px] font-mono">Italic</Toggle>
		</div>
		<div data-platform class="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
			<Toggle class="text-[10px] font-mono">Under</Toggle>
		</div>
	</div>

	<!-- === Code platform === -->
	<pre
		data-platform
		class="absolute top-[1100px] left-[200px] w-[400px] bg-zinc-950 border border-cyan-500/20 rounded-lg p-3 text-[10px]"
	>
		<code class="text-cyan-300 font-mono"><span class="text-purple-400">import</span> * <span class="text-purple-400">as</span> Card <span class="text-purple-400">from</span> <span class="text-cyan-300">'$lib/components/ui/card'</span>;
<span class="text-zinc-500">// Slippery imports!</span></code>
	</pre>

	<!-- === Blockquote wind === -->
	<blockquote
		data-platform
		data-wind-dir="right"
		class="absolute top-[1300px] left-[600px] w-[350px] bg-zinc-900/50 border-l-4 border-violet-500 pl-4 py-3 rounded-r-lg"
	>
		<p class="text-violet-300/80 text-xs italic" style="font-family: var(--font-display);">
			"Components compose to create something greater..."
		</p>
		<div class="text-violet-400/30 text-xl mt-1">→ → →</div>
	</blockquote>

	<!-- === Collapsible === -->
	<div class="absolute top-[1400px] left-[100px] w-[300px]">
		<Collapsible.Root>
			<div data-platform class="flex items-center justify-between p-3 bg-zinc-900 border border-zinc-800 rounded-t-lg">
				<span class="text-zinc-300 text-xs font-mono">Collapsible Component</span>
				<Collapsible.Trigger>
					<Button variant="ghost" size="sm" class="text-[10px]">Toggle</Button>
				</Collapsible.Trigger>
			</div>
			<Collapsible.Content>
				<div data-platform class="p-3 bg-zinc-900 border border-t-0 border-zinc-800 rounded-b-lg">
					<p class="text-zinc-500 text-[10px] font-mono">This content appears and disappears, changing the level geometry!</p>
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	</div>

	<!-- === Input platforms === -->
	<div class="absolute top-[1500px] left-[500px] flex gap-6">
		<div data-platform data-behavior="typewriter" class="w-[200px]">
			<Input placeholder="platform A..." class="bg-zinc-950 border-zinc-700 text-xs font-mono" />
		</div>
		<div data-platform data-behavior="typewriter" class="w-[200px]">
			<Input placeholder="platform B..." class="bg-zinc-950 border-zinc-700 text-xs font-mono" />
		</div>
	</div>

	<!-- === Portal links === -->
	<div class="absolute top-[1600px] left-[100px] flex gap-6">
		<a
			href="/"
			data-platform
			class="block w-[200px] p-4 bg-gradient-to-br from-blue-950 to-zinc-900 border border-blue-500/40 rounded-xl text-center hover:border-blue-400 transition-colors"
		>
			<div class="text-blue-300 font-mono text-xs">&lt;a href="/"&gt;</div>
			<div class="text-zinc-500 text-[10px]">← Homepage</div>
		</a>
		<a
			href="/rooms/dialog-boss"
			data-platform
			class="block w-[200px] p-4 bg-gradient-to-br from-rose-950 to-zinc-900 border border-rose-500/40 rounded-xl text-center hover:border-rose-400 transition-colors"
		>
			<div class="text-rose-300 font-mono text-xs">&lt;a href="/boss"&gt;</div>
			<div class="text-zinc-500 text-[10px]">Boss Room →</div>
		</a>
	</div>

	<!-- Ground -->
	<section
		data-platform
		class="absolute top-[1800px] left-[0px] w-[5000px] h-[20px] bg-zinc-800 border-t-2 border-zinc-700"
	></section>

	<!-- Footer death zone -->
	<footer
		data-platform
		class="absolute top-[2800px] left-[0px] w-[5000px] h-[200px] bg-gradient-to-b from-rose-950/50 to-rose-950 border-t-2 border-rose-500/30 flex items-start justify-center pt-6"
	>
		<span class="text-rose-400 font-mono text-sm">⚠ &lt;footer&gt; — DEATH ZONE</span>
	</footer>
</GameWorld>
