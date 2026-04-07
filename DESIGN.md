# Reflow — Design Document

## Core Concept

A platformer where the webpage IS the level. You are **Caret**, a sentient text cursor navigating through the DOM. Every HTML element has physics behavior that maps to its real semantic purpose. The game teaches web development and accessibility concepts through play.

---

## Narrative Arc — The Time Rift

### The Hook

The game opens on a **stunning modern homepage**. WebGL shaders shimmer. CSS perspective creates depth. Glassmorphism panels float in 3D space. shadcn components are everywhere, polished and responsive. Particles dance. The web is beautiful.

Caret lives here. This is home.

You explore freely — platforming across this gorgeous modern site, learning the controls on familiar terrain. Everything is lush, responsive, alive. But tucked in a corner of the page, behind some `<details>` elements, there's something strange: a glitching element. It flickers between eras — serif fonts bleed through, table borders flash, Comic Sans leaks in. An ancient `<marquee>` scrolls text nobody can read.

It's *enticing*. Clearly wrong, clearly beckoning.

When Caret approaches it, the element cracks open. A vortex of `view-source:` text spirals inward. The shaders corrupt — chromatic aberration spikes, the WebGL context tears, the CSS cascade collapses layer by layer. The modern page literally de-renders: custom properties revert to defaults, Grid falls back to floats, floats fall back to block, and block falls back to...

Nothing. A blank white page. Times New Roman. A single blinking cursor.

**You've been pulled back to 1991.**

### The Journey Forward

Each era is a world. At the end of each world, a **Boss** guards the web feature that defines the next era. The boss is holding that capability *hostage* — the web literally cannot advance until you free it. Defeating the boss "unlocks" the feature for the web timeline, and the transition to the next era plays out as a dramatic **reflow**: the entire level reorganizes, elements gain new properties, the rendering engine upgrades.

You experience the invention of every web feature by being the one who rescues it.

### The Return

When you finally make it back to the modern era, the homepage is rebuilt — but now you *understand* every layer. You can see the `<nav>` as navigation, the `<aside>` as complementary, the `<dialog>` as a focus trap. You see the accessibility tree alongside the DOM. The inspector panel shows things it didn't before. The page is the same, but you are different.

Credits play as a beautifully typeset semantic HTML document. Every tag used correctly.

---

## The Eras

### Era 1: The Document (1991–1996)

**You arrive here.** A blank white page. The humblest of beginnings.

**Aesthetic:** Tim Berners-Lee's first page. Times New Roman, blue underlined links, gray `bgcolor`, no CSS — just raw HTML attributes. `<hr>` rules everywhere. `<marquee>` and `<blink>` tags. Counters that say "You are visitor #00382". Under construction GIFs.

**Level design:**
- Purely structural — `<h1>` through `<h6>` form a descending staircase of headings
- `<hr>` elements are platforms (horizontal rules = horizontal platforms)
- `<table>` is used for LAYOUT (the original sin) — grid-based puzzle rooms where cells shift
- `<frame>` splits the viewport into independent scrolling zones you must navigate between
- `<marquee>` text scrolls across as a moving obstacle/platform
- `<blink>` elements phase in and out (only solid half the time)
- All text is selectable — Caret can "select" text to create temporary blue highlight platforms
- No rounded corners. Everything is rectangular. Sharp. Brutal.

**Hostage feature:** `<style>` — CSS itself. The ability to separate presentation from structure.

**Teaching:** Document structure, semantic meaning before CSS existed, why tables-for-layout was necessary but problematic.

**Rendering:** Pure DOM. No effects. No transitions. No transforms. The austerity IS the aesthetic.

#### Boss: `<font>` — The Inline Styler

A massive `<font>` tag that controls all presentation directly in the HTML. It changes `color`, `size`, and `face` attributes on everything around it, warping platforms mid-play. Its attack pattern is rewriting the markup — turning your `<h1>` platforms into tiny `<font size="1">` slivers, making everything `color="white"` on a white background so platforms become invisible.

**How you beat it:** You discover a `<style>` element trapped inside the boss. Free it by navigating through the boss's chaotic markup to reach the caged stylesheet. Once freed, the `<style>` tag activates — overriding every inline style the boss applies. The boss thrashes, applies `!important` inline attributes, but you apply `!important` back from the stylesheet. Specificity war. The cascade wins. `<font>` is deprecated.

**Victory reflow:** The page transforms. Color, spacing, typography — all emerge from nothing. The first stylesheet loads. The world goes from gray brutalism to... still simple, but *intentional*.

---

### Era 2: The Geocities Age (1996–2001)

**Aesthetic:** Tiled backgrounds, sparkle GIFs, neon text on dark backgrounds, visitor counters, guestbooks, web rings, `<center>` tags, Comic Sans, cursor trails, MIDI autoplay. Beautiful chaos.

**Level design:**
- Tiled background patterns create visual noise you must parse to find platforms
- Animated GIF characters as NPCs (dancing baby, construction worker, spinning skull)
- `<center>` tags literally pull everything to the center — a gravity well mechanic
- `<font color>` changes the rules — red text zones are danger, green are safe
- Web ring links at the bottom form a circular series of connected levels
- Guestbook entries from "other players" (procedural NPC messages)
- Cursor trail follows Caret with sparkles (first particle effect upgrade!)
- `<embed>` elements play sounds when you touch them
- iframes are portals to other mini-levels running inside the current one

**Hostage feature:** Semantic structure. The concept that markup has *meaning*, not just appearance.

**Teaching:** The wild west of early web — no standards, presentation in HTML, accessibility nightmare. Shows WHY we needed separation of concerns.

**Rendering:** CSS animations, first use of `mix-blend-mode`, animated backgrounds. Still no canvas.

#### Boss: `<center><font><blink>` — The Presentation Hydra

Three deprecated tags fused into one entity. `<center>` pulls you toward the middle of the arena. `<font>` constantly reskins the environment. `<blink>` makes the boss intermittently intangible. Cut one head and the others compensate — blink faster, pull harder, resize more aggressively.

**How you beat it:** You can't fight presentation with presentation. You find `<em>`, `<strong>`, and `<abbr>` — the first semantic tags — hidden in the level's guestbook entries. Each one you collect teaches the game that meaning matters more than appearance. Equipping all three lets you hit the Hydra in a way it can't restyle away from. The tags have *meaning*. They persist regardless of presentation.

**Victory reflow:** Separation of concerns is born. HTML for structure, CSS for presentation. The gaudy page reorganizes into something that actually makes sense, even if it's still ugly.

---

### Era 3: The CSS Zen Garden (2001–2006)

**Aesthetic:** The revelation that CSS can transform the same HTML into completely different designs. Clean layouts, actual typography, floats everywhere (and their problems), the IE6 box model bug.

**Level design:**
- Same underlying HTML structure as Era 1 — but NOW it has CSS. The level physically transforms in a dramatic "reflow" animation
- `float` elements drift left or right and stack awkwardly (clearfix as a mechanic!)
- The IE box model bug: some platforms are a different size than they appear (teaching `box-sizing`)
- `z-index` stacking creates layered platforming — foreground and background planes
- `overflow: hidden` clips platforms — you can only see part of what's there
- `position: absolute` elements break out of flow (floating obstacles not anchored to anything)
- Caret learns CSS selectors as abilities — `.class` targeting, `#id` precision, `*` wildcard

**Hostage feature:** Dynamic interactivity. The ability for the page to respond to user actions beyond clicking links.

**Teaching:** Separation of concerns, the cascade, specificity, the box model, float-based layout struggles.

**Rendering:** CSS transforms begin (2D only). Subtle drop shadows. First gradients.

#### Boss: IE6 — The Incompatible

A browser entity that renders everything *almost* right but not quite. Platforms are 20px off where they look. The box model is wrong. `z-index` doesn't work in certain stacking contexts. PNG transparency is broken (alpha channels render with gray backgrounds). CSS that should work just... doesn't.

IE6 doesn't attack directly. It *distorts reality*. The level is a gauntlet of rendering bugs that you must navigate. The boss fight is a puzzle: find the correct combination of CSS hacks (`* html`, `_property`, conditional comments) to normalize the rendering and force IE6 into compliance.

**How you beat it:** You collect vendor-specific hacks and standards-mode triggers scattered through the level. Each one fixes one aspect of IE6's broken rendering. Collect enough and the rendering normalizes — you can see the level as it was designed. The final hack triggers standards mode, and IE6 shatters into a `<!--[if IE 6]>` conditional comment and fades away.

**Victory reflow:** JavaScript arrives. `onclick` handlers appear on elements. The web wakes up.

---

### Era 4: The jQuery Era (2006–2012)

**Aesthetic:** Rounded corners (finally!), glossy buttons, drop shadows, skeuomorphism. Web 2.0 badges, reflections, gradients on everything. The "Aqua" influence.

**Level design:**
- `$(document).ready()` — level loads with a dramatic jQuery animation sequence
- `.slideDown()` / `.slideUp()` platforms that animate in/out
- `.fadeIn()` / `.fadeOut()` — elements with opacity transitions
- `.animate()` creates smoothly moving platforms (contrast with Era 1's jerky `<marquee>`)
- AJAX zones — parts of the level load dynamically as you approach (teaching async content)
- `.draggable()` — some elements can be repositioned (Pointer cursor mode unlocks here!)
- `.sortable()` — reorder platforms by dragging
- Modal dialogs (pre-`<dialog>`) using overlay divs — jankier version of the boss fight
- `.accordion()` / `.tabs()` — jQuery UI widgets as level mechanics

**Hostage feature:** Native semantics for interactive patterns. The idea that the browser should handle common UI patterns (disclosure, dialogs, validation) without JavaScript.

**Teaching:** JavaScript's role, DOM manipulation, progressive enhancement, the plugin ecosystem, why native elements matter more than JS widgets.

**Rendering:** CSS3 transitions, `border-radius`, `box-shadow`, `linear-gradient`. First canvas-based particle effects.

#### Boss: `$.fn.modal()` — The Plugin Monolith

A jQuery plugin that has grown sentient and massive. It wraps everything in nested `<div>`s. It adds event handlers to everything. It `!important`s every style. It inserts `<script>` tags that load more plugins that load more plugins. The DOM is drowning in jQuery spaghetti.

The boss fight arena is a modal-within-a-modal-within-a-modal. Each layer has its own z-index war, its own backdrop, its own close button that doesn't work because event propagation is broken. `stopPropagation()` and `preventDefault()` are literal walls you must navigate.

**How you beat it:** You find the `<dialog>` element — the native solution. It's small, simple, and trapped beneath dozens of `<div class="modal-wrapper modal-backdrop modal-container">` layers. Reaching it and activating it with `.showModal()` replaces the entire jQuery modal stack with a single native element. The boss collapses under its own weight as its `<div>` nesting becomes unnecessary.

**Victory reflow:** Native HTML elements gain interactive powers. `<details>`, `<dialog>`, `<input type="date">`, `<progress>`, `<meter>` all appear for the first time. The page becomes leaner.

---

### Era 5: The Responsive Revolution (2012–2015)

**Aesthetic:** Bootstrap. Flat design. Mobile-first. Grid systems. The hamburger menu. "Clean" becomes the dominant word. Helvetica Neue everywhere.

**Level design:**
- **The viewport changes size mid-level.** Platforms reflow to different breakpoints as you play
- 12-column grid system — platforms snap to grid columns
- `@media` queries trigger level layout changes at specific scroll/progress points
- Hamburger menu is a collapsible world — open it to reveal hidden areas
- Bootstrap components: jumbotrons as platforms, panels as rooms, wells as pits
- `col-md-6` elements that are side-by-side on desktop become stacked on mobile (mid-level!)
- Flexbox arrives — platforms that stretch and align dynamically
- `rem` vs `px` — some platforms scale with zoom, others don't (teaching relative units)
- Touch events — swipe mechanics introduced alongside keyboard

**Hostage feature:** Accessibility as a first-class concern. ARIA, screen reader support, keyboard navigation, focus management.

**Teaching:** Responsive design, mobile-first thinking, CSS grid systems, relative units, viewport meta tag.

**Rendering:** CSS animations more complex. First use of `will-change` and hardware acceleration. Parallax scrolling backgrounds.

#### Boss: `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">` — The Breakpoint Hydra

A Bootstrap grid element that refuses to settle. It constantly reflows, changing size at every breakpoint. The arena itself is unstable — the viewport width oscillates, triggering media queries that rearrange all platforms. The boss IS the layout instability.

It attacks by triggering breakpoint changes at the worst moments — mid-jump, the platform you're landing on becomes `col-sm-12` and drops below you. Three-column layouts become one-column stacks. Gutters appear and disappear.

**How you beat it:** You discover the `<meta name="viewport">` tag and ARIA landmarks. The viewport tag stabilizes the reflow (stops the oscillation), and the landmarks create a persistent navigation structure that survives breakpoint changes. With stable landmarks, you can navigate the shifting layout because you always know where `<nav>`, `<main>`, and `<aside>` are — even when everything else moves. The boss calms into a stable, responsive layout.

**Victory reflow:** The accessibility tree becomes visible for the first time — a ghost layer showing how screen readers parse the page. ARIA roles, states, and properties appear on elements. Skip navigation links materialize. Focus outlines glow.

---

### Era 6: The Component Era (2015–2019)

**Aesthetic:** Material Design. Card-based layouts. FABs. Ripple effects. Design systems. Component libraries. Shadow DOM. CSS custom properties.

**Level design:**
- Material ripple effect on every interactive element (satisfying bounces)
- Elevation/shadow system creates a literal z-axis — platforms at different "elevations"
- FAB (floating action button) as a jump pad that follows you
- Snackbar/toast notifications as temporary floating platforms
- Component composition — combine base components to create new platform types
- CSS Grid (finally!) — 2D grid layouts, `grid-area` puzzles where you reassign areas
- Custom properties (CSS variables) — a "theme" power-up that changes all colors at once
- Shadow DOM boundaries — areas where outside styles don't penetrate (isolated zones)
- Web Components as self-contained mini-levels
- Service Worker — an "offline mode" where the level works from cache (stripped down)

**Hostage feature:** The modern layout engine. CSS Grid, subgrid, and the death of float hacks.

**Teaching:** Component architecture, design tokens, CSS custom properties, Grid layout, Shadow DOM encapsulation.

**Rendering:** WebGL introduced for background effects. Shader-based ripples. Canvas-based particle systems become standard. First post-processing (bloom on interactive elements).

#### Boss: `node_modules/` — The Dependency Black Hole

A sentient `node_modules` folder that grows endlessly. It installs dependencies that install dependencies. Each package adds weight — the level gets heavier, platforms sink, frame rate drops, the rendering engine struggles. Left-pad disappears and platforms collapse. A supply chain attack injects malicious code that creates phantom platforms (look solid, aren't).

The arena is a package.json that keeps adding `dependencies`. The boss attacks by `npm install`-ing progressively heavier packages, each one degrading performance and adding visual noise (unnecessary wrapper `<div>`s, competing CSS resets, duplicate polyfills).

**How you beat it:** You find native platform APIs (`<dialog>`, CSS Grid, Web Animations API, Custom Elements) hidden in the bloated node_modules. Each native feature you extract replaces hundreds of kilobytes of dependencies. The bundle shrinks. The frame rate recovers. Performance is the final attack: when the bundle is small enough, the level runs at full speed, and you can outrun the black hole. Tree-shaking activates and dead code evaporates.

**Victory reflow:** Grid layout snaps into place. The level reorganizes from floats to a true 2D grid. `fr` units distribute space. `grid-area` labels appear on platforms. The layout is finally sane.

---

### Era 7: The Tailwind Age (2019–2024)

**Aesthetic:** Utility-first. shadcn. Vercel aesthetic. Dark mode. Geist font. Subtle borders. Muted colors with neon accents. The current prototype era.

**Level design:**
- All shadcn-svelte components as level furniture
- Tailwind classes visible on elements as tiny labels (teaching utility-first)
- Dark mode toggle changes the entire level (light/dark variants with different physics)
- `cn()` utility — merging class abilities (combine cursor modes temporarily)
- Server components — some elements render on the "server" (exist before the level loads, can't be moved)
- Streaming SSR — parts of the level progressively hydrate as you approach
- View transitions — room changes use the View Transition API for smooth morphing
- The aesthetic is polished, refined, the platforming is tight

**Hostage feature:** Container queries, cascade layers, and native scope — the final CSS primitives that free components from global dependencies.

**Teaching:** Utility-first CSS, design systems, modern component patterns, dark mode, SSR concepts.

**Rendering:** Full WebGL integration. Custom shaders for element highlights, camera effects (depth of field when paused, chromatic aberration on damage). Smooth 120fps physics.

#### Boss: `className={cn("absolute inset-0 flex items-center justify-center rounded-xl border bg-gradient-to-br ...", isActive && "opacity-100", isHovered && "scale-105")}` — The Utility Sprawl

A component whose className prop has grown so long it has become sentient. It is a string hundreds of characters long, a snake of utility classes that wraps around the arena. Each segment of the class string is a platform that can shift when the state changes. `isActive && "..."` conditions trigger and un-trigger, causing platforms to appear and vanish.

The boss attacks by adding conditional classes faster than you can keep up — `hover:`, `focus:`, `group-hover:`, `peer-checked:`, `data-[state=open]:`, `aria-[expanded=true]:` — each variant modifier creates a new state fork, splitting the arena into parallel versions of itself.

**How you beat it:** You collect the new CSS primitives: `@container`, `@layer`, `@scope`. Container queries let elements react to their own context instead of global state — stabilizing the variant chaos. Cascade layers impose order on the specificity war. Scope boundaries prevent styles from leaking. The utility string shortens as native CSS absorbs what previously required class composition. The boss shrinks to a reasonable size.

**Victory reflow:** CSS becomes fully self-sufficient. The remaining JavaScript-for-styling evaporates. Container queries resize elements based on their own containers. Cascade layers bring peace to specificity.

---

### Era 8: The Spatial Web (2024–????)

**Aesthetic:** 3D transforms. Scroll-driven animations. Container queries. The web breaks free of flat rectangles. Glassmorphism. Frosted glass. Depth.

**Level design:**
- **The game becomes 2.5D.** CSS `perspective` and `transform-3d` create depth
- Container queries — elements change behavior based on their OWN size, not the viewport
- Scroll-driven animations — the level animates based on your horizontal position
- `@layer` cascade layers — platforms exist in different cascade layers that can override each other
- Subgrid — nested grid alignment creates precise architectural structures
- `:has()` selector — elements react to what's INSIDE them (if a child element is active, parent changes)
- `@scope` — scoped styling creates zones where different rules apply
- `anchor()` positioning — elements tether to other elements dynamically
- View Transition API — every room change is a cinematic morph
- Popover API — native popovers as floating platforms

**Hostage feature:** The final feature isn't a CSS property. It's *understanding*. The boss guards view-source itself — the ability to see how everything is built.

**Teaching:** Modern CSS features, container queries, cascade layers, scope, the shift from JS solutions to CSS-native.

**Rendering:** Full 3D WebGL scenes blended with DOM. Fragment shaders for backgrounds. Compute shaders for particle physics. Screen-space reflections on glossy elements. The web can do ANYTHING now.

#### Boss: The Obfuscator — `<div class="css-1a2b3c"><div class="css-4d5e6f"><div class="css-7g8h9i">`

The modern web's dark mirror. A CSS-in-JS runtime that has hashed every class name into meaninglessness. Every element is a `<div>`. No semantic tags. No landmarks. No accessible names. The source is unreadable. DevTools shows nothing useful. The page *looks* perfect but is architecturally hollow.

The boss renders a beautiful, modern, polished interface — but it's built entirely from `<div>` and `<span>` with generated class names. Nothing has meaning. Screen readers experience it as a wall of undifferentiated text. Keyboard users can't navigate. The a11y tree is empty.

It attacks by being so visually polished that the problems are invisible. It spawns `<div>` elements that LOOK like buttons but aren't focusable. Links that look like links but are `<span onclick>`. Forms without labels. Images without alt text. The attacks are invisible — you just... can't interact with things properly. Buttons don't bounce. Links don't portal. Asides don't wall-jump. Everything is a plain `<div>`. Everything is `solid`.

**How you beat it:** You've learned every semantic element through 7 eras. You know what `<nav>` means, what `<aside>` provides, why `<button>` matters. The fight is a replacement puzzle: find the `<div>` imposters and apply the correct semantic tag. Each replacement restores that element's game behavior. `<div role="button">` becomes `<button>` and starts bouncing. `<div class="sidebar">` becomes `<aside>` and becomes wall-jumpable. The accessibility tree populates. The page gains meaning.

The final blow: wrapping the content in `<main>` and giving the page a proper `<h1>`. The Obfuscator shatters because meaningful markup cannot be obfuscated — semantics transcend class names.

**Victory reflow:** `view-source:` is restored. The raw HTML is clean, semantic, readable. The page is both beautiful AND meaningful. The transition to Era 9 is the source itself becoming visible.

---

### Era 9: The Source (Endgame)

**Aesthetic:** You've gone through all of web history. Now you see the raw source. The level is `view-source:`. Green text on black. The Matrix, but it's HTML.

**Level design:**
- The level IS the source code of the previous levels
- Platform on `<` and `>` characters
- Navigate through nested indentation as a vertical platforming challenge
- Find and fix bugs in the source to change the compiled level
- "Inspect Element" — Caret gains the power to edit any element's properties
- The final boss is a malformed document — unclosed tags, missing doctypes, inline styles everywhere
- Fixing the document to be valid, semantic, accessible HTML defeats the boss
- The "final form" of Caret: it becomes the browser itself

**Teaching:** View source, the relationship between source and render, validation, the importance of clean markup.

**Rendering:** Terminal-style rendering with WebGL. CRT shader effect. Scanlines. Glow. Then, as you fix the document, it progressively renders into a beautiful modern page — the final catharsis.

#### Final Boss: `<!DOCTYPE html>` — The Malformed Document

The document itself. Unclosed tags everywhere. Missing doctype. Inline styles. Deprecated attributes. `<table>` used for layout. No alt text. No lang attribute. No viewport meta. Every mistake from every era, all at once.

This isn't a combat boss — it's a **repair puzzle**. The source code is the level, and you fix it by platforming through the markup and correcting errors. Each fix heals a part of the rendered page, which gradually materializes as a split-screen alongside the source.

- Close unclosed tags → platforms stop flickering
- Add `<!DOCTYPE html>` → standards mode activates, layout normalizes
- Add `<html lang="en">` → text becomes readable
- Add `<meta charset="utf-8">` → special characters render correctly
- Replace `<table>` layout with `<main>`, `<nav>`, `<aside>` → semantic structure emerges
- Add `alt` attributes → images appear (they were invisible without descriptions)
- Add `<label>` to inputs → form elements become interactive
- Add skip navigation → a secret shortcut appears

When the document validates (0 errors, 0 warnings), the source code and the rendered page merge. Caret stands on the finished homepage — the same one from the beginning, but now you can see every layer, every decision, every semantic choice that makes it work.

**Victory:** The game's homepage reloads. You're back where you started. But now the DOM Inspector shows everything. The accessibility tree is visible. Every `<tag>` label is meaningful. You understand what you're standing on.

---

## Cursor/Caret Duality System

Two fundamental modes that create puzzle tension:

### Caret Mode (Text Cursor)
- Platforming, jumping, wall-jumping
- Can interact with semantic elements (press buttons, navigate links, toggle details)
- Subject to gravity and physics
- Cannot modify DOM layout

### Pointer Mode (Mouse Cursor)
- Free movement (no gravity — the cursor floats)
- Can drag elements to reposition them
- Can resize elements by dragging edges
- Can select and rearrange — full DOM manipulation
- CANNOT interact with goals, checkpoints, or portals
- CANNOT collect items
- Exists on a different "plane"

**Unlock timing:** Pointer mode unlocks in Era 4 (the jQuery era) when `.draggable()` is freed. Before that, you're pure Caret.

**Puzzle design:** Levels require switching between modes at specific stations. Reshape the level as Pointer, then traverse it as Caret. Some levels lock you into one mode. Boss fights might switch between both rapidly.

**Advanced:** In later eras, Pointer gains more abilities (right-click context menu, drag-select multiple elements, copy-paste elements). Caret gains text abilities (type to create elements, delete to remove characters from content).

---

## Semantic Mechanics — Teaching Through Play

The core educational insight: every game mechanic maps to a REAL HTML concept.

### Why Each Element Behaves The Way It Does

| Element | Mechanic | HTML Reality | A11y Connection |
|---------|----------|-------------|-----------------|
| `<nav>` | Moving platform | Navigation moves you between places | `role="navigation"` — screen readers can jump to it |
| `<aside>` | Wall-jump | Complementary content, on the side | `role="complementary"` — related but not primary |
| `<button>` | Bouncy/trigger | Triggers actions when activated | Keyboard-focusable, announced to screen readers |
| `<a>` | Portal | Hyperlink to another page | `role="link"` — screen readers announce destination |
| `<dialog>` | Focus trap / boss | Modal traps focus inside | `role="dialog"` — focus management is critical |
| `<details>` | Collapsible | Native disclosure widget | No JS needed, works with keyboard |
| `<footer>` | Death zone | Bottom of the page structure | `role="contentinfo"` — meta information |
| `<header>` | Ceiling | Top of the page structure | `role="banner"` — introductory content |
| `<mark>` | Checkpoint | Highlighted for relevance | Screen readers may announce highlight |
| `<code>` | Slippery (ice) | Precise, unforgiving syntax | Announced as code formatting |
| `<blockquote>` | Wind | Someone else's words pushing through | Should have `cite` attribute |
| `<form>` | Submit gate | Gates content behind submission | `role="form"` — screen readers announce form region |
| `<input>` | Type to extend | Interactive data entry | Needs `<label>`, right `type` for mobile keyboards |
| `<select>` | Elevator | Choose between options | `role="listbox"` — keyboard navigable |
| `<progress>` | Growing platform | Shows completion state | Self-announcing to screen readers |
| `<table>` | Grid puzzle | Tabular data, rows × columns | Needs `<caption>`, `<th scope>` |
| `<main>` | Solid ground | The primary content | `role="main"` — skip nav target |
| `<section>` | Large platform | Standalone section | `role="region"` when labeled |

### Meta-Mechanics (learned through progression)

- **The Cascade:** In Era 3+, learn that styles override each other. Higher specificity = stronger platforms.
- **Accessibility Tree:** A parallel "ghost" version of the level that screen reader users navigate. Unlocked in Era 5, it reveals secret paths.
- **Semantic vs Presentational:** `<div>` platforms are generic and boring. `<section>` platforms have super powers WHEN you give them an accessible name.
- **Progressive Enhancement:** Levels work without JS (basic platforming), but JS adds interactive elements. The base experience must be completable.

---

## Boss Design Philosophy

Every boss is a **real web anti-pattern** personified. Beating them doesn't just advance the game — it teaches why the web evolved past that pattern.

| Era | Boss | Anti-Pattern | Freed Feature |
|-----|------|-------------|---------------|
| 1 | `<font>` | Inline presentation in markup | CSS (`<style>`) |
| 2 | Presentation Hydra | `<center><font><blink>` | Semantic structure |
| 3 | IE6 | Browser incompatibility | JavaScript interactivity |
| 4 | `$.fn.modal()` | Plugin-everything culture | Native HTML elements (`<dialog>`, `<details>`) |
| 5 | Bootstrap Grid Hydra | Breakpoint chaos | Accessibility (ARIA, landmarks, focus) |
| 6 | `node_modules/` | Dependency bloat | CSS Grid / native layout |
| 7 | Utility Sprawl | Class name explosion | Container queries, cascade layers, scope |
| 8 | The Obfuscator | Div soup, semantic emptiness | View source / understanding |
| 9 | Malformed Document | Every anti-pattern at once | The web itself |

The pattern: each boss represents the dominant *mistake* of its era, and the freed feature is what the web community invented to solve it. The player literally enacts web history's course corrections.

---

## Rendering Progression

The technical rendering evolves with the eras, mirroring real hardware/browser capability progression:

### Phase 1: Pure DOM (Eras 1–3)
- All rendering via CSS transforms, transitions, animations
- `getBoundingClientRect()` for collision detection
- CSS `will-change` for performance
- No canvas, no WebGL
- The constraint IS the design — these eras should feel intentionally limited

### Phase 2: Canvas Hybrid (Eras 4–5)
- Particle effects rendered on a `<canvas>` overlay
- Background effects in canvas (parallax, weather)
- DOM elements still handle platforms and UI
- Physics calculations can use workers

### Phase 3: WebGL Integration (Eras 6–7)
- Three.js / custom WebGL for backgrounds
- Shader-based effects: bloom, glow, chromatic aberration, film grain
- Post-processing pipeline
- DOM elements rendered with WebGL overlays (glow, reflections)
- Dual rendering: DOM for interaction, WebGL for visuals

### Phase 4: Full WebGL + DOM Fusion (Eras 8–9)
- `html-in-canvas` concept — render DOM into WebGL textures
- 2.5D perspective with real depth
- Compute shaders for physics
- Screen-space effects (ambient occlusion on elements, soft shadows)
- Fragment shaders for every background
- The distinction between DOM and WebGL dissolves

### Shader Ideas
- **CRT shader** for Era 1–2 (scanlines, curvature, glow)
- **VHS glitch** on damage/death
- **Bloom** on interactive/glowing elements
- **Chromatic aberration** when moving fast
- **Film grain** in Geocities era
- **Frosted glass** in glassmorphism era
- **Tilt-shift** when viewing the level from far
- **Pixel sort** glitch when the DOM breaks
- **Dot matrix** halftone for retro print aesthetic
- **Neon glow** for the current era (DevTools inspector look)

### The Time-Rift Transition

The opening "suck back to 1991" sequence should be the most dramatic visual event in the game:

1. **WebGL context corrupts** — shaders glitch, fragments scatter
2. **CSS layers peel off** — custom properties revert one by one, like paint peeling
3. **Grid collapses to floats** — layout breaks visibly
4. **Floats collapse to block flow** — everything stacks vertically
5. **Colors desaturate** — custom palette fades to gray/blue/purple defaults
6. **Rounded corners sharpen** — `border-radius` animates to 0
7. **Fonts revert** — Geist → Helvetica → Arial → Times New Roman
8. **Background clears** — from gradient mesh to solid `#c0c0c0`
9. **Viewport meta disappears** — everything zooms out to 980px wide
10. **Doctype strips** — quirks mode activates, final layout shift
11. **White.** A blinking cursor. Silence.

---

## Character Design

### Caret (Player)
The text cursor `│` with tiny legs and expressive eyes. Design varies by cursor mode:

- **Line** `│`: Classic blinking cursor. Two vertical bars with eyes between them. Nimble, standard.
- **Underline** `▁`: Flat bar with eyes on top. Speed lines when running. Low profile.
- **Block** `█`: Full solid rectangle. Chunky legs. Impact rings when landing. Heavy.
- **Outline** `▯`: Hollow rectangle with dashed inner border. Semi-transparent. Ghostly. Ethereal.
- **Pointer** `⇱`: Classic arrow cursor with one eye. Floats freely. Leaves no trail.

### Evolution through eras
Caret doesn't just change cursor mode — its visual fidelity evolves with the rendering engine:

- **Era 1:** A literal blinking `│` character in Times New Roman. No legs. No eyes. Just a cursor on a blank page. Movement feels like cursor-key navigation.
- **Era 2:** Gets pixel art legs (1-bit, black). First crude eyes. Sparkle GIF trail. Still boxy.
- **Era 3:** CSS gives Caret color (`color: blue`), a drop shadow, and smooth movement via `transition`. First rounded features.
- **Era 4:** jQuery gives Caret animation easing — squash, stretch, bounce feel GOOD for the first time. Gets a subtle reflection.
- **Era 5:** Becomes responsive — scales with viewport. Gets touch support. Feels mobile-native.
- **Era 6:** Material elevation — Caret has a shadow that changes with height. Ripple effect on landing.
- **Era 7:** The current prototype's look — DevTools inspector aesthetic, neon glow, clean SVG rendering.
- **Era 8:** 3D depth — Caret is rendered with perspective. Slight parallax on the eyes.
- **Era 9:** Dissolves into source code. The cursor IS the insertion point in the markup. Pure text. Full circle.

### Companions & NPCs

Characters from across web history. Some are companions who travel with you. Some are NPCs rooted to their era. Some are enemies who become allies.

#### Companions (travel with you across eras)

**Clippy** — *"It looks like you're trying to platform across a deprecated element!"*
- First appears in Era 4, trapped inside a `<div class="ui-helper-hidden">`. Free him.
- The companion you didn't ask for but can't get rid of. Floats alongside Caret offering tips. His tips are technically correct but socially oblivious. Occasionally blocks your view at the worst moment.
- Actually useful: Clippy can "paperclip" two elements together, creating temporary bridges. His shape IS a paperclip — he physically hooks things.
- Has a redemption arc. In Era 1–3 he's obnoxious. By Era 7 he's learned to read the room — shorter tips, better timing. By Era 9 he's your most loyal companion and sacrifices himself to close the final unclosed tag. ("It looks like you're trying to... fix everything. Let me help." He becomes the `/>` that closes the void element.)
- Idle animation: transforms into various Office shapes. Paper airplane mode lets him scout ahead.

**BonziBuddy** — *The Gorilla That Knows Too Much*
- Found in Era 2 in a Geocities guestbook, installed himself without asking. A purple gorilla who "helps" by telling you fun facts about the elements you're standing on. The facts are sometimes wrong in entertaining ways.
- Actually a reformed adware character. He downloaded himself onto your timeline uninvited (accurate to history) but genuinely wants to help now. He just... can't help also collecting data about your play style and commenting on it. "I noticed you've died 14 times on this `<table>`. Would you like me to search the web for 'how to platform'?"
- Gameplay: BonziBuddy can sing. His MIDI karaoke creates sound-wave platforms — temporary musical surfaces that pulse with the beat. In Era 2 this is cacophonous and barely usable. By later eras his singing improves and the platforms become reliable. In Era 7 he's actually a decent lo-fi beat companion.
- Has spyware baggage that becomes a plot point: in Era 6, the `node_modules/` boss tries to recruit him back into the adware network. BonziBuddy's loyalty arc — does he stay with Caret or revert?
- Idle: juggles browser cookies. Sometimes "accidentally" reads one.

**The Dancing Baby (aka Baby Cha-Cha)** — *The Original Viral Content*
- Found in Era 2, dancing forever in an `<embed>` tag. The first meme. Has been dancing since 1996 and is tired but can't stop because `autoplay` is set to `true` and `loop` is `infinite`.
- Free the baby by finding the closing `</embed>` tag. Grateful, the baby joins you.
- Gameplay: the baby dances on elements to "test" them — revealing hidden properties, triggering interactive elements from a distance, stress-testing platforms. If a platform can hold a dancing baby, it's solid. Also provides comic relief by dancing during boss fights, completely unfazed.
- Gets progressively better-rendered through the eras (low-poly → Pixar-quality by Era 8).
- In Era 9, the baby finally gets to stop dancing. Sits down for the first time. A quiet, oddly emotional moment.

**Nyan Cat** — *The Rainbow Bridge Builder*
- Found in Era 2, stuck in an infinite `<marquee>` loop, trailing rainbows. Has been scrolling left-to-right for decades.
- Free Nyan Cat by breaking the `<marquee>` (deprecated in Era 3). Nyan Cat is disoriented — has never NOT moved left-to-right.
- Gameplay: Nyan Cat creates rainbow trails that function as temporary platforms. Flies in a straight horizontal line across gaps. Perfect for bridging chasms. But can ONLY go left-to-right (respecting its `<marquee direction="left">` origin). Need to go right-to-left? Tough. Find another route or wait for Nyan Cat to wrap around.
- In later eras, learns `direction: rtl` and can finally go both ways. Mind-blown.
- The rainbow trail's visual fidelity evolves: 8-bit pixels in Era 2, smooth gradients by Era 7, full spectral shader in Era 8.

#### Era-Resident NPCs (found in specific eras)

**The Webmaster** — Era 1–2
- An `<address>` element personified. The person who "built this site" and maintains it by hand-editing HTML in Notepad. Speaks in `<pre>`-formatted monologues. Has a "best viewed in Netscape Navigator 4.0" badge on their chest.
- Gives you early-era tips and sells items from their "Links Page" (just a list of `<a>` tags). Can teach Caret the "View Source" ability early if you find their hidden `/~webmaster/` directory.
- In later eras, if you revisit Era 1–2, the Webmaster has moved on — their page now says "THIS SITE HAS MOVED TO [broken GeoCities URL]".

**The Hamster Dance Ensemble** — Era 2
- A chorus line of hamster GIFs that perform choreographed routines on `<marquee>` elements. They serve as the rhythm section for BonziBuddy's singing. Their dance creates platform patterns you must time your jumps to.
- Cannot be freed. They love their `<marquee>`. They were born in the scroll, molded by it.

**The W3C Validator** — Era 3+
- A strict gatekeeper NPC. Appears at transitions between areas, checking your markup. If you've collected invalid elements or broken nesting, the Validator blocks you until you fix it.
- Speaks in terse error messages: "Line 47: element `div` not allowed as child of element `ul`."
- Secretly kind. If you talk to the Validator enough, it reveals it just wants the web to be beautiful and correct. It's seen too much `<table>` layout.
- After Era 5, the Validator also checks ARIA: "Warning: element with `role="button"` is missing `tabindex`."

**IE6 (Post-Boss)** — Era 4+
- After being defeated as the Era 3 boss, IE6 doesn't die — it lingers. Shows up in every subsequent era as a diminishing nuisance. In Era 4, it still causes real problems (conditional comments needed). By Era 6, it's a minor annoyance. By Era 7, it's a sad ghost haunting legacy enterprise pages, whispering "but what about backwards compatibility..."
- Can optionally be befriended. If you collect all the vendor prefixes, IE6 admits defeat gracefully and gives you a secret "quirks mode" ability that lets you break physics rules temporarily.

**jQuery (personified)** — Era 4
- A friendly `$` function given form. Wraps everything in a warm `$()`. Enthusiastic to a fault — wants to `.animate()` EVERYTHING. Teaches Caret about DOM manipulation but gets visibly nervous in later eras as native APIs replace its functionality.
- Sticks around through Era 5–6 but gets quieter. By Era 7, jQuery is sitting on a park bench in a `<legacy>` section of the page, still functional, still reliable, but the world has moved on. If you visit, jQuery teaches you one last trick.

**Stack Overflow** — Era 4+
- An NPC that gives you the answer to a question you haven't asked yet. Always correct. Sometimes the answer is for a completely different game. "Have you tried turning `z-index` to `9999`?"
- Appearance: a speech bubble containing a green checkmark, surrounded by smaller speech bubbles with slightly different answers that all claim to be better.
- Sometimes gives you an answer marked [closed as duplicate] that links to another NPC's dialogue.

**MDN** — Era 3+
- A wise, comprehensive sidebar NPC. Always accurate. Never trendy. Has been documenting everything since the beginning.
- Lives inside an `<aside>` (naturally). Speaks in well-structured prose with code examples. If you ask about any element, MDN gives you the canonical explanation with browser compatibility tables.
- MDN is the one who explains the boss mechanics if you're stuck. Not in a hand-holdy way — in a "here's the specification, the rest is up to you" way.

**Can I Use** — Era 3+
- A map-keeper NPC who tells you which features work in which eras. Literally a walking compatibility table.
- Appearance: a grid of green and red cells that shifts as you move through eras. Ask about any feature and the cells light up showing where it's supported.
- Occasionally wrong about edge cases, just like the real thing.

**Lighthouse** — Era 6+
- A lighthouse (the building, with a beam of light). Stationed at the end of each era from 6 onward. Scans Caret's journey and gives a score from 0–100 in four categories: Performance (did you take the fast route?), Accessibility (did you use semantic paths?), Best Practices (did you avoid anti-patterns?), SEO (did you find all the `<meta>` tags?).
- The light beam reveals hidden elements — accessibility issues that are invisible to sighted users but exist in the a11y tree.
- Perfect score unlocks a golden `<link rel="canonical">` item.

**GitHub Octocat** — Era 5+
- Hangs out near `<a>` portal elements. Comments on your PRs (pull requests = portal requests?). Can review your boss fight strategy and suggest improvements. Sometimes opens issues on elements that have bugs.
- Has a different "mood" SVG each time you see it (like the real Octodex).

**Figma Cursor** — Era 7+
- A rival cursor. While Caret navigates the DOM, Figma Cursor designed it. They have a rivalry-turned-respect arc. Figma Cursor can show you the "design intent" of any element — what it was supposed to look like vs. what the CSS actually rendered.
- Appearance: a small colorful arrow cursor with a selection box that appears when it stops moving.

#### The Companion Bench

From Era 4 onward, a `<fieldset>` element appears in each hub area where you can choose which companions are active. Max 2 companions at a time. Each combination creates unique interactions:

- **Clippy + BonziBuddy:** They argue constantly about the best way to help you. Clippy's tips get interrupted by BonziBuddy's fun facts. Somehow, the conflicting advice averages out to be surprisingly useful.
- **Nyan Cat + Dancing Baby:** Pure chaos energy. Rainbow platforms while the baby stress-tests them. Fast, unreliable, hilarious.
- **Clippy + Nyan Cat:** Clippy tries to help Nyan Cat go right-to-left. Fails. Tries again. Eventually paperclips a `direction: rtl` rule to Nyan Cat.
- **BonziBuddy + Dancing Baby:** BonziBuddy sings, baby dances, the platforms sync to the rhythm. Actually an effective combo if you have good timing.

#### Character Arcs

The companions aren't just gimmicks — they represent eras of the web that are often mocked but deserve affection:

- **Clippy** represents the era when software tried (badly) to anticipate user needs. His redemption is learning to help without intruding — the journey from `autoplay` to user-initiated interaction.
- **BonziBuddy** represents the innocence-lost of adware — something that seemed fun but had hidden costs. His arc is about trust and whether a reformed bad actor can be trusted with data.
- **Dancing Baby** represents viral content — endlessly looped, never asked for consent, exhausted by fame. His arc is about the human cost of `autoplay loop infinite`.
- **Nyan Cat** represents the beauty of creative constraints — born in a `<marquee>`, limited to one direction, still universally loved. His arc is about finding freedom within (and beyond) technical limitations.

They all share something: they're artifacts from eras the modern web has "outgrown," but they carry forward a warmth and weirdness that sterile component libraries lost.

---

## Audio Design

Audio evolves with the eras, just like rendering:

- **Era 1:** Silence. Then a single system beep when you jump. Page load sounds.
- **Era 2:** MIDI music. Chaotic, nostalgic, slightly grating. Multiple MIDIs fight each other.
- **Era 3:** Clean ambient piano. The first "designed" soundtrack. Understated.
- **Era 4:** jQuery UI sounds — clicks, swooshes, bwoops. Skeuomorphic audio design.
- **Era 5:** Mobile notification sounds repurposed. Flat, functional.
- **Era 6:** Material Design sounds — subtle, satisfying taps and pops.
- **Era 7:** Lo-fi beats, keyboard ASMR. The cozy coding aesthetic.
- **Era 8:** Spatial audio, 3D positioned. Audio follows the WebGL depth.
- **Era 9:** Synthesized from the DOM itself — each element has a frequency based on its position and type. The source code is the score.

### The Time-Rift Sound
The opening rift should be a reverse-rendered audio timeline: lo-fi beats → material clicks → notification dings → jQuery swooshes → piano → MIDI chaos → beep → silence. In ~5 seconds.

---

## Open Questions

- How deep does the educational layer go? Optional? Toggleable? Mandatory?
- Speedrun mode? The DOM layout creates natural speedrun routing
- Multiplayer? Multiple cursors in the same DOM?
- Level editor? It's HTML — view source IS the level editor
- Accessibility of the game itself — can it be played via screen reader in a meta way?
- Mobile controls? Touch the DOM directly?
- PWA / offline support — fitting for the Service Worker era
- Could the game literally BE a website? Homepage is level 1, about page is level 2, etc.
- Save system: localStorage in Era 4+ (when JS arrives), cookies in Era 2-3, no saves in Era 1 (historically accurate pain)
- New Game+ where you keep all abilities but the eras remix?
- Community-created eras for frameworks (React era, Vue era, Angular era) as DLC/expansion?
