# Reflow — Design Document

## Core Concept

A platformer where the webpage IS the level. You are **Caret**, a sentient text cursor navigating through the DOM. Every HTML element has physics behavior that maps to its real semantic purpose. The game teaches web development concepts through play.

## The Eras — Web Design as Level Progression

The game progresses through the history of web design. Each era is a world/chapter with its own visual language, constraints, and mechanics. As the eras advance, the rendering capabilities evolve too — early levels are pure CSS, later levels introduce canvas, WebGL, shaders, and post-processing.

### Era 1: The Document (1991–1996)
**Aesthetic:** Tim Berners-Lee's first page. Times New Roman, blue underlined links, gray `bgcolor`, no CSS at all — just raw HTML attributes. `<hr>` rules everywhere. `<marquee>` and `<blink>` tags. Counters that say "You are visitor #00382". Under construction GIFs.

**Level design:**
- Purely structural — `<h1>` through `<h6>` form a descending staircase of headings
- `<hr>` elements are platforms (horizontal rules = horizontal platforms)
- `<table>` is used for LAYOUT (the original sin) — grid-based puzzle rooms where cells shift
- `<frame>` splits the viewport into independent scrolling zones you must navigate between
- `<marquee>` text scrolls across as a moving obstacle/platform
- `<blink>` elements phase in and out (only solid half the time)
- All text is selectable — Caret can "select" text to create temporary blue highlight platforms
- No rounded corners. Everything is rectangular. Sharp. Brutal.

**Teaching:** Document structure, semantic meaning before CSS existed, why tables-for-layout was necessary but problematic.

**Rendering:** Pure DOM/CSS only. No effects. The austerity IS the aesthetic.

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

**Teaching:** The wild west of early web — no standards, presentation in HTML, accessibility nightmare. Shows WHY we needed CSS.

**Rendering:** CSS animations, first use of `mix-blend-mode`, animated backgrounds. Still no canvas.

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

**Teaching:** Separation of concerns, the cascade, specificity, the box model, float-based layout struggles.

**Rendering:** CSS transforms begin (2D only). Subtle drop shadows. First gradients.

### Era 4: The jQuery Era (2006–2012)
**Aesthetic:** Rounded corners (finally!), glossy buttons, drop shadows, skeuomorphism. Web 2.0 badges, reflections, gradients on everything. The "Aqua" influence.

**Level design:**
- `$(document).ready()` — level loads with a dramatic jQuery animation sequence
- `.slideDown()` / `.slideUp()` platforms that animate in/out
- `.fadeIn()` / `.fadeOut()` — elements with opacity transitions
- `.animate()` creates smoothly moving platforms (contrast with Era 1's jerky `<marquee>`)
- AJAX zones — parts of the level load dynamically as you approach (teaching async content)
- `.draggable()` — some elements can be repositioned (early Pointer cursor mode!)
- `.sortable()` — reorder platforms by dragging
- Modal dialogs (pre-`<dialog>`) using overlay divs — jankier version of the boss fight
- `.accordion()` / `.tabs()` — jQuery UI widgets as level mechanics

**Teaching:** JavaScript's role, DOM manipulation, progressive enhancement, the plugin ecosystem, why native elements matter more than JS widgets.

**Rendering:** CSS3 transitions, `border-radius`, `box-shadow`, `linear-gradient`. First canvas-based particle effects.

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

**Teaching:** Responsive design, mobile-first thinking, CSS grid systems, relative units, viewport meta tag.

**Rendering:** CSS animations more complex. First use of `will-change` and hardware acceleration. Parallax scrolling backgrounds.

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

**Teaching:** Component architecture, design tokens, CSS custom properties, Grid layout, Shadow DOM encapsulation.

**Rendering:** WebGL introduced for background effects. Shader-based ripples. Canvas-based particle systems become standard. First post-processing (bloom on interactive elements).

### Era 7: The Tailwind Age (2019–2024)
**Aesthetic:** Utility-first. shadcn. Vercel aesthetic. Dark mode. Geist font. Subtle borders. Muted colors with neon accents. The current era.

**Level design:**
- This is where the current prototype lives — the "native" era of Reflow
- All shadcn-svelte components as level furniture
- Tailwind classes visible on elements as tiny labels (teaching utility-first)
- Dark mode toggle changes the entire level (light/dark variants with different physics)
- `cn()` utility — merging class abilities (combine cursor modes temporarily)
- Server components — some elements render on the "server" (exist before the level loads, can't be moved)
- Streaming SSR — parts of the level progressively hydrate as you approach
- View transitions — room changes use the View Transition API for smooth morphing
- The aesthetic is polished, refined, the platforming is tight

**Teaching:** Utility-first CSS, design systems, modern component patterns, dark mode, SSR concepts.

**Rendering:** Full WebGL integration. Custom shaders for element highlights, camera effects (depth of field when paused, chromatic aberration on damage). Smooth 120fps physics.

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
- Popover API — native popovers as floating platforms (already in the prototype!)

**Teaching:** Modern CSS features, container queries, cascade layers, scope, the shift from JS solutions to CSS-native.

**Rendering:** Full 3D WebGL scenes blended with DOM. Fragment shaders for backgrounds. Compute shaders for particle physics. Screen-space reflections on glossy elements. The web can do ANYTHING now.

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
- **Accessibility Tree:** A parallel "ghost" version of the level that screen reader users navigate. Making the level accessible unlocks secret paths.
- **Semantic vs Presentational:** `<div>` platforms are generic and boring. `<section>` platforms have super powers WHEN you give them an accessible name.
- **Progressive Enhancement:** Levels work without JS (basic platforming), but JS adds interactive elements. The base experience must be completable.

---

## Rendering Progression

The technical rendering evolves with the eras, mirroring real hardware/browser capability progression:

### Phase 1: Pure DOM (Eras 1–3)
- All rendering via CSS transforms, transitions, animations
- `getBoundingClientRect()` for collision detection
- CSS `will-change` for performance
- No canvas, no WebGL

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

---

## Character Design

### Caret (Player)
The text cursor `│` with tiny legs and expressive eyes. Design varies by cursor mode:

- **Line** `│`: Classic blinking cursor. Two vertical bars with eyes between them. Nimble, standard.
- **Underline** `▁`: Flat bar with eyes on top. Speed lines when running. Low profile.
- **Block** `█`: Full solid rectangle. Chunky legs. Impact rings when landing. Heavy.
- **Outline** `▯`: Hollow rectangle with dashed inner border. Semi-transparent. Ghostly. Ethereal.
- **Pointer** `⇱`: Classic arrow cursor with one eye. Floats freely. Leaves no trail.

### Evolution through eras:
- Era 1: Caret is literally a blinking text cursor on a blank page
- Era 2: Gets pixel art legs and sparkle trail
- Era 3: Gets a CSS-styled body (rounded, shadowed)
- Era 4: Gets jQuery animations (squash, stretch, easing)
- Era 5: Becomes responsive (scales with viewport)
- Era 6: Gets Material elevation and ripple
- Era 7: Gets the current shadcn/DevTools look
- Era 8: Gains 3D depth
- Era 9: Becomes pure light/code

### NPCs
- **Clippy** — appears in Era 4, gives jQuery tips
- **W3C Validator** — a strict NPC that blocks you if your path isn't "valid"
- **IE6** — a hostile NPC that renders things wrong, creates alternate collision boxes
- **Lighthouse** — scores your level traversal on Performance, A11y, Best Practices, SEO
- **Stack Overflow** — an NPC that gives you the answer but you have to figure out the question
- **MDN** — a wise elder NPC with comprehensive knowledge, always accurate

---

## Audio Design

- **Era 1:** Silence. Then a single beep when you jump.
- **Era 2:** MIDI music. Chaotic, nostalgic.
- **Era 3:** Clean ambient piano.
- **Era 4:** jQuery UI sounds (clicks, swooshes).
- **Era 5:** Mobile notification sounds repurposed.
- **Era 6:** Material Design sounds (subtle, satisfying).
- **Era 7:** Lo-fi beats, keyboard ASMR.
- **Era 8:** Spatial audio, 3D positioned.
- **Era 9:** Synthesized from the DOM itself — each element has a frequency.

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
