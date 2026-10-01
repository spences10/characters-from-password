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

function mock_fetch(body: string, init?: ResponseInit) {
	const fetch_mock = vi.fn(async () => new Response(body, init));
	vi.stubGlobal('fetch', fetch_mock);
	return fetch_mock;
}

describe('create_breaches', () => {
	afterEach(() => {
		vi.unstubAllGlobals();
	});

	test('starts idle', () => {
		const breaches = create_breaches();
		expect(breaches.status).toBe('idle');
		expect(breaches.count).toBe(0);
	});

	test('queries the k-anonymity range with the first 5 chars', async () => {
		const fetch_mock = mock_fetch(range_body);
		await create_breaches().check(sha1);
		expect(fetch_mock).toHaveBeenCalledWith(
			'https://api.pwnedpasswords.com/range/5BAA6',
		);
	});

	test('reports found with the breach count', async () => {
		mock_fetch(range_body);
		const breaches = create_breaches();
		await breaches.check(sha1);
		expect(breaches.status).toBe('found');
		expect(breaches.count).toBe(10434004);
	});

	test('reports clear when no suffix matches', async () => {
		mock_fetch('ABC:1');
		const breaches = create_breaches();
		await breaches.check(sha1);
		expect(breaches.status).toBe('clear');
		expect(breaches.count).toBe(0);
	});

	test('reports error on a failed response', async () => {
		mock_fetch('', { status: 503 });
		const breaches = create_breaches();
		await breaches.check(sha1);
		expect(breaches.status).toBe('error');
	});

	test('ignores a stale response that resolves last', async () => {
		let resolve_slow: (r: Response) => void = () => {};
		const fetch_mock = vi
			.fn()
			.mockImplementationOnce(
				() => new Promise<Response>((r) => (resolve_slow = r)),
			)
			.mockImplementationOnce(async () => new Response('ABC:1'));
		vi.stubGlobal('fetch', fetch_mock);

		const breaches = create_breaches();
		const slow = breaches.check(sha1);
		await breaches.check('ABCDE' + 'F'.repeat(35));
		resolve_slow(new Response(range_body));
		await slow;

		expect(breaches.status).toBe('clear');
	});

	test('reset returns to idle', async () => {
		mock_fetch(range_body);
		const breaches = create_breaches();
		await breaches.check(sha1);
		breaches.reset();
		expect(breaches.status).toBe('idle');
		expect(breaches.count).toBe(0);
	});
});
