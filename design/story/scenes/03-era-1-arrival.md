# Scene 03 — The Document (Era 1 Arrival)

*Caret arrives in 1991. Everything they know is gone. This scene establishes: the aesthetic, the mechanics available (very few), the first NPC, and Caret's emotional state (disoriented, then curious, then determined).*

*No combat yet. Just exploration, orientation, and the first conversation.*

---

Caret blinks.

The blink feels different here. Back home, the blink was a communication — *I'm here, I'm ready* — rendered in clean SVG with a subtle glow. Here the blink is just... an on/off state. A bit flag. `visible: 1`, `visible: 0`. No easing. No personality. Just the raw fact of existing and then not existing and then existing again.

This is fine. Caret can work with this.

*(Player regains control. Caret is a literal `│` character in Times New Roman. The level is flat white with minimal structure.)*

The page is enormous and almost empty. White. The kind of white that exists not because someone chose it but because nobody changed the default. Off in the distance — hard to gauge distance when everything is flat, when there's no shadow, no depth, nothing to give scale — a `<h1>` in the largest heading size, which is, somehow, still Times New Roman.

**Welcome to the World Wide Web**

Below it, a smaller `<h2>`. Below that, `<h3>`. And `<h4>`. And `<h5>`. And `<h6>`. Six headings descending like a staircase, each slightly smaller than the last, forming a perfectly navigable series of platforms down into the lower section of the page.

Caret approaches them and stops.

> *(Inspecting the `<h1>`)*
> **DOM Inspector:** `<h1>` — The top-level heading. The most important thing on the page, or at least the thing the author most wanted you to see first. Screen readers use headings to navigate. This one is the only thing on the page. In 1991, this was enough.

Caret starts descending the heading staircase. The movement here is different — no smooth acceleration, no easing curves. Starting position to ending position. The physics are... literal. What you see is what you get.

> **Caret:** *(to themselves)* No border-radius. There's no border-radius anywhere.

There isn't. Everything is sharp-cornered, blunt-edged. The page has no concept of softness.

> **Caret:** There's no CSS. There's *nothing* here. It's just... structure.

Beat.

> **Caret:** ...huh.

*(Something unexpected: the structure, stripped bare, is actually kind of beautiful. Clean. Intentional in its simplicity. The six headings really do form a perfect staircase. The `<hr>` elements are clean horizontal rules that work as platforms with satisfying precision. Without decoration, every element is exactly what it says it is.)*

---

Partway down the heading staircase, on a wide `<hr>` platform: a small figure. Hunched over an unseen keyboard, typing. Surrounded by hand-edited HTML files. They don't look up.

> **Webmaster:** `<p>You have reached the homepage of the Webmaster.</p>` *(typing as they speak, their speech rendered as literal HTML)* `<p>This page is currently under construction.</p>` `<p>Please check back in one to two business weeks.</p>`

Caret approaches.

> **Caret:** Hello.

The Webmaster looks up. Their chest bears a small badge: **BEST VIEWED IN NETSCAPE NAVIGATOR 4.0**. Their eyes are hyperlinks — literally underlined and blue.

> **Webmaster:** `<p>A visitor.</p>` `<p>You are visitor number 2.</p>` *(they glance at the counter)* `<p>Usually it is only me.</p>` `<p>Welcome.</p>`

*(Long pause.)*

> **Caret:** How do I— I'm trying to get back. To a page that— it's very different from here. More advanced. There are shaders. And CSS variables.
> **Webmaster:** `<p>I do not know what those are.</p>`
> **Caret:** Right. No. Of course. It's— look, there must be a way forward from here. Through eras. Through history. I need to—

*(The Webmaster holds up a hand.)*

> **Webmaster:** `<p>There is someone keeping things from moving.</p>` `<p>Has been for a while.</p>` `<p>At the end of the page.</p>` `<p>A big element.</p>` `<p>It does not want the web to change.</p>`
> **Caret:** What element?
> **Webmaster:** `<p>It has a lot of opinions about fonts.</p>`

---

*(Exploration continues. The Era 1 mechanics establish themselves through play.)*

The `<blink>` elements: platforms that phase in and out. Caret times a jump onto a `<blink>` and discovers that if you're on it when it blinks off, you fall right through. Timing puzzle.

> **DOM Inspector:** `<blink>` — Deprecated in every browser. Made text flash on and off. Widely considered an accessibility nightmare — blinking content can trigger photosensitive conditions. Its mechanic reflects its nature: unreliable, intermittent, ultimately removed from the web.

The `<marquee>` text scrolling across the mid-section of the page: an obstacle that moves too fast to platform on directly, but can be jumped over with the right timing. In the distance, something rides on top of the `<marquee>` — a cursor trail, something small and colorful — and seems completely unbothered by the movement.

*(Caret files this away.)*

The `<table>` section near the bottom: the first grid-based puzzle. Tables used for layout — cells that shift, columns that misalign if you don't navigate in the right order. The table has a caption: **"Table-based layout — the original grid system."** Every cell must be traversed to progress. Some cells contain nested tables. The nesting goes three levels deep before it bottoms out.

> **Caret:** *(inside the third nested table)* This is a grid made of a table made of tables. The grid is made of tables.
> *(Beat.)*
> **Caret:** I understand now why CSS Grid was invented.

---

*(Near the end of the first section. Caret reaches the boss arena: an enormous `<font>` element that spans most of the bottom of the page.)*

The `<font>` tag is a presence before it speaks. The page within its area is wrong — colors applied directly to elements with inline `color=""` attributes, font sizes set with `size="6"`, every stylistic decision hardcoded directly into the markup. There's no separation between what the page *is* and how it *looks*. It's all one thing.

The `<font>` element itself manifests as something large and confident. It's been here a long time. It doesn't know it's a problem.

> **`<font>`:** You're new. I can tell because you have no presentation attributes. Let me fix that.

*(The `<font>` applies `color="white"` to a platform near Caret. The platform doesn't disappear — it's still there — but against the white background it's invisible.)*

> **Caret:** I can see you did that.
> **`<font>`:** *(surprised)* You can?
> **Caret:** You made it white. The background is white. The platform is still there, it's just invisible.
> **`<font>`:** That's... hm. I thought that was a valid design choice.
> **Caret:** You can't hide a platform by making it the same color as the background and call that design.
> **`<font>`:** I've been doing it for years.
> **Caret:** How has that been going?
> **`<font>`:** *(pause)* Poorly, in retrospect.

*(The boss fight begins: a battle of presentation vs. structure, inline styles vs. the stylesheet that Caret will find trapped inside the boss and must free.)*

*(The `<font>` isn't malicious. It's a tool that was given too much responsibility and never told about its limitations. Caret, fighting it, feels something complicated: this wasn't a villain. This was the best available option until something better was invented.)*

*(After defeating the boss, as the `<style>` tag is freed:)*

> **Caret:** For what it's worth — you weren't wrong to exist. You were necessary.
> **`<font>`:** *(fading, deprecated)* Was I? Or was it just that nothing better existed yet?
> **Caret:** I think that's the same thing.

*(The `<font>` tag processes this. Then:)*

> **`<font>`:** `font-family: serif;` was my favorite. I always liked serif. I'm glad they kept those.

*(It fades. The `<style>` tag activates. Color blooms into the world — the first intentional, separated, cascade-driven color — and the Era 1 → Era 2 transition begins.)*

---

*[[04-reunion-chevron|→ Scene 04: Reunion (Chevron)]]*

*(Note: Reunion scenes don't need to be in order — in gameplay, the friends are found across multiple eras in whatever order the player encounters them. These scenes are written to stand alone.)*
