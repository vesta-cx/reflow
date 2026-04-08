# Fourth Wall Mechanics

The game runs in a real browser. The browser is part of the game. These mechanics blur the line between the game world and the actual environment it runs in.

*See the full write-up in [[../../DESIGN.md]] (§ "The Fourth Wall").*

---

## Quick Reference

### DevTools
- Opening DevTools triggers a one-time event: the `<meta>` NPC appears, unlocks "Developer Mode" badge
- Console commands that work: `game.gravity`, `game.speed`, `game.noclip`
- `document.querySelector('.boss').remove()` — works, but victory doesn't trigger (must dispatch right CustomEvent)
- Editing CSS in inspector changes the game world in real time
- Era 9: DevTools become a *required* mechanic for the final boss

### URL / Query Params
Full list of working query params:

| Param | Effect |
|-------|--------|
| `?god=true` | Invincibility. Watermark. Lighthouse score: 0. |
| `?gravity=-1` | Falls up. `<header>` is death zone. `<footer>` is safe. |
| `?era=3` | Skip to Era 3 without abilities from 1–2 |
| `?theme=geocities` | Any level renders in Era 2 aesthetic |
| `?debug=true` | Hitboxes, collision normals, frame timing |
| `?lang=view-source` | Page renders as its own source code |
| `?b=konami` | 30 extra lives |
| `#checkpoint-N` | Spawn at checkpoint N (real fragment nav) |

### Storage
- **Cookies:** Currency. Real `document.cookie`. Expires. `HttpOnly` integrity hash for multiplayer anti-cheat.
- **localStorage:** Inventory. Editable in DevTools. Respected. This is a feature, not a bug.
- **sessionStorage:** Temporary buffs. Cleared on tab close. Teaches ephemeral vs persistent.
- **IndexedDB:** Deep save data (Era 6+). Structured, queryable, visible in Application tab.

### A11y Tree Dimension
- Toggle key (or find the in-game item): visual DOM fades, a11y tree renders
- Elements without accessible names: invisible / missing platforms
- `aria-hidden="true"` elements: completely absent
- Secrets only in this dimension, including the **Unlabeled Form** boss
- The Screen Reader Path: a quest line navigable only through this layer

### Favicon
- Dynamically rendered via offscreen `<canvas>` → `<link rel="icon">` data URL
- Reacts to: idle (blink), running (2-frame), jumping (squash), dying (💀), boss fight (flash red), paused (⏸)
- Tab backgrounded: Caret falls asleep, title changes to "💤 Reflow — zzz"
- DevTools open: Caret puts on tiny glasses 🤓
- Multiple tabs: tabs communicate via `BroadcastChannel`, favicons wave at each other

### Error Pages
| Status | Level Theme |
|--------|-------------|
| 404 | The Void — sparse platforms, a broken `<a>` NPC |
| 500 | Corrupted hellscape — fix the error in a `<script>` block |
| 403 | Auth barrier — find a `<token>` item elsewhere |
| 418 | Cozy teapot room — no enemies, just vibes |
| 301 | Redirect gauntlet — break the chain with Slash |
| 503 | Eternal loading — find the Service Worker NPC, activate cache |

### Hidden Routes (robots.txt)
None of these appear in any menu, sitemap, or `<a>` tag:

| Path | Level |
|------|-------|
| `/rooms/source/` | The game's own source as a level |
| `/rooms/backrooms/` | Infinite procedural `<div>` maze. Exit only visible in a11y tree. |
| `/rooms/null/` | Everything evaluates to null. Meditation on the billion-dollar mistake. |
| `/.well-known/secrets/` | JSON coordinates to hidden items in every level |

Discovery breadcrumbs: an NPC mentions "disallowed places," some elements have `data-hint` in DevTools, `<meta name="robots" content="noindex">` elements glow differently. The `/robots.txt` file is real and accessible.
