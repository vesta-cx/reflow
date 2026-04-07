import type { ElementBehavior, GameElement } from './types';

/** Map of HTML tag names to their game behaviors */
const TAG_BEHAVIOR_MAP: Record<string, ElementBehavior> = {
	div: 'solid',
	section: 'solid',
	article: 'solid',
	main: 'solid',
	span: 'solid',
	p: 'solid',
	h1: 'solid',
	h2: 'solid',
	h3: 'solid',
	h4: 'solid',
	h5: 'solid',
	h6: 'solid',
	ul: 'solid',
	ol: 'solid',
	li: 'solid',
	dl: 'solid',
	dt: 'solid',
	dd: 'solid',
	figure: 'solid',
	figcaption: 'solid',
	nav: 'moving',
	button: 'bouncy',
	a: 'portal',
	details: 'collapsible',
	aside: 'wall-jump',
	footer: 'death',
	header: 'ceiling',
	mark: 'checkpoint',
	code: 'slippery',
	pre: 'slippery',
	blockquote: 'wind',
	progress: 'growing',
	input: 'typewriter',
	textarea: 'typewriter',
	select: 'elevator',
	'[popover]': 'floating',
	dialog: 'dialog-trap',
	table: 'grid',
	form: 'submit-gate',
};

/** Scan a container for elements marked as game platforms */
export function scanForGameElements(container: HTMLElement): GameElement[] {
	const elements: GameElement[] = [];
	const platformElements = container.querySelectorAll<HTMLElement>('[data-platform]');

	for (const el of platformElements) {
		const tag = el.tagName.toLowerCase();
		const overrideBehavior = el.dataset.behavior as ElementBehavior | undefined;
		const behavior = overrideBehavior ?? TAG_BEHAVIOR_MAP[tag] ?? 'solid';
		const oneWay = el.dataset.oneWay === 'true' || el.hasAttribute('data-one-way');

		const rect = el.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();

		const gameElement: GameElement = {
			el,
			tag,
			behavior,
			bounds: {
				x: rect.left - containerRect.left,
				y: rect.top - containerRect.top,
				width: rect.width,
				height: rect.height,
			},
			oneWay,
			state: {},
			active: true,
		};

		// Initialize behavior-specific state
		switch (behavior) {
			case 'wind':
				gameElement.state.windDirection = el.dataset.windDir === 'left' ? -1 : 1;
				break;
			case 'moving':
				gameElement.state.moveSpeed = parseFloat(el.dataset.moveSpeed ?? '80');
				gameElement.state.moveRange = parseFloat(el.dataset.moveRange ?? '200');
				gameElement.state.startX = gameElement.bounds.x;
				gameElement.state.time = 0;
				gameElement.state.lastOffset = 0;
				break;
			case 'floating':
				gameElement.state.cycle = Math.random() * Math.PI * 2; // random phase
				break;
			case 'collapsible':
				gameElement.state.open = el.hasAttribute('open');
				break;
			case 'growing': {
				const progressEl = el as HTMLProgressElement;
				gameElement.state.value = progressEl.value ?? 0;
				gameElement.state.max = progressEl.max ?? 100;
				break;
			}
			case 'portal':
				gameElement.state.href = (el as HTMLAnchorElement).href || el.dataset.href || '';
				break;
		}

		elements.push(gameElement);
	}

	return elements;
}

/** Get a display label for a game element */
export function getElementLabel(el: HTMLElement): string {
	const tag = el.tagName.toLowerCase();
	const id = el.id ? `#${el.id}` : '';
	const classList = el.className
		? '.' + el.className.split(' ').filter(c => !c.startsWith('game-') && !c.startsWith('data-')).slice(0, 2).join('.')
		: '';
	return `<${tag}${id}${classList}>`;
}

/** Get the DevTools-style color for a tag type */
export function getElementColor(behavior: ElementBehavior): string {
	switch (behavior) {
		case 'solid': return 'var(--color-box-content)';
		case 'bouncy': return 'var(--color-syntax-value)';
		case 'portal': return 'var(--color-syntax-string)';
		case 'collapsible': return 'var(--color-syntax-keyword)';
		case 'wall-jump': return 'var(--color-syntax-attr)';
		case 'death': return 'var(--color-syntax-error)';
		case 'ceiling': return 'var(--color-dom-muted)';
		case 'checkpoint': return 'var(--color-syntax-tag)';
		case 'slippery': return 'var(--color-syntax-string)';
		case 'wind': return 'var(--color-syntax-attr)';
		case 'moving': return 'var(--color-syntax-keyword)';
		case 'floating': return 'var(--color-syntax-comment)';
		case 'dialog-trap': return 'var(--color-syntax-error)';
		case 'growing': return 'var(--color-syntax-value)';
		case 'typewriter': return 'var(--color-syntax-string)';
		case 'elevator': return 'var(--color-syntax-keyword)';
		case 'grid': return 'var(--color-box-padding)';
		case 'submit-gate': return 'var(--color-box-margin)';
		case 'breakable': return 'var(--color-syntax-comment)';
		default: return 'var(--color-dom-border)';
	}
}
