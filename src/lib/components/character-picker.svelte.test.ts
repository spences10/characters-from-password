import { describe, expect, test } from 'vite-plus/test';
import { page } from 'vite-plus/test/browser';
import { render } from 'vitest-browser-svelte';
import CharacterPicker from './character-picker.svelte';

describe('CharacterPicker', () => {
	test('is disabled without a password', async () => {
		await render(CharacterPicker);
		await expect
			.element(page.getByRole('button', { name: 'Pick Character:' }))
			.toBeDisabled();
		await expect
			.element(page.getByText('Nothing entered'))
			.toBeInTheDocument();
	});

	test('shows the first character by default', async () => {
		await render(CharacterPicker, { password: 'a$9' });
		await expect.element(page.getByText('"a"')).toBeInTheDocument();
	});

	test('selecting a position shows that character', async () => {
		await render(CharacterPicker, { password: 'a$9' });
		await page
			.getByRole('button', { name: 'Pick Character:' })
			.click();
		await page.getByRole('option', { name: '3' }).click();

		await expect.element(page.getByText('"9"')).toBeInTheDocument();
		await expect
			.element(page.getByText('This is a number character'))
			.toBeInTheDocument();
	});
});
