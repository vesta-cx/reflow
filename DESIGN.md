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

### Caret's Friends — The Symbol Roster

Caret's core friend group. These are web-native glyphs who were scattered across the eras when the time rift hit. Each reunion unlocks a new mechanic. In multiplayer, each is a playable character with unique strengths and tradeoffs.

**`>` (Chevron)** — *The Pathfinder*
- Caret's best friend. Always pointing forward. Appears in breadcrumbs, CSS child selectors, HTML tag delimiters, markdown blockquotes.
- Personality: relentlessly optimistic, adventurous, literally cannot stop moving right. Narrates everything like a nature documentary. "> and here we see the elusive `<dialog>`, in its natural habitat..."
- Gameplay: directional boost ability. Chains into `>>>` for a triple-speed dash. Can create CSS child selector paths between nested elements, opening shortcuts through deeply nested DOM.
- Tradeoff: **strong rightward momentum, sluggish going left.** Chevron's whole identity is forward motion — reversing feels unnatural and is mechanically slower. Great at speedrunning, bad at backtracking.
- Multiplayer role: **scout/speedster.** Reaches objectives first, opens paths for teammates.

**`☰` (Hamburger)** — *The Architect*
- Three stacked lines. The muscle of the group. Found collapsed in an Era 5 `<nav>` element, waiting to be tapped.
- Personality: quiet, stoic, hides enormous complexity beneath a simple exterior. Rarely speaks, but when it does, everyone listens. Opens up (literally) to reveal hidden depths.
- Gameplay: can expand into a full navigation menu, creating platforms on demand in a vertical stack. Collapse to squeeze through gaps narrower than any other character. Toggle between open/closed state.
- Tradeoff: **can create platforms but is slow and heavy.** Expanded state is a sitting duck — wide hitbox, no jump height. Collapsed state is fast but has zero combat/interaction ability.
- Multiplayer role: **support/builder.** Creates infrastructure for the team. The party's tank when expanded.

**`#` (Hash)** — *The Anchor*
- The networker. Found in an Era 3 URL fragment, `index.html#contact`, endlessly jumping between anchors on the same page.
- Personality: knows everyone, remembers everything, a bit of a gossip. "Oh, `#main`? Yeah, we go way back. Did you know they used to be a `<div id='main'>`? Dark times." Speaks in hyperlinks.
- Gameplay: can teleport to any element with an `id` attribute. Creates `#fragment` anchors on unmarked elements for future teleportation. This is immensely powerful in levels with many `id`d elements and useless in unmarked territory.
- Tradeoff: **teleportation requires setup — useless in unmarked areas.** Must physically visit and anchor an element before teleporting to it. No anchors = no ability. High skill ceiling, steep learning curve.
- Multiplayer role: **flanker/assassin.** Sets up a teleport network, then strikes from unexpected positions. Incredible in arenas you've had time to set up; weak in fresh territory.

**`/` (Slash)** — *The Closer*
- Every tag needs a `/` to end. Found in Era 1, desperately trying to close an unclosed `<p>` tag that's been open since 1993.
- Personality: blunt, finishes other people's sentences, impatient. "Just CLOSE the tag. How hard is it." Has a complex about being necessary but unappreciated. Secretly terrified of void elements (they don't need closing).
- Gameplay: can "close" any open element, collapsing it and everything inside. This is destructive — it removes platforms, closes dialogs, ends active processes. Can seal gaps by closing empty elements. Can defeat enemies by closing their containing element.
- Tradeoff: **purely destructive — cannot create anything.** Slash removes, ends, collapses. Has no building or support ability. Accidentally closing the wrong element can eliminate needed platforms. Friendly fire risk.
- Multiplayer role: **damage dealer.** Highest burst potential. Can instantly close boss elements. But can also accidentally wreck the team's platform setup.

**`&` (Ampersand)** — *The Shapeshifter*
- The most beautiful glyph in typography, and it knows it. Found in Era 2, trapped in a loop of `&amp;amp;amp;amp;` — an entity encoding itself infinitely.
- Personality: dramatic, theatrical, vain. Every entrance is an `&mdash;` em-dash flourish. Speaks in HTML entities. Considers itself the most elegant character in the charset. Has opinions about fonts.
- Gameplay: can transform into any HTML entity — `&hearts;` for a floating heart platform, `&mdash;` for a long horizontal bridge, `&larr;` for directional push, `&copy;` for a protective shield, `&#9733;` for a thrown projectile. Each form is temporary (5 seconds) with a cooldown.
- Tradeoff: **high skill ceiling, every form is temporary.** Must constantly cycle between shapes. No permanent state. Master-level players chain entity transformations fluidly; beginners fumble and get caught mid-shift.
- Multiplayer role: **flex/wildcard.** Can fill any role temporarily but masters none. The character that's never the optimal pick but is always a fun pick.

**`*` (Asterisk)** — *The Wildcard*
- The CSS universal selector. Tiny but selects EVERYTHING. Found in Era 3 inside a `* { margin: 0; padding: 0; }` reset, bored out of its mind.
- Personality: hyperactive, overenthusiastic, tries to help everyone simultaneously. Cannot focus on one thing. "I selected ALL the elements! ALL of them! You're welcome!" Has ADHD energy.
- Gameplay: area-of-effect abilities. `*` selector hits every element in range. Can apply temporary styles to all nearby elements at once — make everything bouncy, make everything slippery, make everything glow. Powerful but indiscriminate.
- Tradeoff: **affects everything, including allies and needed platforms.** No precision. Friendly fire is guaranteed in multiplayer. Might make the platform you're standing on slippery, or bounce a teammate into a death zone. The buff/debuff doesn't discriminate.
- Multiplayer role: **chaos agent/area control.** Incredible for clearing crowds and applying zone-wide effects. Terrible if your team needs surgical precision. The "fun but risky" pick.

**`;` (Semicolon)** — *The Quiet One*
- Ends every CSS declaration. The most taken-for-granted character in all of web development. Found in Era 3, invisible at the end of a `color: blue;` declaration — easy to miss entirely.
- Personality: soft-spoken, easily overlooked, anxious about being forgotten. Speaks in whispers. But observant — notices things nobody else does. Running gag: Semicolon wanders off and everything breaks. "Wait, where's Semicolon?" *platforms start glitching* "SEMICOLON!"
- Gameplay: pure support. Standing near Semicolon buffs all your abilities — faster movement, higher jumps, shorter cooldowns. Semicolon "completes" your declarations, making them take effect. Without Semicolon nearby, abilities work at 70% effectiveness.
- Tradeoff: **almost no solo capability.** Can barely jump, slow, fragile. Entirely dependent on being near allies. But the buff is massive — a Semicolon-buffed Slash or Chevron is terrifying.
- Multiplayer role: **dedicated support.** The character nobody wants to play until they realize the team is 40% worse without one. The healer/buffer. Experienced teams always have a Semicolon main.

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

## Multiplayer — Multiple Cursors in the Same DOM

### Architecture: WebRTC P2P with Cloudflare Signaling

The game uses **peer-to-peer WebRTC data channels** for gameplay, with Cloudflare Workers + Durable Objects as a lightweight signaling layer.

```
┌──────────────┐         ┌──────────────────────┐         ┌──────────────┐
│   Player A   │◄──────► │  CF Worker (signal)   │ ◄──────►│   Player B   │
│  (host)      │         │  Durable Object per   │         │  (peer)      │
│              │         │  room — matchmaking,   │         │              │
└──────┬───────┘         │  offer/answer relay,   │         └──────┬───────┘
       │                 │  presence only         │                │
       │                 └──────────────────────┘                │
       │                                                          │
       └──────────── WebRTC Data Channel (P2P) ──────────────────┘
                     inputs ↑ │ state
                              ▼
                    Host runs game-loop.ts
                    Peers send inputs, receive GameState
```

**Why P2P, not server-relayed:**
- Near-zero latency for 2–4 player sessions (direct connection, no edge hop)
- No Durable Object compute costs for game tick processing — DO only handles matchmaking and signaling
- The game loop already runs client-side in `game-loop.ts` — the host just keeps running it and serializes state to peers
- Perfect scale: small friend groups, not MMO lobbies

**Signaling flow:**
1. Host creates room → CF Worker generates room code, stores in Durable Object
2. Peers join via room code → Worker relays WebRTC offer/answer/ICE candidates
3. Once P2P connection established, signaling server is idle (presence pings only)
4. STUN via public servers, TURN fallback via Cloudflare Calls for ~15% of players behind strict NATs

**Host-authoritative model:**
- Host runs the physics simulation (same `game-loop.ts`, same fixed timestep)
- Peers send their inputs to host at 60hz (key states, not positions)
- Host broadcasts full `GameState` snapshot at 30hz (positions, velocities, element states)
- Peers interpolate between snapshots for smooth rendering
- Input prediction on peers: apply local input immediately, reconcile when host state arrives
- On host migration (host disconnects): peer with lowest latency promotes to host, brief freeze

### Game Modes

**Co-op Campaign** (2–4 players)
- Play through the era campaign together. Each player picks a character from the symbol roster.
- Levels have paths that require specific abilities to unlock — team composition matters.
- Caret can wall-jump, Chevron can boost the group, Hash can anchor-teleport teammates to `id`d elements, Hamburger builds platform bridges, etc.
- Some puzzles need coordinated timing: Slash closes a wall while Semicolon buffs Chevron for a speed dash through the gap.
- Boss fights scale with player count (more HP, wider arenas, additional attack patterns).
- Companions still work — shared between the party, chosen at Companion Benches.

**Race** (2–4 players)
- Same level, first to reach `</html>` wins.
- Different characters take radically different routes — Chevron sprints the main path, Hash teleports via anchors, Ampersand shapeshifts through shortcuts.
- Interactions affect all players: Slash closing a platform removes it for everyone. Asterisk's AOE hits all players.
- Ghost data from best runs displayed as translucent cursors.

**Tag Editor** (2–6 players)
- Arena mode. One player is the "malformed markup" — a glitching character that corrupts elements it touches. Others are "validators" trying to close/fix the corruption.
- The malformed player wins by corrupting X elements before being "closed" by Slash or "validated" by the team.
- Slash has a natural advantage as validator. The malformed player has faster movement to compensate.

**Selector Battle** (2–4 players, free-for-all or teams)
- Combat arena on a shared DOM. Each character's abilities double as attacks:
  - `*` has AOE that debuffs everyone in range
  - `#` has precision teleport-strikes on anchored targets
  - `>` has dash attacks with high momentum
  - `/` can close the platform someone is standing on
  - `&` can shapeshift into projectiles (`&#9733;` star throw)
  - `;` buffs teammates in range (team mode only)
  - `☰` body-blocks in expanded form (huge hitbox wall)
- Last cursor standing wins. Arenas are destructible — elements get closed/corrupted as the match progresses, shrinking the playable space.

### Character Balance

| Character | Speed | Jump | Weight | Ability | Tradeoff |
|-----------|-------|------|--------|---------|----------|
| Caret `│` | ★★★ | ★★★ | ★★★ | Cursor mode switching (versatile) | Jack of all trades, master of none |
| `>` Chevron | ★★★★★ | ★★ | ★★ | Directional dash, `>>>` chain | Sluggish going left, momentum-locked |
| `☰` Hamburger | ★★ | ★★ | ★★★★★ | Create/collapse platforms | Slow, huge hitbox when expanded |
| `#` Hash | ★★★ | ★★★ | ★★★ | Teleport to anchored elements | Requires setup, useless unmarked |
| `/` Slash | ★★★★ | ★★★ | ★★ | Close/destroy elements | Purely destructive, friendly fire |
| `&` Ampersand | ★★★ | ★★★ | ★★★ | Shapeshift to any entity | Every form temporary, high skill floor |
| `*` Asterisk | ★★★ | ★★★★ | ★★ | AOE select-all effects | Zero precision, hits everything |
| `;` Semicolon | ★★ | ★★ | ★★ | 40% buff aura to nearby allies | Nearly helpless solo |

### Netcode Details

**Serialized state per tick** (~200 bytes per player):
- Position (x, y) — 2×f32
- Velocity (x, y) — 2×f32
- Animation state — u8 enum
- Facing direction — i8
- Character type — u8
- Active ability state — u16
- Grounded/wall-sliding flags — u8 bitfield

**Bandwidth estimate:**
- 4 players × 200 bytes × 30hz = ~24 KB/s upstream from host
- Each peer sends ~8 bytes of input state × 60hz = ~480 B/s upstream
- Well within WebRTC data channel capacity

**Latency handling:**
- < 50ms: seamless, no visible desync
- 50–150ms: input prediction covers it, occasional snap corrections
- 150–300ms: noticeable, but playable for co-op (not competitive)
- > 300ms: matchmaking warns, suggests closer region

### Room Discovery

- **Room codes:** 4-character alphanumeric, generated by CF Worker, stored in Durable Object with TTL
- **Friends list:** not built-in — share room codes via Discord, text, etc. (keep it simple)
- **Quick join:** optional public room list for Race and Selector Battle modes
- **Spectator mode:** read-only WebRTC connection that receives state but sends no inputs. Spectators see all players as cursors on the DOM — very Google Docs energy.

---

## The Fourth Wall — Real Browser as Game Mechanic

The game runs in a real browser. The browser IS part of the game. This section covers mechanics that blur the line between the game and the actual browser environment.

### DevTools as Cheat Codes

The real browser DevTools are a game mechanic, not an exploit. Opening the console is like finding a secret weapon — the game acknowledges and rewards it.

**Console commands that work:**
- `game.gravity = 0` — Caret floats. An NPC reacts: "Did you just... modify the runtime? That's not a bug, that's a feature."
- `game.speed = 2` — Everything speeds up. Lighthouse NPC docks your performance score.
- `game.noclip = true` — Phase through walls. W3C Validator NPC is horrified.
- `document.querySelector('.boss').remove()` — Deletes the boss from the DOM. It works. The boss is gone. But the victory doesn't trigger because you didn't "defeat" it — you just removed the node. The freed feature doesn't unlock. An NPC says: "The DOM forgets, but the accessibility tree remembers." You have to refresh and fight properly... unless you also know to dispatch the right CustomEvent.
- `document.title = 'I am a hacker'` — The favicon Caret rolls its eyes.

**Inspect Element as gameplay:**
- In Era 9, DevTools become a required mechanic. You literally edit elements in the inspector to fix the malformed document boss.
- Earlier eras drop hints: elements have `data-hint` attributes visible only in DevTools. "Check my attributes" says an NPC.
- Editing CSS in the inspector panel changes the game world in real time. Add `background: red` to an element and it turns red in the game. This is how the web actually works — the game just refuses to pretend otherwise.

**The game watches for DevTools:**
- First time you open DevTools, a one-time event fires. A tiny `<meta>` NPC appears: "Ah, a developer. Welcome to the real game." Unlocks a "Developer Mode" badge.
- Subsequent console interactions are logged in-game as a "commit history" visible in a `<pre>` block in hub areas.

### URL as API

Every URL is meaningful. Query params are cheat codes. Path segments are room addresses. The URL bar is a command line.

**Query param cheats:**
- `?god=true` — invincibility, but a `<small>` watermark reads "cheats enabled" and Lighthouse gives you 0/100
- `?era=3` — skip to Era 3 (but without abilities from 1–2, making it harder)
- `?gravity=-1` — everything falls up. Ceilings become floors. `<header>` is now the death zone. `<footer>` is safety.
- `?theme=geocities` — any level renders in Era 2 aesthetic. Tiled backgrounds, Comic Sans, sparkle cursors. Gameplay unchanged but VIBES.
- `?b=konami` — classic Konami code homage. 30 extra lives. Because some traditions deserve respect.
- `?debug=true` — shows hitboxes, collision normals, frame timing. Useful AND educational.
- `?lang=view-source` — the page renders as its own source code. A preview of Era 9.

**Path-based navigation:**
- `/rooms/dialog-boss` is a literal URL you can type. No menu needed. You ARE navigating a website.
- `/rooms/` without a room name shows a sitemap — which is also a level select screen — which is also an actual HTML sitemap.
- Sharing a URL shares a game state. "Come help me with the boss" = send the URL.

**Hash fragments as checkpoints:**
- `#checkpoint-3` scrolls to (and spawns you at) checkpoint 3. Because that's what fragment identifiers do.
- Players discover they can bookmark checkpoints. Because that's what bookmarks do.

### Persistence — Cookies, localStorage, and the Application Tab

Game state lives in real browser storage APIs. The Application tab in DevTools IS your inventory screen.

**Cookies as currency:**
- In-game currency is literally stored in `document.cookie`. Each coin is a cookie: `gold=47; path=/; max-age=86400`.
- Cookies expire. If you don't play for a day, your gold decays. This is how cookies actually work. An NPC explains: "Should've set a longer `max-age`."
- Different cookie attributes matter: `path=/rooms/forms` means that gold is only spendable in the forms level. `SameSite=Strict` gold can't be transferred to other players. `Secure` gold only exists in HTTPS.
- Players who know cookies can edit them in DevTools: Application > Cookies. This works. The game respects whatever you set. But there's a catch — the game also sets an `HttpOnly` integrity hash cookie that validates your gold total server-side via the CF Worker on multiplayer sync. Edit your cookies in singleplayer? Go wild, you earned that knowledge. Try it in multiplayer? The server rejects the desync. Just like real cookie security.

**localStorage as inventory:**
- Items are stored in `localStorage`: `localStorage.setItem('inventory', JSON.stringify(['block-cursor', 'double-jump', 'wall-grip']))`.
- Players can see their full inventory in Application > Local Storage. Can they edit it? Yes. Does it work? Yes. Is that cheating or is that just understanding web storage? The game doesn't judge.
- `localStorage` has a 5MB limit. Hoarding too many items literally fills up your storage quota. An NPC warns: "You should clear some of that. `QuotaExceededError` is no joke."
- Clearing browsing data wipes your inventory. The game warns you on first launch: "This game stores progress in your browser. Treat your Application tab with care." If you clear it anyway and return, a single `<p>` element says: "localStorage was cleared. Everything is gone. This is what data loss feels like." Then slowly rebuilds a starter kit.

**sessionStorage as temporary buffs:**
- Power-ups from the current session live in `sessionStorage`. Close the tab, they're gone. Refresh, they're gone. This teaches the difference between `localStorage` (persistent) and `sessionStorage` (ephemeral).
- Speed boosts, temporary shields, double-damage — all `sessionStorage`. An NPC quips: "Nothing in `sessionStorage` survives a refresh. Just like your motivation on a Monday."

**IndexedDB as the deep vault (Era 6+):**
- When localStorage isn't enough, the game introduces IndexedDB for complex save data: level completion state, character unlocks, companion relationships, achievement progress.
- The Application > IndexedDB section becomes a rich database of your playthrough. Named stores for different data types. Players who poke around find it well-organized — because the game models good storage architecture.
- An NPC in Era 6: "We used to put everything in cookies. Then localStorage. Now we have a proper database. This is called progress."

### The Accessibility Tree as a Parallel Dimension

A second layer of reality that exists alongside the visual DOM. Toggle it on and the game reveals what screen readers experience.

**How it works:**
- Press a key (or find an in-game item) to toggle the "a11y tree view." The visual DOM fades to 30% opacity and the accessibility tree renders as a parallel structure.
- Elements with good accessible names are solid, glowing, fully platformable in this dimension. Elements with no accessible name are invisible — gaps in the floor, missing walls.
- `role` attributes determine the element's behavior in this dimension, not its tag name. A `<div role="button">` acts like a button here. A `<button>` with no accessible name is a dark, barely-visible ghost platform.
- `aria-hidden="true"` elements are completely absent from this dimension. They exist in the visual DOM but not here. This teaches exactly what `aria-hidden` does.

**Secrets in the a11y tree:**
- Some collectibles only exist in the a11y tree dimension. Sighted players who never toggle it on will miss them entirely. This mirrors reality — the a11y experience contains information and pathways that the visual experience doesn't.
- An entire quest line: the "Screen Reader Path." A series of levels designed to be navigated purely via the a11y tree. Landmarks as waypoints. Headings as a table of contents you can jump between. Skip-nav links as literal teleporters.
- A secret boss only visible in the a11y tree: **The Unlabeled Form** — a massive `<form>` with no `<label>` elements, no `aria-label`, no placeholder text. In the visual DOM it looks fine (placeholder text and visual proximity make it usable). In the a11y tree it's a nightmare — blank inputs with no description, buttons that say "Submit" with no context. Defeating it means adding the missing labels, which you can only do in a11y tree dimension.

**The meta-teaching:**
The a11y tree dimension makes the invisible visible. Players experience firsthand that the web has two realities — what you see, and what assistive technology sees. Making them congruent is the whole point of accessibility.

### The Favicon

The browser tab's favicon is alive. It's a 16×16 pixel version of your current character, and it reacts to everything.

- **Idle:** Tiny blinking cursor animation
- **Running:** Legs move in a 2-frame animation (at favicon resolution, this is ambitious and charming)
- **Jumping:** Squash-and-stretch in 16px
- **Dying:** Turns into a 💀 briefly, then respawns
- **Boss fight:** Favicon flashes red
- **Paused:** Favicon shows `⏸`
- **Tab backgrounded:** Favicon Caret falls asleep (closes eyes). Tab title changes to "💤 Reflow — zzz"
- **Multiple tabs open:** Each tab's favicon shows a different character. They're aware of each other via `BroadcastChannel`. Open the same level in two tabs and the favicons wave at each other.
- **DevTools open:** Favicon puts on tiny glasses 🤓

Implementation: dynamically generated via a tiny offscreen `<canvas>` rendered to a `<link rel="icon">` data URL. Updated at ~4fps (favicon animation is naturally low-framerate and that's part of the charm).

### Error Pages as Secret Levels

HTTP status codes are game levels. Navigate to a bad URL and you don't get a boring error page — you get a secret level themed around the error.

**404 — Not Found**
- A void. Empty white space. A single `<h1>` says "404". Platforms are sparse, floating in nothing. The floor is gone. There's no ground because the ground was never defined — it wasn't found.
- Hidden deep in the void: a `<link rel="canonical">` item that points you to where you meant to go. Finding it teaches what canonical URLs are.
- An NPC (a broken `<a>` tag): "I used to go somewhere. The `href` still works but the destination is gone. I just point into the void now."

**500 — Internal Server Error**
- A corrupted hellscape. The level exists but it's broken. Elements render halfway. CSS is partially applied. JavaScript errors flash in red `<pre>` blocks in the sky. The game loop stutters intentionally.
- The goal: find the error in the server code (a `<script>` block with a visible bug) and fix it. The level heals as you patch errors.
- Boss: an uncaught `TypeError: Cannot read properties of undefined (reading 'position')`. It crashes and restarts repeatedly. You must catch it with a try/catch — literally place `<try>` and `<catch>` blocks around the error.

**403 — Forbidden**
- A level that exists and renders fully — but an `<auth>` barrier blocks entry. You can see everything behind it but can't pass. Platforms are visible but intangible.
- Find a `<token>` item elsewhere in the game. Return with it. The barrier lifts. Teaches authentication/authorization.
- Alternatively, the barrier says `role="admin"` and you need to find an NPC who grants you the role.

**418 — I'm a Teapot**
- A cozy, silly level. A giant teapot rendered in CSS. Steam particles rise from it. The platforms are teacups. The whole thing is a joke and it knows it. Relaxing music. No enemies. No timer. Just vibes.
- A plaque reads: "This status code was defined in RFC 2324 as an April Fools joke in 1998 and has persisted in HTTP specifications since. Some things on the web exist purely for joy."
- Hidden item: a `<br>ew` tag (a pun on `<br>` and brew). Equipping it lets Caret make tea at any rest point, restoring health. Useless. Beloved.

**301 — Moved Permanently**
- A redirect gauntlet. Enter the level and you're immediately flung to another level. Which redirects to another. Which redirects to another. A chain of portals, each one a `<a>` with `HTTP-EQUIV="refresh"`.
- The challenge: break the redirect chain by finding and closing the loop. One of the redirects points back to the start. Find it, close it with Slash, and the final destination renders.
- Teaches redirect chains, circular redirects, and why `301` vs `302` matters (permanent redirects are cached — you can't undo them easily).

**503 — Service Unavailable**
- The level is a loading screen. Forever. A `<progress>` bar at 99% that never completes. Skeleton loaders everywhere. Spinners spinning.
- The server is "down for maintenance." Find the service worker (a literal NPC named Service Worker) hiding in a `<cache>` element. Activate it and the level loads from cache — a stale, slightly outdated version of a real level, but playable. Teaches offline-first and service worker caching.

### Hidden Routes — `robots.txt` as a Map

The game's actual `/robots.txt` file is a treasure map. It lists `Disallow` paths that real search engine crawlers won't index — making these levels unsearchable, unlinkable, and undiscoverable except by players who think to check.

```
User-agent: *
Disallow: /rooms/source/
Disallow: /rooms/backrooms/
Disallow: /rooms/null/
Disallow: /.well-known/secrets/
```

**`/rooms/source/`** — The game's own source code as a playable level. Platform on Svelte components. Jump between `<script>` blocks. The game engine rendered as a game level. Meta recursion.

**`/rooms/backrooms/`** — An infinite procedurally generated level of identical-looking `<div>` elements. Fluorescent lighting (CSS `brightness` filter cranked). Faint buzzing ambient audio. Slightly damp. No exit is obvious. There IS one, but it's a `<a>` tag with no visible text — only an `aria-label`. You have to toggle the a11y tree to find it.

**`/rooms/null/`** — A level where `null` is a character. Everything evaluates to null. Platforms exist but `typeof platform === 'object'` and they behave like null — technically present, semantically nothing. The whole level is a meditation on the billion-dollar mistake.

**`/.well-known/secrets/`** — Uses the actual `.well-known` URI convention (RFC 8615). Contains a JSON file with coordinates to hidden items in every level. Players who find this feel like hackers. They feel correctly.

**Discovery breadcrumbs:**
- An NPC mentions "I've been disallowed from talking about certain places."
- A `<meta name="robots" content="noindex">` tag appears on certain elements that glow differently.
- The `/robots.txt` route is an actual accessible file in the deployed game. Checking it is a real web literacy skill.
- None of these levels appear in any menu, sitemap, or `<a>` tag anywhere in the game.

### Browser Wars Lore

The browser engines aren't abstract concepts — they're factions with ruins, NPCs, and artifacts scattered through the eras.

**Netscape Navigator** — Era 1–2
- A ruined empire. Grand architecture now crumbling. The "Navigator" is a literal navigator NPC — a compass and sextant character who gives you maps of each era.
- Netscape's ruins contain artifacts: `<blink>` (the weapon that destroyed them from within), `<layer>` (a platform that only works in Netscape's ruins), and the Netscape `throbber` (the animated loading indicator) which serves as a save point.
- In the ruins you find the Mozilla dragon egg. It hatches in Era 4, becoming Firefox.

**Internet Explorer** — Era 2–6
- Starts as a dominant castle (Era 3 boss). Post-defeat, degrades through eras. By Era 5, IE's castle has conditional comment walls `<!--[if IE]>` that only some players can see. By Era 7, it's a single tombstone: `<meta http-equiv="X-UA-Compatible" content="IE=edge">`.
- IE's ghost haunts enterprise levels, whispering about ActiveX and backward compatibility.
- If you collect all vendor prefixes (`-ms-`, `-webkit-`, `-moz-`, `-o-`), IE's ghost grants you "Quirks Mode" — a temporary ability that breaks physics rules but renders everything slightly wrong.

**Firefox / Mozilla** — Era 4+
- Hatches from the Netscape egg. The `about:config` dungeon: a massive secret area filled with hundreds of boolean flags. Each one changes a game mechanic. `dom.caret.blink.enabled = false` stops Caret from blinking. `game.physics.gravity = 0` does what you think. The dungeon rewards systematic exploration — the more flags you toggle, the more you understand the engine.
- Firefox's `View Source` is the cleanest in the game — syntax-highlighted, with line numbers. Using Firefox's source viewer reveals secrets that other browsers' viewers miss.

**Chrome / V8** — Era 5+
- The V8 engine room: a mechanical, industrial zone where JavaScript is compiled to machine code in real-time. Gears turn, pistons fire, hot code paths glow red (JIT compilation visualized). You can see your own game inputs being compiled.
- Chrome's DevTools are the most powerful in-game — extra panels, more detailed inspection. Using Chrome to play is not "better" but it has the richest DevTools integration.
- The memory profiler reveals which game elements are leaking memory. Fix the leaks and the level runs smoother. Meta-performance optimization.

**Safari / WebKit** — Era 5+
- An elegant, minimal garden level. Everything is beautiful but some features are conspicuously absent. Platforms that work in other browsers just... aren't here. Signs read "Coming in a future release" and "Available behind a flag."
- The WebKit NPC is a meticulous gardener who has strong opinions about which features belong in the garden and which are weeds. Sometimes frustrating, sometimes correct.
- Hidden shortcut: Safari's garden has a gate to a WKWebView level where mobile Safari has different rules entirely. `100vh` doesn't mean what you think it means.

---

## Open Questions

- How deep does the educational layer go? Optional? Toggleable? Mandatory?
- Speedrun mode? The DOM layout creates natural speedrun routing
- Level editor? It's HTML — view source IS the level editor
- Accessibility of the game itself — can it be played via screen reader in a meta way?
- Mobile controls? Touch the DOM directly?
- PWA / offline support — fitting for the Service Worker era
- Could the game literally BE a website? Homepage is level 1, about page is level 2, etc.
- Save system detail: cookie expiry mechanics, storage quota as gameplay constraint
- New Game+ where you keep all abilities but the eras remix?
- Community-created eras for frameworks (React era, Vue era, Angular era) as DLC/expansion?
- How many hidden routes is too many? Should there be a meta-achievement for finding them all?
- BroadcastChannel multi-tab interactions — how far do we take this?
