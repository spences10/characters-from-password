import {
	afterEach,
	describe,
	expect,
	test,
	vi,
} from 'vite-plus/test';
import { create_breaches } from './hibp.svelte';

const sha1 = '5BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8';
const range_body = [
	'003D68EB55068C33ACE09247EE4C639306B:3',
	`${sha1.slice(5)}:10434004`,
	'1E4C9B93F3F0682250B6CF8331B7EE68FD9:2',
].join('\r\n');

function mock_fetch(body: string) {
	const fetch_mock = vi.fn(async () => new Response(body));
	vi.stubGlobal('fetch', fetch_mock);
	return fetch_mock;
}

describe('create_breaches', () => {
	afterEach(() => {
		vi.unstubAllGlobals();
	});

	test('starts empty', () => {
		expect(create_breaches().breaches).toBe('');
	});

	test('queries the k-anonymity range with the first 5 chars', async () => {
		const fetch_mock = mock_fetch(range_body);
		await create_breaches().fetch_hibp_hashes(sha1);
		expect(fetch_mock).toHaveBeenCalledWith(
			'https://api.pwnedpasswords.com/range/5BAA6',
		);
	});

	test('sets breach count when suffix matches', async () => {
		mock_fetch(range_body);
		const breaches = create_breaches();
		await breaches.fetch_hibp_hashes(sha1);
		expect(breaches.breaches).toBe('10434004');
	});

	test('resets to empty when no suffix matches', async () => {
		mock_fetch(range_body);
		const breaches = create_breaches();
		await breaches.fetch_hibp_hashes(sha1);
		mock_fetch('ABC:1');
		await breaches.fetch_hibp_hashes(sha1);
		expect(breaches.breaches).toBe('');
	});
});
