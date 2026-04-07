<script lang="ts">
	import GameWorld from '$lib/components/game/GameWorld.svelte';
	import CursorPickup from '$lib/components/game/CursorPickup.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as Popover from '$lib/components/ui/popover';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Alert from '$lib/components/ui/alert';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import { Separator } from '$lib/components/ui/separator';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Switch } from '$lib/components/ui/switch';
	import { Input } from '$lib/components/ui/input';
	import { Slider } from '$lib/components/ui/slider';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Toggle } from '$lib/components/ui/toggle';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { Kbd } from '$lib/components/ui/kbd';

	let dialogOpen = $state(false);
</script>

<GameWorld
	worldWidth={4000}
	worldHeight={3000}
	spawnX={200}
	spawnY={400}
	roomName="index.html"
>
	<!-- ========================================== -->
	<!-- LEVEL 1: THE HOMEPAGE                       -->
	<!-- A real landing page. Every element is a     -->
	<!-- platform. The DOM IS the world.             -->
	<!-- ========================================== -->

	<!-- === HEADER / CEILING === -->
	<header
		data-platform
		class="absolute top-0 left-0 w-[4000px] h-[48px] flex items-center justify-between px-8 bg-zinc-900/90 border-b border-zinc-800 backdrop-blur-sm"
	>
		<div class="flex items-center gap-3">
			<span class="text-xl font-bold text-blue-400 font-mono">⌨ Reflow</span>
			<Badge variant="secondary">v0.1.0</Badge>
		</div>
		<nav class="flex items-center gap-4 text-sm text-zinc-400">
			<a href="/rooms/forms" class="hover:text-white transition-colors">Forms</a>
			<a href="/rooms/components" class="hover:text-white transition-colors">Components</a>
			<a href="/rooms/dialog-boss" class="hover:text-white transition-colors">Boss Room</a>
		</nav>
	</header>

	<!-- === HERO SECTION: Main platforms === -->
	<section
		data-platform
		class="absolute top-[480px] left-[100px] w-[800px] h-[8px] bg-zinc-700 rounded-full"
	></section>

	<!-- Hero title block - a big platform -->
	<div
		data-platform
		class="absolute top-[320px] left-[120px] w-[700px] px-8 py-6 bg-zinc-900/80 border border-zinc-800 rounded-xl"
	>
		<h1 class="text-4xl font-bold text-white mb-2" style="font-family: var(--font-display);">
			Welcome to the DOM
		</h1>
		<p class="text-zinc-400 text-sm leading-relaxed max-w-[500px]">
			You are <code class="text-blue-400">Caret</code> — a sentient text cursor lost inside a browser reflow.
			Platform across HTML elements. Every <code class="text-amber-400">&lt;tag&gt;</code> has unique physics.
		</p>
		<div class="flex gap-2 mt-4">
			<Kbd>←→</Kbd>
			<span class="text-zinc-500 text-xs self-center">Move</span>
			<Kbd>Space</Kbd>
			<span class="text-zinc-500 text-xs self-center">Jump</span>
			<Kbd>E</Kbd>
			<span class="text-zinc-500 text-xs self-center">Interact</span>
		</div>
	</div>

	<!-- Steps down from hero -->
	<div
		data-platform
		class="absolute top-[550px] left-[300px] w-[200px] h-[8px] bg-zinc-600 rounded-full"
	></div>
	<div
		data-platform
		class="absolute top-[620px] left-[450px] w-[180px] h-[8px] bg-zinc-600 rounded-full"
	></div>
	<div
		data-platform
		class="absolute top-[690px] left-[250px] w-[250px] h-[8px] bg-zinc-600 rounded-full"
	></div>

	<!-- === CHECKPOINT: <mark> === -->
	<mark
		data-platform
		class="absolute top-[670px] left-[340px] px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono rounded border border-amber-500/30"
	>
		checkpoint_1
	</mark>

	<!-- === ASIDE: Wall-jump tower === -->
	<aside
		data-platform
		class="absolute top-[400px] left-[950px] w-[60px] h-[500px] bg-zinc-800 border border-violet-500/30 rounded-lg px-2 py-3"
	>
		<span class="text-violet-400 text-[9px] font-mono writing-vertical [writing-mode:vertical-rl]">
			aside.wall-jump
		</span>
	</aside>

	<aside
		data-platform
		class="absolute top-[400px] left-[1100px] w-[60px] h-[500px] bg-zinc-800 border border-violet-500/30 rounded-lg px-2 py-3"
	>
		<span class="text-violet-400 text-[9px] font-mono writing-vertical [writing-mode:vertical-rl]">
			aside.wall-jump
		</span>
	</aside>

	<!-- === BOUNCY BUTTONS === -->
	<div class="absolute top-[850px] left-[100px] flex gap-6">
		<button
			data-platform
			class="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-sm rounded-lg border-b-4 border-emerald-800 active:border-b-0 active:mt-1 transition-all"
		>
			&lt;button&gt; Bounce!
		</button>
		<button
			data-platform
			class="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-mono text-sm rounded-lg border-b-4 border-violet-800 active:border-b-0 active:mt-1 transition-all"
		>
			&lt;button&gt; Boing!
		</button>
		<button
			data-platform
			class="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-mono text-sm rounded-lg border-b-4 border-rose-800 active:border-b-0 active:mt-1 transition-all"
		>
			&lt;button&gt; Spring!
		</button>
	</div>

	<!-- === NAV: Moving platform === -->
	<nav
		data-platform
		data-move-speed="60"
		data-move-range="300"
		class="absolute top-[750px] left-[700px] w-[200px] h-[40px] bg-purple-900/80 border border-purple-500/40 rounded-lg flex items-center justify-center gap-3 text-purple-300 text-xs font-mono"
	>
		<span>◀</span>
		<span>&lt;nav&gt; moving platform</span>
		<span>▶</span>
	</nav>

	<!-- === CARDS: Solid platforms with content === -->
	<div class="absolute top-[950px] left-[600px]">
		<div data-platform class="w-[280px]">
			<Card.Root class="bg-zinc-900 border-zinc-800">
				<Card.Header>
					<Card.Title class="text-white font-mono text-sm">Card Platform</Card.Title>
					<Card.Description class="text-zinc-500 text-xs">
						Stand on this shadcn Card component
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<p class="text-zinc-400 text-xs">Cards make excellent solid platforms. Their borders define the collision box.</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<div class="absolute top-[900px] left-[920px]">
		<div data-platform class="w-[280px]">
			<Card.Root class="bg-zinc-900 border-zinc-800">
				<Card.Header>
					<Card.Title class="text-white font-mono text-sm">Another Card</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="flex items-center gap-2">
						<Checkbox id="played" />
						<label for="played" class="text-zinc-400 text-xs">I've played Reflow</label>
					</div>
					<div class="flex items-center gap-2 mt-2">
						<Switch />
						<span class="text-zinc-400 text-xs">Enable gravity</span>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<!-- === DETAILS: Collapsible platform === -->
	<details
		data-platform
		open
		class="absolute top-[1100px] left-[200px] w-[350px] bg-zinc-900 border border-cyan-500/30 rounded-lg overflow-hidden"
	>
		<summary class="px-4 py-3 text-cyan-300 text-sm font-mono cursor-pointer hover:bg-zinc-800/50 select-none">
			&lt;details&gt; — Click or press E to toggle
		</summary>
		<div data-platform class="px-4 py-3 border-t border-zinc-800">
			<p class="text-zinc-400 text-xs">This platform collapses when you close the details element! The ground beneath you literally disappears.</p>
			<div class="mt-2">
				<Progress value={65} class="h-2" />
				<span class="text-zinc-500 text-[10px] font-mono mt-1 block">progress: 65%</span>
			</div>
		</div>
	</details>

	<!-- === CODE: Slippery ice platform === -->
	<pre
		data-platform
		class="absolute top-[1200px] left-[650px] w-[500px] bg-zinc-950 border border-cyan-500/20 rounded-lg p-4 text-xs overflow-hidden"
	>
		<code class="text-cyan-300 font-mono"><span class="text-purple-400">const</span> <span class="text-blue-300">caret</span> = <span class="text-amber-300">document</span>.<span class="text-green-300">querySelector</span>(<span class="text-cyan-300">'#player'</span>);
<span class="text-zinc-500">// Warning: &lt;code&gt; elements are slippery!</span>
<span class="text-purple-400">if</span> (caret.<span class="text-green-300">grounded</span>) {'{'} caret.<span class="text-green-300">slide</span>(); {'}'}</code>
	</pre>

	<!-- === BLOCKQUOTE: Wind zone === -->
	<blockquote
		data-platform
		data-wind-dir="right"
		class="absolute top-[1350px] left-[300px] w-[400px] bg-zinc-900/50 border-l-4 border-violet-500 pl-4 py-4 rounded-r-lg"
	>
		<p class="text-violet-300/80 text-sm italic" style="font-family: var(--font-display);">
			"The wind of reflow pushes all elements to the right..."
		</p>
		<span class="text-zinc-500 text-[10px] font-mono block mt-2">— blockquote (wind: →)</span>
		<div class="text-violet-400/30 text-2xl mt-1">→ → → →</div>
	</blockquote>

	<!-- === ACCORDION: Stacked platforms === -->
	<div class="absolute top-[1050px] left-[1300px] w-[350px]">
		<Accordion.Root type="single" class="w-full">
			<Accordion.Item value="item-1">
				<div data-platform>
					<Accordion.Trigger class="text-sm font-mono text-zinc-300">
						Accordion Panel 1
					</Accordion.Trigger>
				</div>
				<Accordion.Content>
					<p class="text-zinc-500 text-xs px-1">Open accordion panels create new platforms below!</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<div data-platform>
					<Accordion.Trigger class="text-sm font-mono text-zinc-300">
						Accordion Panel 2
					</Accordion.Trigger>
				</div>
				<Accordion.Content>
					<p class="text-zinc-500 text-xs px-1">Each panel shifts the world geometry.</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<div data-platform>
					<Accordion.Trigger class="text-sm font-mono text-zinc-300">
						Accordion Panel 3 (secret)
					</Accordion.Trigger>
				</div>
				<Accordion.Content>
					<div class="p-2">
						<CursorPickup mode="underline" />
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>

	<!-- === TABS: Tab bar as platforms === -->
	<div class="absolute top-[800px] left-[1300px] w-[400px]">
		<Tabs.Root value="tab1">
			<div data-platform>
				<Tabs.List class="bg-zinc-900 border border-zinc-800">
					<Tabs.Trigger value="tab1" class="font-mono text-xs">Tab 1</Tabs.Trigger>
					<Tabs.Trigger value="tab2" class="font-mono text-xs">Tab 2</Tabs.Trigger>
					<Tabs.Trigger value="tab3" class="font-mono text-xs">Tab 3</Tabs.Trigger>
				</Tabs.List>
			</div>
			<Tabs.Content value="tab1">
				<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-b-lg mt-0">
					<p class="text-zinc-400 text-xs font-mono">Tab content forms the floor. Switch tabs to change the level layout!</p>
				</div>
			</Tabs.Content>
			<Tabs.Content value="tab2">
				<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-b-lg mt-0">
					<Alert.Root>
						<Alert.Title class="text-sm">Alert Component</Alert.Title>
						<Alert.Description class="text-xs">You found a hidden alert in tab 2!</Alert.Description>
					</Alert.Root>
				</div>
			</Tabs.Content>
			<Tabs.Content value="tab3">
				<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-b-lg mt-0">
					<CursorPickup mode="block" />
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>

	<!-- === PORTAL LINKS: Navigate to other rooms === -->
	<div class="absolute top-[1500px] left-[100px] flex gap-8">
		<a
			href="/rooms/forms"
			data-platform
			class="block w-[220px] p-5 bg-gradient-to-br from-cyan-950 to-zinc-900 border border-cyan-500/40 rounded-xl text-center hover:border-cyan-400 transition-colors group"
		>
			<div class="text-cyan-400 text-2xl mb-2">📝</div>
			<div class="text-cyan-300 font-mono text-sm group-hover:text-white transition-colors">&lt;a href="/forms"&gt;</div>
			<div class="text-zinc-500 text-xs mt-1">Form World</div>
		</a>

		<a
			href="/rooms/components"
			data-platform
			class="block w-[220px] p-5 bg-gradient-to-br from-violet-950 to-zinc-900 border border-violet-500/40 rounded-xl text-center hover:border-violet-400 transition-colors group"
		>
			<div class="text-violet-400 text-2xl mb-2">🧩</div>
			<div class="text-violet-300 font-mono text-sm group-hover:text-white transition-colors">&lt;a href="/components"&gt;</div>
			<div class="text-zinc-500 text-xs mt-1">Component Library</div>
		</a>

		<a
			href="/rooms/dialog-boss"
			data-platform
			class="block w-[220px] p-5 bg-gradient-to-br from-rose-950 to-zinc-900 border border-rose-500/40 rounded-xl text-center hover:border-rose-400 transition-colors group"
		>
			<div class="text-rose-400 text-2xl mb-2">👾</div>
			<div class="text-rose-300 font-mono text-sm group-hover:text-white transition-colors">&lt;a href="/boss"&gt;</div>
			<div class="text-zinc-500 text-xs mt-1">Dialog Boss Room</div>
		</a>
	</div>

	<!-- === TABLE: Grid puzzle area === -->
	<table
		data-platform
		class="absolute top-[1350px] left-[800px] w-[500px] bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden text-xs font-mono"
	>
		<thead>
			<tr class="bg-zinc-800">
				<th class="px-3 py-2 text-left text-zinc-400">Element</th>
				<th class="px-3 py-2 text-left text-zinc-400">Behavior</th>
				<th class="px-3 py-2 text-left text-zinc-400">Status</th>
			</tr>
		</thead>
		<tbody>
			<tr class="border-t border-zinc-800" data-platform>
				<td class="px-3 py-2 text-amber-400">&lt;button&gt;</td>
				<td class="px-3 py-2 text-green-400">bouncy</td>
				<td class="px-3 py-2"><Badge variant="default">active</Badge></td>
			</tr>
			<tr class="border-t border-zinc-800" data-platform>
				<td class="px-3 py-2 text-amber-400">&lt;aside&gt;</td>
				<td class="px-3 py-2 text-violet-400">wall-jump</td>
				<td class="px-3 py-2"><Badge variant="secondary">solid</Badge></td>
			</tr>
			<tr class="border-t border-zinc-800" data-platform>
				<td class="px-3 py-2 text-amber-400">&lt;footer&gt;</td>
				<td class="px-3 py-2 text-rose-400">death</td>
				<td class="px-3 py-2"><Badge variant="destructive">danger</Badge></td>
			</tr>
		</tbody>
	</table>

	<!-- === DIALOG: Boss encounter preview === -->
	<div class="absolute top-[1100px] left-[750px]">
		<Dialog.Root bind:open={dialogOpen}>
			<Dialog.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						data-platform
						class="px-6 py-3 bg-rose-900/50 border border-rose-500/40 rounded-lg text-rose-300 font-mono text-sm hover:bg-rose-900 transition-colors"
					>
						⚠ Open &lt;dialog&gt; (trap!)
					</button>
				{/snippet}
			</Dialog.Trigger>
			<Dialog.Content class="bg-zinc-900 border-rose-500/50">
				<Dialog.Header>
					<Dialog.Title class="text-rose-400 font-mono">Dialog Trap!</Dialog.Title>
					<Dialog.Description class="text-zinc-400 text-sm">
						In the boss room, &lt;dialog&gt; elements trap you inside until you defeat the modal.
						This is just a preview — the real fight is in /rooms/dialog-boss.
					</Dialog.Description>
				</Dialog.Header>
				<div class="flex justify-end gap-2 mt-4">
					<Button variant="outline" onclick={() => dialogOpen = false}>Escape (ESC)</Button>
					<Button variant="destructive" onclick={() => dialogOpen = false}>Close Dialog</Button>
				</div>
			</Dialog.Content>
		</Dialog.Root>
	</div>

	<!-- === SKELETON: Loading platforms === -->
	<div class="absolute top-[1700px] left-[400px] flex flex-col gap-3">
		<div data-platform><Skeleton class="h-[40px] w-[300px] bg-zinc-800" /></div>
		<div data-platform><Skeleton class="h-[40px] w-[240px] bg-zinc-800" /></div>
		<div data-platform><Skeleton class="h-[40px] w-[350px] bg-zinc-800" /></div>
	</div>

	<!-- === TOOLTIP: Floating info === -->
	<div class="absolute top-[600px] left-[1400px]">
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<div data-platform class="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-400 text-xs font-mono">
						Hover for tooltip ↑
					</div>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p class="text-xs">Tooltips could be floating platforms too!</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</div>

	<!-- === SLIDER === -->
	<div class="absolute top-[1600px] left-[800px] w-[300px]">
		<div data-platform class="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
			<span class="text-zinc-400 text-xs font-mono block mb-2">Slider (adjusts... something)</span>
			<Slider value={[50]} max={100} step={1} class="w-full" />
		</div>
	</div>

	<!-- === INPUT: Typewriter platform === -->
	<div class="absolute top-[1600px] left-[1200px] w-[300px]">
		<div data-platform data-behavior="typewriter" class="p-4 bg-zinc-900 border border-cyan-500/20 rounded-lg">
			<span class="text-zinc-400 text-xs font-mono block mb-2">&lt;input&gt; — type to extend</span>
			<Input placeholder="type here..." class="bg-zinc-950 border-zinc-700 text-sm font-mono" />
		</div>
	</div>

	<!-- === TOGGLE GROUP === -->
	<div class="absolute top-[700px] left-[1600px]">
		<div data-platform class="p-3 bg-zinc-900 border border-zinc-800 rounded-lg flex flex-col gap-2">
			<span class="text-zinc-500 text-[10px] font-mono">Toggle</span>
			<div class="flex gap-2">
				<Toggle class="text-xs font-mono">Bold</Toggle>
				<Toggle class="text-xs font-mono">Italic</Toggle>
				<Toggle class="text-xs font-mono">Code</Toggle>
			</div>
		</div>
	</div>

	<!-- === DROPDOWN MENU === -->
	<div class="absolute top-[500px] left-[1600px]">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						data-platform
						class="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 text-xs font-mono hover:bg-zinc-700 transition-colors"
					>
						Dropdown Menu ▾
					</button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="bg-zinc-900 border-zinc-700">
				<DropdownMenu.Item class="text-xs font-mono">Option A</DropdownMenu.Item>
				<DropdownMenu.Item class="text-xs font-mono">Option B</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<DropdownMenu.Item class="text-xs font-mono text-rose-400">Delete World</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>

	<!-- === SELECT: Elevator === -->
	<div class="absolute top-[1400px] left-[1500px]">
		<select
			data-platform
			data-behavior="elevator"
			class="w-[200px] h-[40px] bg-zinc-800 border border-purple-500/40 rounded-lg text-purple-300 text-xs font-mono px-3 appearance-none cursor-pointer"
		>
			<option>Floor 1</option>
			<option>Floor 2</option>
			<option>Floor 3</option>
			<option>Basement</option>
		</select>
	</div>

	<!-- === TEXTAREA === -->
	<div class="absolute top-[1800px] left-[100px]">
		<div data-platform data-behavior="typewriter" class="w-[400px] p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
			<span class="text-zinc-400 text-xs font-mono block mb-2">&lt;textarea&gt; — write your story</span>
			<Textarea
				placeholder="Once upon a reflow..."
				class="bg-zinc-950 border-zinc-700 text-sm font-mono min-h-[80px]"
			/>
		</div>
	</div>

	<!-- === SEPARATOR: Thin platforms === -->
	<div data-platform class="absolute top-[1750px] left-[600px] w-[600px]">
		<Separator class="bg-zinc-700" />
	</div>

	<!-- === POPOVER: Floating platform === -->
	<div class="absolute top-[500px] left-[1900px]">
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						data-platform
						data-behavior="floating"
						class="px-4 py-2 bg-zinc-800/50 border border-dashed border-zinc-600 rounded-lg text-zinc-400 text-xs font-mono"
					>
						[popover] — floating ☁
					</button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Content class="bg-zinc-900 border-zinc-700">
				<p class="text-xs text-zinc-400 font-mono">Popovers phase in and out. Time your jumps!</p>
			</Popover.Content>
		</Popover.Root>
	</div>

	<!-- === CURSOR PICKUPS === -->
	<div class="absolute top-[440px] left-[1020px]">
		<CursorPickup mode="outline" />
	</div>

	<!-- === SCATTERED PLATFORMS === -->
	<div
		data-platform
		class="absolute top-[550px] left-[1200px] w-[150px] h-[8px] bg-zinc-600 rounded-full"
	></div>
	<div
		data-platform
		class="absolute top-[450px] left-[1350px] w-[120px] h-[8px] bg-zinc-600 rounded-full"
	></div>
	<div
		data-platform
		class="absolute top-[350px] left-[1500px] w-[180px] h-[8px] bg-zinc-600 rounded-full"
	></div>
	<div
		data-platform
		class="absolute top-[300px] left-[1750px] w-[150px] h-[8px] bg-zinc-600 rounded-full"
	></div>
	<div
		data-platform
		class="absolute top-[400px] left-[2000px] w-[200px] h-[8px] bg-zinc-600 rounded-full"
	></div>

	<!-- === Long ground platform === -->
	<section
		data-platform
		class="absolute top-[2000px] left-[0px] w-[4000px] h-[20px] bg-zinc-800 border-t-2 border-zinc-700"
	></section>

	<!-- === FOOTER: Death zone === -->
	<footer
		data-platform
		class="absolute top-[2800px] left-[0px] w-[4000px] h-[200px] bg-gradient-to-b from-rose-950/50 to-rose-950 border-t-2 border-rose-500/30 flex items-start justify-center pt-6"
	>
		<div class="text-center">
			<span class="text-rose-400 font-mono text-sm">⚠ &lt;footer&gt; — DEATH ZONE</span>
			<p class="text-rose-300/50 text-xs mt-1">Don't fall here. Respawn at last checkpoint.</p>
		</div>
	</footer>
</GameWorld>
