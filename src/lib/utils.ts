import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Type utilities required by shadcn-svelte components
type ElementRef<T extends HTMLElement = HTMLElement> = { ref?: T | null };

export type WithElementRef<
	El extends HTMLElement = HTMLElement,
	Attrs extends HTMLAttributes<El> = HTMLAttributes<El>,
> = Attrs & ElementRef<El>;

export type WithoutChild<T> = Omit<T, 'child'>;
export type WithoutChildren<T> = Omit<T, 'children'>;
export type WithoutChildrenOrChild<T> = Omit<T, 'children' | 'child'>;
