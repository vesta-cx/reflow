# Eras Reference

Quick reference for all nine eras. For detailed boss write-ups and level design, see [[../../../DESIGN.md]].

---

| # | Name | Years | Aesthetic | Hostage Feature | Boss |
|---|------|-------|-----------|----------------|------|
| 1 | The Document | 1991–1996 | Times New Roman, `bgcolor`, `<hr>` platforms, no CSS | CSS (`<style>`) | `<font>` — The Inline Styler |
| 2 | Geocities | 1996–2001 | Tiled backgrounds, MIDI, sparkle trails, Comic Sans | Semantic structure | Presentation Hydra (`<center><font><blink>`) |
| 3 | CSS Zen Garden | 2001–2006 | Float layouts, IE box model bugs, z-index wars | JavaScript interactivity | IE6 — The Incompatible |
| 4 | jQuery Era | 2006–2012 | Rounded corners, glossy, Web 2.0 gradients, `.animate()` | Native HTML elements | `$.fn.modal()` — The Plugin Monolith |
| 5 | Responsive Revolution | 2012–2015 | Bootstrap, flat design, hamburger menus, breakpoints | Accessibility (ARIA, landmarks) | Bootstrap Grid Hydra |
| 6 | Component Era | 2015–2019 | Material Design, elevation, ripples, CSS Grid | CSS Grid / native layout | `node_modules/` — The Dependency Black Hole |
| 7 | Tailwind Age | 2019–2024 | shadcn, utility-first, dark mode, Geist, Vercel aesthetic | Container queries, `@layer`, `@scope` | Utility Sprawl |
| 8 | Spatial Web | 2024–???? | 2.5D, scroll-driven, glassmorphism, perspective | Understanding / `view-source` | The Obfuscator (`<div>` soup) |
| 9 | The Source | Endgame | `view-source:`, green on black, CRT shader | The web itself | The Malformed Document |

---

## Era Transitions

Each boss defeat triggers a **Victory Reflow** — a dramatic visual transition as the freed feature activates:

- **Era 1 → 2:** Color and CSS flood the page. Intentional typography appears. The world gains *meaning*.
- **Era 2 → 3:** Separation of concerns. CSS takes over from inline styles. Structure separates from presentation.
- **Era 3 → 4:** JavaScript arrives. Elements wake up. `onclick` handlers fire. The page responds.
- **Era 4 → 5:** Native elements gain power. `<dialog>`, `<details>`, `<progress>` appear. The DOM grows.
- **Era 5 → 6:** The accessibility tree flickers on. ARIA roles visible. Focus outlines glow. The ghost layer arrives.
- **Era 6 → 7:** Grid layout snaps. `fr` units distribute space. `grid-area` labels appear. The layout is finally sane.
- **Era 7 → 8:** Container queries. Elements respond to their own context. CSS is fully self-sufficient.
- **Era 8 → 9:** `view-source:` restores. The source code becomes legible. The final level is visible.

---

## Friend Reunion Locations

| Character | Era | Where Found |
|-----------|-----|-------------|
| `/` Slash | Era 1 | Trying to close an unclosed `<p>` tag from 1993 |
| `>` Chevron | Era 2 | Trapped in a web ring with no exit |
| `#` Hash | Era 3 | Anchor chain breaking in IE6 rendering chaos |
| `;` Semicolon | Era 3 | Sitting at the end of an unfinished CSS declaration |
| `*` Asterisk | Era 3 | Reset their own identity with `* { margin: 0; padding: 0; }` |
| `&` Ampersand | Era 2 | Caught in `&amp;amp;amp;amp;` encoding loop |
| `☰` Hamburger | Era 5 | Collapsed by a media query, viewport never widened |

---

## Companion Unlock Locations

| Companion | Era | How Found |
|-----------|-----|-----------|
| Clippy | Era 4 | `<div class="ui-helper-hidden">` — must backtrack to unlock |
| BonziBuddy | Era 5 | Legacy guestbook (still operational) |
| Dancing Baby | Era 2 | `<embed autoplay loop>` — must find the `</embed>` tag |
| Nyan Cat | Era 2 | `<marquee>` — freed when `<marquee>` is deprecated in Era 3 |

---

## Rendering Phases

| Eras | Phase | Capabilities |
|------|-------|-------------|
| 1–3 | Pure DOM | CSS transforms, transitions, animations only. No canvas. |
| 4–5 | Canvas Hybrid | Particle effects and backgrounds on `<canvas>` overlay. |
| 6–7 | WebGL Integration | Three.js/WebGL backgrounds, bloom, glow, chromatic aberration. |
| 8–9 | DOM Fusion | Full 3D WebGL + DOM. Compute shaders. Screen-space effects. |
