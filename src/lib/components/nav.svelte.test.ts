import { describe, expect, test } from 'vite-plus/test';
import { page } from 'vite-plus/test/browser';
import { render } from 'vitest-browser-svelte';
import Nav from './nav.svelte';

describe('Nav', () => {
	test('renders all page links', async () => {
		await page.viewport(1024, 768);
		await render(Nav);

		for (const name of [
			'Characters from Password',
			'About',
			'Masked passwords',
			'How it works',
		]) {
			await expect
				.element(page.getByRole('link', { name }))
				.toBeVisible();
		}
	});

	test('has a theme toggle', async () => {
		await render(Nav);
		await expect
			.element(page.getByRole('button', { name: 'Toggle theme' }))
			.toBeInTheDocument();
	});
});
