import { describe, expect, test } from 'vite-plus/test';
import { page } from 'vite-plus/test/browser';
import { render } from 'vitest-browser-svelte';
import BreachPlate from './breach-plate.svelte';

describe('BreachPlate', () => {
	test.each([
		['idle', 'Breach check'],
		['checking', 'Checking breach records…'],
		['clear', 'Not found in known breaches'],
		['error', "Couldn't reach the breach database"],
	] as const)('%s state', async (status, heading) => {
		await render(BreachPlate, { status });
		await expect
			.element(page.getByRole('heading', { name: heading }))
			.toBeInTheDocument();
	});

	test('found shows the formatted count', async () => {
		await render(BreachPlate, { status: 'found', count: 10434004 });
		await expect
			.element(page.getByText('10,434,004'))
			.toBeInTheDocument();
		await expect
			.element(
				page.getByRole('heading', {
					name: 'times in known data breaches',
				}),
			)
			.toBeInTheDocument();
	});

	test('singular for one breach', async () => {
		await render(BreachPlate, { status: 'found', count: 1 });
		await expect
			.element(
				page.getByRole('heading', {
					name: 'time in known data breaches',
				}),
			)
			.toBeInTheDocument();
	});
});
