import { describe, expect, test } from 'vite-plus/test';
import { render } from 'vitest-browser-svelte';
import Tumbler from './tumbler.svelte';

const drum_angle = (container: HTMLElement) =>
	(
		container.querySelector('.drum') as HTMLElement
	).style.getPropertyValue('--angle');

describe('Tumbler', () => {
	test('is hidden from assistive tech', async () => {
		const { container } = await render(Tumbler);
		expect(
			container
				.querySelector('.tumbler')
				?.getAttribute('aria-hidden'),
		).toBe('true');
	});

	test('only renders the real glyph when revealed', async () => {
		const hidden = await render(Tumbler, {
			glyph: null,
			position: 0,
		});
		expect(hidden.container.querySelector('.target')).toBeNull();
		await hidden.unmount();

		const shown = await render(Tumbler, {
			glyph: 'Q',
			position: 0,
			spins: 1,
		});
		expect(
			shown.container.querySelector('.target')?.textContent,
		).toBe('Q');
	});

	test('always rolls forward', async () => {
		const screen = await render(Tumbler, { glyph: null, spins: 0 });
		expect(drum_angle(screen.container)).toBe('0deg');
		await screen.rerender({ glyph: 'x', spins: 1 });
		expect(drum_angle(screen.container)).toBe('540deg');
		await screen.rerender({ glyph: null, spins: 2 });
		expect(drum_angle(screen.container)).toBe('720deg');
	});
});
