import { describe, expect, test } from 'vite-plus/test';
import { page } from 'vite-plus/test/browser';
import { mode } from 'mode-watcher';
import { render } from 'vitest-browser-svelte';
import ModeToggle from './mode-toggle.svelte';

describe('ModeToggle', () => {
	test('switches to dark and back to light', async () => {
		await render(ModeToggle);
		const toggle = page.getByRole('button', { name: 'Toggle theme' });

		await toggle.click();
		await page.getByRole('menuitem', { name: 'Dark' }).click();
		await expect.poll(() => mode.current).toBe('dark');

		await toggle.click();
		await page.getByRole('menuitem', { name: 'Light' }).click();
		await expect.poll(() => mode.current).toBe('light');
	});
});
