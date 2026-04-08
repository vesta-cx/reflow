# Premise

## Logline

A sentient text cursor living on a beautiful modern webpage gets pulled back to the primitive web of 1991 and must fight through every era of web history — defeating the anti-patterns that held each era hostage — to find their way home. Along the way they discover that the web was never just a technology: it was always a conversation, and accessibility is what makes sure everyone gets to speak.

---

## Emotional Core

Caret starts the game taking everything for granted.

The modern homepage is gorgeous. Grid layout, custom properties, smooth scroll, dark mode, WebGL shaders. It's Caret's whole world, and it has always been exactly this. Caret doesn't think about who built it, what it took to get here, or why any of it works.

The rift strips all of that away. And the game is about earning it back — not by fighting, but by *understanding*. Each era you pass through isn't just a level to complete. It's a layer of the web that someone built, usually out of necessity, always with the tools available at the time. The bosses aren't evil. They're patterns that served a purpose and then wouldn't let go.

By the end, Caret returns to the same homepage. Nothing has changed. But Caret can now see every decision that went into it — every `<aside>` that's there because someone thought carefully about complementary content, every `<button>` that bounces because it was designed to signal activation. The page is the same. Caret is different.

The credits play as a perfectly structured semantic HTML document. Every tag used correctly. Caret reads it and understands all of it.

---

## Themes

**The web is a conversation.**
HTML is a language for communicating structure and meaning. CSS communicates intent. Accessibility ensures the conversation reaches everyone. Caret's journey is about learning that presentation was never the point — communication was.

**Understanding versus defeating.**
Every boss is a real thing someone built because they needed it. `<font>` existed before CSS. jQuery existed before native elements. The Plugin Monolith grew big because people needed it to. Defeating them doesn't mean they were wrong to exist. It means the web found a better answer.

**Artifacts deserve affection.**
Clippy was annoying. BonziBuddy was invasive. The Dancing Baby never asked to be a meme. Nyan Cat was born in a `<marquee>`. These things are easy to mock now. But they were *there*, in the weird, human, trying-its-best early web. The game asks you to carry them forward with you rather than leave them behind.

**Earned complexity.**
The modern web *looks* clean but carries enormous invisible complexity. Caret starts in that clean surface. The rift forces them to see the archaeology beneath it. By Era 9, looking at a `<button>` means seeing all nine eras of history that led to what a button now means.

---

## Tone

Warm. Witty. Slightly melancholic at the right moments.

The humor is meta and specific — jokes land hardest if you know the web, but they should still work if you don't. No ironic detachment. The game genuinely loves what it's making fun of.

The emotional beats are earned. Clippy's sacrifice should land. The Dancing Baby finally getting to rest should feel like a small catharsis. When Nyan Cat learns `direction: rtl` and cries, it should be ridiculous and moving at the same time.

Reference points for tone:
- **Pixar** — genuinely funny and genuinely sad, characters that feel real in absurd situations
- **Undertale** — bosses you come to understand rather than just beat, the world reacts to how you play
- **Celeste** — difficult platforming that is *about* something emotionally, mechanics that reflect the story
- **Night in the Woods** — witty dialogue with real melancholy underneath, specificity of place and character

---

## What the Player Learns

By finishing the game, a player who knew nothing about web development will understand:
- Why HTML has semantic elements and why they matter
- What accessibility means and why it was a late addition (and shouldn't have been)
- Why CSS exists separate from HTML
- Why `<div>` soup is a problem even when it looks fine
- What a screen reader experiences and how it differs from visual experience
- Why the web is built in layers (HTML, CSS, JS, accessibility) and what each layer is for

This happens through play, not lectures. The DOMInspector panel is optional. The semantic mechanics make sense on their own. The educational layer is there for players who want it.

---

## What the Game Is NOT

Not a history lesson. Not a tutorial. Not a lecture.

It's a game first. The learning is incidental, inevitable, and disguised as fun. A player who completes the game might not be able to write a blog post about web accessibility, but they will have an intuitive feel for why semantic HTML matters — because they've played it.
