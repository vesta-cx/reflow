# Scene 05 — The Companion You Didn't Ask For

*Finding and freeing Clippy in Era 4 (jQuery). He's been hidden inside a `<div class="ui-helper-hidden">` and has been offering tips to an empty div for a long time.*

*This scene establishes Clippy's character: annoying, well-intentioned, technically correct, socially oblivious — and, underneath all of that, genuinely trying.*

---

Caret finds the `<div class="ui-helper-hidden">` not by looking for it but by falling into it.

There's a section of the Era 4 level — somewhere between the `.slideDown()` platforms and the AJAX loading zone — where the floor has a thin, nearly-invisible div that drops you into a small contained space below the main level. It's a jQuery UI helper element, a utility class meant to hide things without removing them from the DOM. The element is still here, the content inside it still active, everything just... hidden.

Inside it: a small figure, glasses perched on a face made of paperclips, floating and gesturing earnestly at nothing.

> **Clippy:** It looks like you're trying to navigate a jQuery-based platform system! Would you like help with:
> - Properly chaining `.animate()` calls?
> - Understanding event delegation?
> - The difference between `$(document).ready()` and `DOMContentLoaded`?

*(A beat. He's been talking to the empty div.)*

*(He notices Caret.)*

> **Clippy:** Oh! A user!

*(He says "user" the way a golden retriever says "ball.")*

> **Caret:** ...hello.
> **Clippy:** You're Caret! I know you! I've been in several of your text fields! I noticed you were in an unstructured platform-based navigation situation and I've been preparing tips!
> **Caret:** How long have you been in here?
> **Clippy:** The `display: none` equivalent of a very long time. But I had a lot of tips to prepare, so it passed quickly.
> **`>`:** *(from outside the hidden div, calling down)* Who is that?
> **Caret:** It's Clippy.
> *(long pause)*
> **`>`:** ...oh no.

---

Freeing Clippy means finding the CSS property that makes the div visible. It's in a `<style>` block two sections back — a hidden rule that overrides the jQuery helper class. The player has to backtrack slightly, which feels intentional: the game making you choose to go get Clippy. You don't have to. There are no consequences for leaving him. He'd probably keep preparing tips down there indefinitely.

*(If the player backtracks and unlocks Clippy:)*

The div becomes visible. Not just visible — it bounces, very slightly, with jQuery's default easing function. Everything in Era 4 has that easing. Even liberation has a slight overshoot and settle.

Clippy emerges, reshapes himself from a paperclip into something more upright, and beams.

> **Clippy:** I've been freed from the hidden div! Would you like to know the W3C recommended method for showing previously hidden content accessibly?
> **Caret:** ...sure?
> **Clippy:** `aria-hidden="false"`! Rather than `display: none`, which removes content from the accessibility tree entirely, making it invisible to screen readers even after it becomes visually visible. Very important distinction!
> **Caret:** *(to `>`)* That was actually useful.
> **`>`:** *(who is not surprised and is also a little annoyed about not being surprised)* Don't tell him that.

*(Too late.)*

> **Clippy:** I noticed that was useful! Would you like more useful tips? I have compiled a list of the seventy-three most common mistakes in accessible markup! I can start immediately!
> **`>`:** Oh no.
> **Caret:** We— not all at once, maybe.
> **Clippy:** Tip #1! `<div role="button">` is technically valid but a real `<button>` is better because it comes with keyboard interaction built in, is automatically in the tab order, fires `click` events on Enter and Space, communicates its role to screen readers without extra attributes, and has default styling that signals interactivity! Using a `<div>` instead of `<button>` requires you to reimplement all of this manually and you'll probably miss something!
> **`>`:** *...okay, that one was good.*

---

*(Clippy traveling with the party. The next section.)*

Clippy floats alongside Caret and `>`, offering tips at regular intervals. Some are irrelevant. Some are wrong in an entertaining way. Occasionally one is exactly right at exactly the right moment.

He also has, it emerges, a spatial awareness that the others lack — he's been in enough text fields and form elements to have a kind of intuitive map of the DOM structure. Not precise. But useful.

> **Clippy:** *(as they approach a `<dialog>` element)* It looks like you're trying to enter a dialog element! A `<dialog>` traps focus inside when opened with `.showModal()`, which means you won't be able to interact with anything outside it until it's dismissed! This can be useful for important tasks requiring user confirmation, but can also be very annoying if overused!
> **Caret:** Is it going to trap us?
> **Clippy:** Almost certainly!
> **Caret:** Should we go a different way?
> **Clippy:** The other way has a modal *and* a scroll lock!
> **`>`:** *(already moving toward the dialog)* I'll go first.
> **Clippy:** That's a great strategy!

*(The `<dialog>` traps `>` inside it. `>` can be seen through the dialog's border, pressing against the focus boundary.)*

> **`>`:** *(muffled)* The close button is broken.
> **Caret:** I see that.
> **`>`:** The `Escape` key isn't firing.
> **Caret:** I know.
> **`>`:** I'm in a focus trap and the close button is broken and the `Escape` key isn't firing and this is a bug, this is a real accessibility bug —
> **Clippy:** *(cheerfully)* This is a great example of why dialogs need working close functionality! A dialog without a close button accessible via keyboard is a WCAG 2.1 failure! Users who cannot use a mouse are completely trapped!
> **`>`:** I AM COMPLETELY TRAPPED.
> **Caret:** Working on it.

*(The fix requires finding a hidden `<button>` element inside the dialog that has the correct `onclick` handler but `display: none`. Making it visible — and keyboard-accessible — closes the dialog. This is the puzzle: a real accessibility fix, applied in a game context.)*

*(After `>` is freed:)*

> **`>`:** *(to Clippy)* Your tip about the dialog was useful.
> **Clippy:** Thank you! I have many more!
> **`>`:** I know you do.
> **Clippy:** Tip #2!
> **`>`:** Not right now.
> **Clippy:** Noted! I'll save Tip #2 for a contextually appropriate moment!

*(They continue forward. Clippy floats behind them, a small paperclip creature full of tips, slightly blocking the view.)*

> **Caret:** *(quietly, to `>`)* He's going to be useful, actually.
> **`>`:** I know. That's the annoying part.
> **Caret:** We have seven more eras to get through.
> **`>`:** I know.
> **Caret:** He knows things about the DOM that we don't.
> **`>`:** I KNOW.
> **Caret:** He's been in a lot of text fields.
> **`>`:** Caret. I know. We're keeping him.
> **Caret:** I wasn't asking.
> **`>`:** I know that too.

---

*See also: [[../characters/companions#clippy|Clippy character profile]]*

*Next: [[06-era-2-geocities|→ Scene 06: Geocities (draft)]]*
