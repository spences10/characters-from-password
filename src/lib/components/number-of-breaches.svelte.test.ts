import { describe, expect, test } from 'vite-plus/test';
import { page } from 'vite-plus/test/browser';
import { render } from 'vitest-browser-svelte';
import NumberOfBreaches from './number-of-breaches.svelte';

describe('NumberOfBreaches', () => {
	test('formats the breach count', async () => {
		await render(NumberOfBreaches, { breaches_count: '10434004' });
		await expect
			.element(
				page.getByText(new Intl.NumberFormat().format(10434004)),
			)
			.toBeInTheDocument();
	});

	test('shows zero for an empty count', async () => {
		await render(NumberOfBreaches, { breaches_count: '' });
		await expect
			.element(page.getByText('0', { exact: true }))
			.toBeInTheDocument();
	});
});
