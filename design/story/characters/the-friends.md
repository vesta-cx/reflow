# The Friends — The Symbol Roster

Caret's core friend group. Web-native glyphs who live on the same page, scattered by the rift. Each one is lost somewhere in the eras — reuniting with them is the emotional backbone of the journey.

They're not abstract power-ups. They're *people*. Each one has been shaped by their nature as a web symbol — their personality IS their semantic function. Understanding the character means understanding what they represent on the web, and vice versa.

In [[../../mechanics/multiplayer|multiplayer]], each is a playable character. In solo campaign, they're the people you're fighting to get back to.

---

## `>` — Chevron, *The Pathfinder*

**Where they're lost:** Era 2 (Geocities). Trapped in a web ring, looping through the same chain of pages forever, always pointing forward, never arriving anywhere.

**Personality:** The most optimistic person you've ever met. Not naively — they've seen enough to know things go wrong. But their default assumption is that going forward is better than stopping. Every obstacle is temporary. Every gap can be crossed. The web gets better. They've always believed this.

The problem is they *really* struggle to go backwards. Not physically (though they're slower going left). Emotionally. Revisiting old eras to find missed secrets? Painful. Admitting they took the wrong path? Almost impossible. They point forward even when forward is the wrong direction.

**Dynamic with Caret:** The friendship that defines the game. Caret blinks in place. Chevron never stops moving. Together they're balanced — Caret gives direction, Chevron gives momentum. When they're separated, Caret feels stationary in a way that has nothing to do with physics.

**Key scene:** When you find Chevron in the web ring, they've been going around the same loop for a long time. They're not distressed — they're bored, which is worse. "I've been past that `<marquee>` eleven thousand times. I counted. I started naming them. The seventeenth one is Steve." When you free them, they don't immediately run forward. They stop. Look back at the web ring. "I could have found the exit myself." Beat. "I just couldn't make myself turn around." They laugh it off. But you notice.

**Mechanic:** Directional dash. `>>>` chain for triple speed. Can create CSS child selector paths through nested DOM — Chevron finds the shortest path between parent and child automatically.

**Tradeoff:** Fast rightward, sluggish left. In race modes, a skilled Chevron player builds maps that never require backtracking.

---

## `☰` — Hamburger, *The Architect*

**Where they're lost:** Era 5 (Responsive Revolution). Got collapsed by a `@media (max-width: 768px)` query and the viewport never widened back. Has been folded shut in a `<nav>` ever since, containing multitudes that nobody can see.

**Personality:** The quietest of the group. Speaks rarely but precisely. When they open up — literally, expanding into full nav menu form — everyone stops and listens, because it's usually important.

There's something almost zen about Hamburger. They've learned to be comfortable with the fact that most people will never look past the three lines. The complexity inside is theirs, not for display. This has made them deeply patient and occasionally frustrating.

**Secret:** Hamburger has opinions. *Strong* opinions. About information architecture, about navigation patterns, about the right number of items in a menu. They just don't share them unless you ask. If you ask, prepare to sit down.

**Key scene:** When you find Hamburger in Era 5, they've been collapsed for so long that opening up feels strange. They expand slowly, carefully, like stretching muscles that haven't been used. The nav menu inside them reveals a map of the entire game — all the levels, all the paths, everything. They've been holding this whole time. "I had a lot of time to think." They pause. "Did you know there are seventeen ways to structure a navigation menu? Twelve of them are wrong. I know which ones."

**Mechanic:** Expand to create platforms (vertical stack of nav items). Collapse to squeeze through narrow gaps. Expanded form has massive hitbox, slow movement — but the platforms they create persist for teammates.

**Tradeoff:** Powerful but vulnerable when open. Choosing *when* to open is the whole skill.

---

## `#` — Hash, *The Anchor*

**Where they're lost:** Era 3 (CSS Zen Garden). All the `id` attributes they anchored to are getting changed by the IE6 box model chaos — every element they tether to shifts position unexpectedly, leaving Hash teleporting into walls. Running on pure muscle memory through a world that keeps changing beneath them.

**Personality:** Talks fast. Knows everyone, everything, and exactly where it is. Has a mental map of every `id` on every page they've ever visited. The networker of the group — not in a networking way, in a *genuine* curiosity about connections between things way.

Also a gossip. Affectionately. They don't spread rumors maliciously — they just *love* when two things are unexpectedly connected. "Oh, did you know `#footer` used to be a `<div id='bottom'>`? And before *that* it was `<a name='end'>`? The naming conventions of 2003 were *wild*."

**Key scene:** You find Hash in the middle of a teleportation sequence, bouncing between anchors that won't hold still. They're not panicking — they're annoyed. "Someone keeps changing the `id` attributes. Every time I anchor to something, it's not there when I arrive. It's like trying to have a conversation with someone who keeps renaming themselves." They look at you. "Oh. You're Caret. I anchored to your page like three hundred times. Nice to finally meet the person."

**Mechanic:** Teleport to any element with an `id`. Can place `#fragment` anchors on unmarked elements. In multiplayer, can grab and teleport teammates to anchored locations.

**Tradeoff:** Setup-dependent. Useless on fresh, unanchored territory. Peak performance after exploration.

---

## `/` — Slash, *The Closer*

**Where they're lost:** Era 1 (The Document). Trying desperately to close an unclosed `<p>` tag that has been open since 1993. The paragraph has grown to encompass most of the level. Everything is technically inside it.

**Personality:** The most impatient member of the group. Slash has *one job* — closing things — and they're very good at it and very aware that most things don't get closed properly. This creates a low-grade constant frustration with the state of the world.

They're not mean about it. They're just... done. "Just close the tag. Why is this hard. *Close the tag.*"

Underneath the impatience is a deep anxiety about void elements. `<br>`, `<hr>`, `<img>`, `<input>` — they don't need a closing tag. Slash finds this existentially unsettling. "What do they *do* with all that open-ness? Don't they feel drafty?"

**Key scene:** You find Slash in Era 1 surrounded by unclosed tags of every variety. They're not panicking — they're categorically working through them. Slash sees you, does a double take, closes three more tags while they're turning around. "Oh good, you can help. This `<p>` has been open for thirty-one years. The content inside it is the entire modern web. Technically everything that exists is a paragraph. That's not okay." They hand you a list. The list is very long.

After you help close the tag: a moment of genuine peace. Slash stares at the closed element. "There." Long pause. "It's just... closed. Like it should be." Their voice cracks slightly. "Sorry. I need a moment."

**Mechanic:** Close/destroy any open element. Can seal gaps, remove platforms, end boss animations early. The most destructive ability in the game.

**Tradeoff:** Purely destructive. Cannot create. Friendly fire is a real risk — closing a platform someone is standing on works exactly as you'd expect.

---

## `&` — Ampersand, *The Shapeshifter*

**Where they're lost:** Era 2 (Geocities). Got caught in an entity encoding loop — `&amp;amp;amp;amp;` — trying to represent itself and encoding itself recursively instead. Is currently expressing itself as approximately four hundred nested representations of the character `&`.

**Personality:** The most dramatic person in any room. Every moment is an entrance. Every observation is a *statement*. Considers itself — correctly — one of the most beautiful glyphs in typography, and has the aesthetic sensibility to match.

Speaks in HTML entities when emotional. Happy: `&hearts;`. Surprised: `&excl;`. Enthusiastic: `&amp;amp;amp;amp;` (the gesture, not the encoding loop). Has strong opinions about fonts — specifically which ones render `&` correctly. (The answer is "Caslon and Garamond, and barely anything else.")

Underneath the drama: genuinely transformative. The shapeshifting isn't performance. It's who they are. Being `&hearts;` isn't a costume, it's a state of being. They can fully inhabit any entity they become. This is beautiful and slightly destabilizing if you think about it too long.

**Key scene:** When you break the encoding loop, Ampersand emerges one layer at a time. Each `amp;` that resolves is them shedding a false layer. The final emergence is genuinely dramatic and they know it and lean into it completely. "I have been `&amp;amp;amp;amp;` for too long," they say, shaking off the last escape sequence. They look at their hands. Transform briefly into `&hearts;`, `&mdash;`, `&#9733;`, back to `&`. "Better. I'm better. Tell no one that took as long as it did."

**Mechanic:** Transform into any HTML entity for 5 seconds. `&hearts;` — floating heart platform. `&mdash;` — long horizontal bridge. `&larr;` — directional push. `&#9733;` — projectile. Each form has unique physics.

**Tradeoff:** Nothing lasts. The skill is chaining forms before each expires.

---

## `*` — Asterisk, *The Wildcard*

**Where they're lost:** Era 3 (CSS Zen Garden). Applied the CSS reset `* { margin: 0; padding: 0; }` and accidentally reset their own sense of self along with everything else. Is currently wandering with no particular identity, selecting everything in range and declaring it important.

**Personality:** Hyperactive. Genuinely enthusiastic about everything. Cannot prioritize. Has the energy of someone who just discovered that they can SELECT EVERYTHING and hasn't yet learned why you wouldn't want to.

Not reckless — just optimistic about what "selecting everything" can accomplish. Each time it causes friendly fire or unintended consequences, Asterisk is genuinely surprised and apologetic. "Oh no, did I — I made the platform slippery for you too? I'm so sorry. I was trying to make it slippery for the enemies. I selected *everything*. I see the problem now."

The thing is: they learn. Slowly. By Era 7, Asterisk has developed real precision through hard-won experience. They still select everything sometimes. But now they at least *think* about whether they should.

**Key scene:** Finding Asterisk means finding a level where everything is affected simultaneously — all platforms bouncy, all enemies and players on the same physics. Asterisk is at the center of this chaos, delighted. "It's a feature! Everyone bounces at the same rate! There's no advantage! It's *equal*!" You point out that "equal" means "equally unplayable." Long pause. "I need to narrow my selector."

**Mechanic:** Area-of-effect abilities. Apply temporary properties to all nearby elements simultaneously. Powerful zone control.

**Tradeoff:** Affects allies. Affects needed platforms. Affects yourself. No exceptions.

---

## `;` — Semicolon, *The Quiet One*

**Where they're lost:** Era 3 (CSS Zen Garden). A developer forgot to type them at the end of a `color` property. The declaration was never applied. Semicolon has been sitting at the end of an unfinished `color: blue` statement, unable to close it, watching the world render wrong without knowing why.

**Personality:** Soft-spoken. Careful. The first to notice when something is off — a slight desynchronization, a property that should be applying but isn't — and the last to say anything about it, because they've been overlooked enough times that speaking up feels presumptuous.

Running gag: Semicolon wanders off, usually distracted by something tiny and interesting (an orphaned comment, a misplaced declaration, a property name that doesn't mean what someone thought it meant), and things start breaking. Nobody connects it immediately. Then:

> "Wait where's Semicolon?"
>
> *(Asterisk's AOE range drops to 60%. Chevron's speed boost stops working. Hamburger's platforms collapse slightly faster.)*
>
> "SEMICOLON."

They're always within earshot. Always gently apologetic. Always have a reason they wandered off that is, when you hear it, completely understandable.

**Key scene:** You find Semicolon exactly where they were forgotten — at the end of an incomplete line of CSS, patient. They don't seem distressed. They've been watching the stylesheet fail to apply for a long time. "It's fine. Color isn't critical. The page still works without blue. It's just... not what the developer intended." Beat. "I think about intention a lot, when I'm waiting. Whether it matters that someone *meant* something if the meaning never came through." They look at you. "Does it matter? That they meant to put me there?" You close the declaration. The element turns blue. Semicolon watches it happen. "...Yes. I think it does."

**Mechanic:** Passive aura — all nearby allies get +40% effectiveness on their abilities. Active use: "complete" an unfinished CSS declaration on any nearby element, applying the intended property.

**Tradeoff:** Almost no solo capability. Slow, low jump, fragile. Entirely dependent on proximity to allies.
