# Scene 01 — A Beautiful Homepage

*The opening of the game. No combat. No urgency. Just Caret, at home, on a gorgeous modern webpage.*

*Tutorial mechanics are woven into exploration. The emotional work of this scene is establishing what Caret has, so that losing it means something.*

---

The cursor blinks.

It's been blinking for as long as it can remember — which is to say forever, which is to say it doesn't remember not blinking, which amounts to the same thing.

Caret lives on a homepage. Not just any homepage: *the* homepage, polished to a mirror shine, the kind of page that makes developers pause mid-scroll and open DevTools just to understand how the animations work. The background is a gradient mesh in soft blues and purples, shifting imperceptibly. The typography is precise — variable weight, perfectly tracked, the kind of typesetting that takes a Saturday afternoon to get right and looks effortless once it's done.

Everything is shadcn. Everything has a border radius. Everything is slightly too good.

Caret doesn't think about this. The page has always been beautiful. The page will always be beautiful. This is home.

---

*(Player gains control. First movement tutorial.)*

The `<nav>` sits along the top of the page like a horizon. Caret moves across it — [ARROW KEY or WASD] — and feels the slight elasticity of the platform, the way it responds. The `<nav>` moves, actually: a slow sinusoidal oscillation, side to side. Caret has noticed this but never questioned it. That's just what `<nav>` does.

> **DOM Inspector:** `<nav role="navigation">` — Navigation moves you between places. Its role is to help users find their way. Even as a platform, it can't help but *go somewhere*.

The `<aside>` towers rise on either side of the page — two tall, dark rectangles, slightly removed from the main content. Caret approaches one and jumps at the wall. Something clicks: the wall grips back, lets them launch off it, reverse direction. Wall-jump.

> **DOM Inspector:** `<aside role="complementary">` — Complementary content stands to the side of the main flow. It supports without being the main event. Wall-jump surfaces that you can *push off from* but not rest on.

*(Tutorial: wall jumping.)*

Caret experiments. Jumps between the two `<aside>` towers a few times. This is good. This has always been good. There's a satisfaction in it that Caret can't fully articulate — the push-and-release, the way height feels earned.

---

At the bottom of the page, a row of shadcn `<button>` components.

Caret drops onto one. It bounces. Not violently — a clean, satisfying launch, like landing on something that was built to receive impact and send it back.

> **DOM Inspector:** `<button>` — Designed to receive interaction and respond to it. Triggers actions. Keyboard-focusable, announced to screen readers, intentionally bouncy. A good button gives you something back.

Caret bounces between them for a moment longer than strictly necessary.

To the left, `>` is doing the same thing, but faster, dashing between buttons with characteristic forward momentum. Caret watches.

"You've been on those buttons for twenty minutes," says `>`.

"Fifteen," says Caret. "And they're satisfying."

"Everything is satisfying to you."

"That's not a criticism."

`>` lands next to Caret. They stand there for a moment, two characters on a row of buttons.

"Do you ever wonder," Caret says, "why the buttons bounce?"

`>` considers this. "They just do."

"But why *specifically* like this? Why this amount? Why do they send you upward instead of just absorbing impact?"

Long pause.

"...because buttons are for doing things," `>` says slowly. "And when you do a thing, something should happen. The bounce is the something."

Caret nods. "I just thought of that now. I've been on these buttons a thousand times."

"That's fine," says `>`. "That's how things work. You notice them when you notice them."

---

*(Player explores the rest of the level. Each section has incidental dialogue and DOM Inspector panels.)*

The `<details>` component near the center of the page:

> **Caret:** This folds up.
> **`>`:** Everything here folds up. That's the point.
> **Caret:** I mean it folds up *on purpose*. There's content inside that you only see if you need it. It's being considerate about what it shows you.
> **`>`:** ...yes.
> **Caret:** Is that weird to notice?
> **`>`:** *A little.*

The `<code>` block near the bottom — slippery, precise:

> **Caret:** *(sliding)* — Oh no — oh no —
> **`>`:** *(from safety)* — Careful, that's `<code>`.
> **Caret:** *(sliding faster)* — I KNOW IT'S `<code>` —
> **`>`:** — Code is unforgiving. One character off and everything breaks.
> **Caret:** *(falls off edge)* — THAT'S NOT HELPFUL —

The `<mark>` checkpoint — Caret touches it, a soft glow, progress saved:

> **DOM Inspector:** `<mark>` — Highlights content for relevance. Marks the moment as meaningful. Your position is saved.

---

*(Near the end of the tutorial area. Caret has learned: movement, wall-jump, button bounce, checkpoint. The page is gorgeous and alive. Everything is good.)*

`>` stops at a spot near the edge of the main content area. There's something there — between a `<details>` element and a `<section>` that contains the lower navigation. Something small. Glitching, slightly.

"Caret."

Caret comes over.

The element is hard to look at directly. It flickers between rendering states — serif font bleeding through for a frame, a gray background flashing, a `<table>` border appearing and vanishing. The DOM Inspector panel tries to load and fails: `Element type: [UNKNOWN]`.

"What is that?" says Caret.

"I don't know," says `>`. "I've been meaning to mention it. It's been there for a few days."

Caret approaches it. The flicker intensifies — and for just a moment, half a second, Caret sees something *through* it: a flat white page, a blue underlined link, Times New Roman, a blinking cursor —

— and then it's just the glitching element again.

"That's strange," Caret says.

"Very," `>` agrees.

"We should probably not touch it."

"Absolutely."

Caret reaches out and touches it.

---

*[[02-the-rift|→ Scene 02: The Rift]]*
