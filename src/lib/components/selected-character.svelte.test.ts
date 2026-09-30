import { describe, expect, test } from 'vite-plus/test';
import { page } from 'vite-plus/test/browser';
import { render } from 'vitest-browser-svelte';
import SelectedCharacter from './selected-character.svelte';

describe('SelectedCharacter', () => {
	test('shows placeholder when nothing entered', async () => {
		await render(SelectedCharacter);
		await expect
			.element(page.getByText('Nothing entered'))
			.toBeInTheDocument();
	});

	test('shows the character and its type', async () => {
		await render(SelectedCharacter, { char: 'Q' });
		await expect.element(page.getByText('"Q"')).toBeInTheDocument();
		await expect
			.element(page.getByText('This is a uppercase character'))
			.toBeInTheDocument();
	});
});
