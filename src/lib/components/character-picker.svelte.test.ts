import { describe, expect, test } from 'vite-plus/test';
import { page } from 'vite-plus/test/browser';
import { render } from 'vitest-browser-svelte';
import CharacterPicker from './character-picker.svelte';

const position = (n: number) =>
	page.getByRole('button', { name: `Position ${n}`, exact: true });

describe('CharacterPicker', () => {
	test('shows idle, disabled tumblers without a password', async () => {
		await render(CharacterPicker);
		await expect.element(position(1)).toBeDisabled();
		await expect
			.element(
				page.getByText(
					'Your password loads into the tumblers as you type.',
				),
			)
			.toBeInTheDocument();
	});

	test('one position per character, none selected', async () => {
		await render(CharacterPicker, { password: 'a$9' });
		await expect.element(position(3)).toBeEnabled();
		await expect.element(position(4)).not.toBeInTheDocument();
		await expect
			.element(
				page.getByText('Tap the positions your bank asks for.'),
			)
			.toBeInTheDocument();
	});

	test('selecting positions reads them back like a bank prompt', async () => {
		await render(CharacterPicker, { password: 'a$9' });
		await position(3).click();
		await position(1).click();

		await expect
			.element(position(1))
			.toHaveAttribute('aria-pressed', 'true');
		await expect
			.element(
				page.getByRole('heading', {
					name: 'Enter the 1st and 3rd characters',
				}),
			)
			.toBeInTheDocument();
		await expect
			.element(page.getByText('number character'))
			.toBeInTheDocument();
		await expect
			.element(page.getByText('lowercase character'))
			.toBeInTheDocument();
	});

	test('toggling a position off and clearing', async () => {
		await render(CharacterPicker, { password: 'a$9' });
		await position(2).click();
		await expect
			.element(
				page.getByRole('heading', {
					name: 'Enter the 2nd character',
				}),
			)
			.toBeInTheDocument();

		await position(2).click();
		await expect
			.element(position(2))
			.toHaveAttribute('aria-pressed', 'false');

		await position(1).click();
		await page.getByRole('button', { name: 'Clear' }).click();
		await expect
			.element(
				page.getByText('Tap the positions your bank asks for.'),
			)
			.toBeInTheDocument();
	});

	test('labels a space', async () => {
		await render(CharacterPicker, { password: 'a b' });
		await position(2).click();
		await expect
			.element(page.getByText('space', { exact: true }))
			.toBeInTheDocument();
	});
});
