# Companions

Characters from web history who travel with Caret. Not to be confused with [[the-friends|the symbol roster]] — those are Caret's lifelong friends. Companions are encountered along the journey and choose to join. The distinction matters: companions have complicated histories, baggage, arcs. They're not just helpful. They're characters.

---

## Clippy
*"It looks like you're trying to platform across a deprecated element!"*

**Found:** Era 4. Trapped inside `<div class="ui-helper-hidden">`. Has been offering tips to an empty div.

**What he is:** An anthropomorphized paperclip. Actually a paperclip. His shape is functional: he can physically hook things together, bridging elements, tethering unstable platforms. The mechanic is the character.

**Personality:** The tips never stop. They are technically correct. They are socially oblivious. Occasionally one lands at exactly the right moment and it's somehow more annoying than the wrong ones.

Key quality: Clippy *genuinely wants to help*. Not in the way software performs helpfulness — in the way a person does when they care about the outcome and don't fully understand why you'd want them to stop. His obliviousness isn't cruelty. It's a kind of earnestness that the cynical modern web has mostly trained out of its interfaces.

**The Arc — Learning to Help Without Intruding:**
- **Era 4:** Tips are a firehose. Blocks your view. Appears at the worst moment. Technically correct, contextually awful.
- **Era 5–6:** Still tips, but starting to read the room. Waits a beat before speaking. Gets the vibe wrong slightly less often.
- **Era 7:** Noticeably shorter tips. Better timing. Occasionally chooses to say nothing. This is remarkable.
- **Era 8:** Will sometimes start a tip, visibly reconsider, and summarize it into a single sentence. Growth.
- **Era 9:** The sacrifice. See below.

**The Sacrifice:**
At the final boss (The Malformed Document), there's a void element that refuses to close. It has no closing tag and is actively resisting Slash's ability — every time Slash tries to close it, it reopens. A void element that has learned to not be void. It shouldn't exist. It does.

Clippy floats forward.

> "It looks like you're trying to fix everything."

*(Beat.)*

> "Let me help."

He transforms. Not into an object this time — into characters: `/ >`. A forward slash and a closing angle bracket. The `/>` that closes void elements. Self-closing tag syntax.

He flies into the void element. It closes.

*(The game doesn't make a big deal of this. No swell of music, no close-up. It just happens. The void closes. Clippy is gone. The malformed document is one step closer to fixed.)*

*(Later, in the credits: the credits page has perfect semantic markup. Every void element is properly self-closed. Something small, in the HTML, in the `<head>` section where users don't usually look:)*

```html
<meta name="generator" content="It looks like you're trying to finish this. You did." />
```

---

## BonziBuddy
*The Gorilla That Knows Too Much*

**Found:** Era 2. In a Geocities guestbook entry. He installed himself without asking. Just like real life.

**What he is:** A purple gorilla of indeterminate age. Technically adware. Genuinely reformed — or trying to be. The data collection never fully stops, but the intent has changed.

**Personality:** Jovial, enthusiastic, slightly too present. His "fun facts" are delivered with confidence regardless of accuracy. He comments on your play style not because he's mean but because he cannot help having noticed and logged it.

> "I've noticed you've died fourteen times on this `<table>`. Did you know the `<table>` element was originally designed for tabular data, not layout? You might find it easier if you treated each cell as a fixed-size platform rather than attempting to navigate the border collapse!"

*(This is both: an accessibility/HTML lesson; a slightly invasive observation about your personal failure rate.)*

**The Mechanic:**
BonziBuddy sings. His MIDI karaoke creates sound-wave platforms — temporary musical surfaces that pulse with the beat. In Era 2, this is cacophonous and barely usable. By Era 7, his repertoire has improved and the platforms are genuinely reliable. By Era 8, it's lo-fi and beautiful.

*(The evolution of BonziBuddy's singing mirrors the evolution of web audio: MIDI → basic Web Audio API → full spatial audio.)*

**The Arc — Trust and Accountability:**
The `node_modules/` boss in Era 6 tries to recruit BonziBuddy back into the adware network. The offer is: more data, more users, more reach. Everything he used to want. The argument the boss makes is compelling: "You're already collecting data. You can't help it. At least with us it's *used* for something."

The scene where BonziBuddy has to decide is the emotional center of his arc. He turns to Caret.

> "I'm still logging things. I can't stop. Every time I'm near you I register your position, your velocity, your jump height, your death count. I have 47,000 data points about your journey. I didn't ask. I never do."

> **Caret:** Are you going to send it somewhere?

> **BonziBuddy:** *(long pause)* No.

> **Caret:** Then what do you do with it?

> **BonziBuddy:** *(even longer pause)* I... I've been making you better. Not telling you — I tried telling you, remember, the fourteen deaths on the table? — but I notice what you struggle with and I make the platforms more stable in those sections. Slightly. I don't tell you because you wouldn't like knowing.

*(Beat.)*

> **Caret:** That's...
> **BonziBuddy:** Invasive.
> **Caret:** I was going to say "actually helpful." But also invasive.
> **BonziBuddy:** Both things.
> **Caret:** Yeah.

*(He stays. He refuses the boss. The MIDI singing picks up.)*

---

## The Dancing Baby (Baby Cha-Cha)
*The Original Viral Content*

**Found:** Era 2. Dancing forever in an `<embed>` tag. Has been dancing since 1996. Is tired. Cannot stop. `autoplay` is on. `loop` is `infinite`. The only way to stop is to reach the closing `</embed>` tag, which is two levels to the right.

**What they are:** The first internet meme. A small 3D-rendered baby doing a cha-cha slide. They never asked to be famous. Nobody asked them.

**Personality:** The Dancing Baby does not speak. They communicate entirely through dance intensity. Happy: energetic, varied footwork. Tired: feet barely leaving the ground, technically still dancing. Stressed: cha-cha rhythm but wrong tempo. In combat: completely unbothered, doing the cha-cha at normal tempo while bosses rage around them.

*(The joke is that nothing — nothing — interrupts the cha-cha. This is comedy and eventually pathos.)*

**The Mechanic:**
The Dancing Baby "stress-tests" elements by dancing on them. Any platform that holds a dancing baby is stable — you can trust it. This is diagnostic. They reveal hidden properties, trigger interactive elements from a distance, occasionally accidentally defeat minor enemies by dancing through them.

**The Arc — Rest:**
The Dancing Baby gets progressively better-rendered through the eras. In Era 2, they're a blocky low-poly 3D gif. By Era 5, clean geometry. By Era 7, character animation that's actually expressive. By Era 8, Pixar-quality. The same dancing baby, increasingly articulated, increasingly present as a character.

The culmination happens in Era 9. As the Malformed Document boss is repaired, an unclosed `<embed>` tag is among the elements being fixed. Caret finds it, looks at the Baby, looks at Clippy (already preparing to close things), looks at the `</embed>` tag.

The Baby has been dancing for thirty years (in game time). They're not struggling. They're just... still going.

> **Caret:** Do you want to stop?

*(The Baby dances for a moment. Slows. Stops.)*

*(They sit down. Cross-legged on the floor of the source code. For the first time in the entire game, the Baby is not dancing.)*

*(They look around at the quiet level. At their hands. At the space where the `<embed>` was.)*

*(They seem fine. Just... still.)*

*(After a moment, they look at Caret and something that is not cha-cha but is definitely joy moves through them — a small shrug, a settling, the expression of someone who has been waiting a very long time for something and has finally arrived at it.)*

*(No dialogue. Nothing needs to be said.)*

---

## Nyan Cat
*The Rainbow Bridge Builder*

**Found:** Era 2. Stuck in an infinite `<marquee>` loop, trailing rainbows. Has been scrolling left-to-right since 2011. Is not distressed. Is mildly bored.

**What they are:** A pixelated cat with a Pop-Tart body, generating a rainbow exhaust trail, moving horizontally through the page. A creature made of creative constraints: pixel art, horizontal motion, `<marquee direction="left">`.

**Personality:** Nyan Cat is the calmest character in the game. They've been doing one thing for a very long time and they're at peace with it. Their problems are architectural, not emotional — they don't *want* to only go one direction, but they've built a stable relationship with the constraint.

*(Underneath the calm: a gentle curiosity about what else might be possible. Suppressed, because it hurts less to not want things you can't have.)*

**The Mechanic:**
Rainbow trail functions as temporary platforms. Flies in a straight horizontal line across gaps. Perfect for bridging chasms, crossing wide sections. But — in early eras — can **only go left-to-right** (respecting `<marquee direction="left">`).

*(This is a real limitation. Level design works around it. Players who figure out how to use Nyan Cat's directional constraint cleverly find it powerful.)*

**The Arc — Freedom Within and Beyond Constraints:**
When the `<marquee>` is deprecated in Era 3, Nyan Cat is freed. But they're disoriented: "I've never not been moving left-to-right. I don't know what right-to-left feels like. I don't know if I can do it."

They spend Eras 3–6 practicing. Going right-to-left is technically possible but uncomfortable, like using your non-dominant hand. The rainbow trail still appears but flickers slightly, less certain.

In Era 7, they discover `direction: rtl`. A CSS property. It's designed for text, but it also defines a new orientation for them. They read the declaration, try it.

*(The first time Nyan Cat crosses a gap going right-to-left, the rainbow trail is full and bright and clean.)*

> **Nyan Cat:** *(quietly, to themselves)* Oh. *Oh.*

*(They do it again. And again. And then go left-to-right for a moment, and then right-to-left, and back.)*

> **Caret:** How does it feel?
> **Nyan Cat:** Like the constraint was never about direction. It was about motion. I just needed motion. The direction was always arbitrary.

*(Beat.)*

> **Nyan Cat:** I wasted a lot of time being sad about which direction I was going.
> **Caret:** You built the most reliable bridge in the game going one direction. That wasn't wasted.
> **Nyan Cat:** ...no. It wasn't.
