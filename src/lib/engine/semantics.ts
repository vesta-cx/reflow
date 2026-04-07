/**
 * Educational mapping: HTML semantics → game mechanics
 * Each element's game behavior is a metaphor for its real HTML/a11y purpose.
 */

export interface SemanticLesson {
	tag: string;
	gameBehavior: string;
	htmlPurpose: string;
	a11yRole: string;
	whyItMaps: string;
	tip: string;
}

export const SEMANTIC_LESSONS: Record<string, SemanticLesson> = {
	nav: {
		tag: '<nav>',
		gameBehavior: 'Moving platform',
		htmlPurpose: 'Contains navigation links between pages or sections',
		a11yRole: 'navigation',
		whyItMaps: 'Nav elements move you between places — in HTML and in the game. They\'re always in motion because navigation is about going somewhere.',
		tip: 'Screen readers announce <nav> as a navigation landmark. Users can jump directly to it.',
	},
	aside: {
		tag: '<aside>',
		gameBehavior: 'Wall-jump surface',
		htmlPurpose: 'Content tangentially related to the main content',
		a11yRole: 'complementary',
		whyItMaps: 'Asides are literally on the side — they support your journey without being the main path. Wall-jumping off them is using them as a boost, not a destination.',
		tip: 'Use <aside> for sidebars, pull quotes, or related links. It\'s complementary, not primary.',
	},
	button: {
		tag: '<button>',
		gameBehavior: 'Bouncy / interactive',
		htmlPurpose: 'Triggers an action when activated',
		a11yRole: 'button',
		whyItMaps: 'Buttons trigger things. In the game, landing on them triggers a bounce — a physical response to activation. They\'re the most interactive element.',
		tip: 'Never use <div onclick>. Real <button> elements are keyboard-focusable, announced by screen readers, and work with Enter/Space.',
	},
	a: {
		tag: '<a>',
		gameBehavior: 'Portal to another room',
		htmlPurpose: 'Hyperlink to another page or resource',
		a11yRole: 'link',
		whyItMaps: 'Links are portals. They transport you to an entirely different page. In the game, stepping into a link takes you to a new room — just like clicking takes you to a new URL.',
		tip: 'Links navigate. Buttons act. If it goes somewhere, use <a>. If it does something, use <button>.',
	},
	header: {
		tag: '<header>',
		gameBehavior: 'Ceiling / top boundary',
		htmlPurpose: 'Introductory content or navigational aids for its parent',
		a11yRole: 'banner (when top-level)',
		whyItMaps: 'Headers are always at the top. In the game, they\'re the ceiling — the upper boundary of each section. You can\'t go above the header.',
		tip: 'A page-level <header> gets role="banner". Section headers are just grouping.',
	},
	footer: {
		tag: '<footer>',
		gameBehavior: 'Death zone',
		htmlPurpose: 'Footer for its nearest sectioning content or root',
		a11yRole: 'contentinfo (when top-level)',
		whyItMaps: 'Footers are the bottom. Fall past all the content and you hit the footer. In the game, falling to the footer means you\'ve fallen off the page — game over.',
		tip: 'Footer doesn\'t mean "bottom of page". It means "meta info about the section" — author, copyright, related links.',
	},
	details: {
		tag: '<details>',
		gameBehavior: 'Collapsible platform',
		htmlPurpose: 'Disclosure widget that shows/hides content',
		a11yRole: 'group',
		whyItMaps: 'Details collapse and expand. The platform beneath you can literally disappear. This teaches that <details> content is conditionally visible — and you need to account for both states.',
		tip: '<details> is the only native HTML disclosure. No JS needed. It works with keyboard and screen readers out of the box.',
	},
	dialog: {
		tag: '<dialog>',
		gameBehavior: 'Boss room / trap',
		htmlPurpose: 'Modal or non-modal dialog box',
		a11yRole: 'dialog',
		whyItMaps: 'Modal dialogs trap focus — you can\'t interact with anything behind them until dismissed. In the game, a dialog literally traps you inside until you defeat/close it.',
		tip: 'Use .showModal() for modal dialogs. Focus is trapped automatically. ESC closes. The backdrop blocks interaction.',
	},
	mark: {
		tag: '<mark>',
		gameBehavior: 'Checkpoint',
		htmlPurpose: 'Highlighted text for reference or notation',
		a11yRole: 'none (highlighted text)',
		whyItMaps: 'Mark highlights something important. In the game, it marks your progress — a highlighted save point. Just like how <mark> draws your eye to key text.',
		tip: '<mark> is for relevance, not decoration. Use it to highlight search results or key passages.',
	},
	code: {
		tag: '<code> / <pre>',
		gameBehavior: 'Slippery (ice) platform',
		htmlPurpose: 'Inline or block computer code',
		a11yRole: 'code',
		whyItMaps: 'Code is precise and unforgiving. One wrong character and everything breaks. In the game, code platforms are slippery — hard to control, requiring precision.',
		tip: 'Use <code> for inline code, <pre><code> for blocks. Screen readers may announce "code" to indicate formatting.',
	},
	blockquote: {
		tag: '<blockquote>',
		gameBehavior: 'Wind zone (pushes player)',
		htmlPurpose: 'A section quoted from another source',
		a11yRole: 'blockquote',
		whyItMaps: 'Blockquotes carry someone else\'s words — their voice pushes through the content. In the game, this manifests as wind that pushes you, like being carried by someone else\'s momentum.',
		tip: 'Blockquote is for quotations, not indentation. Use CSS for visual indentation instead.',
	},
	section: {
		tag: '<section>',
		gameBehavior: 'Large solid platform',
		htmlPurpose: 'Generic standalone section of a document',
		a11yRole: 'region (when labeled)',
		whyItMaps: 'Sections are the big structural blocks of a page. In the game, they\'re the largest platforms — the ground you stand on.',
		tip: 'Give <section> an accessible name (aria-label or heading) to make it a landmark.',
	},
	main: {
		tag: '<main>',
		gameBehavior: 'Solid ground',
		htmlPurpose: 'The dominant content of the document',
		a11yRole: 'main',
		whyItMaps: 'Main is the core content area. It\'s where the action happens. In the game, it\'s solid ground — the playable area.',
		tip: 'Only one <main> per page. Screen reader users can skip directly to it.',
	},
	table: {
		tag: '<table>',
		gameBehavior: 'Grid puzzle room',
		htmlPurpose: 'Tabular data arranged in rows and columns',
		a11yRole: 'table',
		whyItMaps: 'Tables are grids with structure. Each cell has a row and column. In the game, table areas are grid-based puzzles where position within the grid matters.',
		tip: 'Never use tables for layout. Only for data. Add <caption> and use <th scope> for accessibility.',
	},
	form: {
		tag: '<form>',
		gameBehavior: 'Submit gate (unlock to pass)',
		htmlPurpose: 'Interactive controls for submitting information',
		a11yRole: 'form',
		whyItMaps: 'Forms gate content behind submission. You must fill them out to proceed. In the game, forms are literal gates — submit to unlock the path forward.',
		tip: 'Every form needs a submit button. Use <label> for inputs. Group related fields with <fieldset>.',
	},
	input: {
		tag: '<input>',
		gameBehavior: 'Typewriter (type to extend)',
		htmlPurpose: 'Interactive control for data entry',
		a11yRole: 'textbox (type=text)',
		whyItMaps: 'Inputs grow as you type — the content expands. In the game, typing in an input physically extends the platform, creating new ground.',
		tip: 'Every <input> needs a <label>. Use the right type (email, tel, number) for better mobile keyboards.',
	},
	select: {
		tag: '<select>',
		gameBehavior: 'Elevator (choose floor)',
		htmlPurpose: 'Control for selecting from options',
		a11yRole: 'listbox',
		whyItMaps: 'Select elements let you choose between options. In the game, each option is a floor — selecting changes your vertical position.',
		tip: 'Use <select> for 4+ options. For fewer, use radio buttons. <optgroup> adds structure.',
	},
	progress: {
		tag: '<progress>',
		gameBehavior: 'Growing platform',
		htmlPurpose: 'Displays completion progress of a task',
		a11yRole: 'progressbar',
		whyItMaps: 'Progress bars grow as tasks complete. In the game, the platform literally grows as you collect items or advance — you can watch the world expand.',
		tip: '<progress> is self-announcing to screen readers. Set max and value attributes.',
	},
};

/** Get the educational lesson for a tag, if one exists */
export function getLesson(tag: string): SemanticLesson | undefined {
	return SEMANTIC_LESSONS[tag.toLowerCase()];
}

/** Get a short one-liner about why this element behaves the way it does */
export function getQuickTip(tag: string): string {
	const lesson = SEMANTIC_LESSONS[tag.toLowerCase()];
	if (!lesson) return `<${tag}> — solid platform`;
	return `${lesson.tag} → ${lesson.gameBehavior} — ${lesson.htmlPurpose}`;
}
