import { describe, expect, test } from 'vite-plus/test';
import { page } from 'vite-plus/test/browser';
import { render } from 'vitest-browser-svelte';
import GetFunPassword from './get-fun-password.svelte';

describe('GetFunPassword', () => {
	test('generates a four word password and offers to spin again', async () => {
		const screen = await render(GetFunPassword);
		await page
			.getByRole('button', { name: 'Get Fun Password' })
			.click();

		const announced = screen.container.querySelector('[aria-live]');
		await expect
			.poll(() => announced?.textContent?.trim().split(' ').length)
			.toBe(4);
		await expect
			.element(page.getByRole('button', { name: 'Spin again' }))
			.toBeInTheDocument();
		await expect
			.element(page.getByRole('button', { name: 'Copy' }))
			.toBeInTheDocument();
	});
});
