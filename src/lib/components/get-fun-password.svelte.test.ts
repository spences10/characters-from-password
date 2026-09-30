import { describe, expect, test } from 'vite-plus/test';
import { page } from 'vite-plus/test/browser';
import { render } from 'vitest-browser-svelte';
import GetFunPassword from './get-fun-password.svelte';

describe('GetFunPassword', () => {
	test('generates a four word password on click', async () => {
		const screen = await render(GetFunPassword);
		await page
			.getByRole('button', { name: 'Get Fun Password' })
			.click();

		const output = screen.container.querySelector('p');
		await expect
			.poll(() => output?.textContent?.trim().split(' ').length)
			.toBe(4);
	});
});
