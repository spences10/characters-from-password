import {
	afterEach,
	describe,
	expect,
	test,
	vi,
} from 'vite-plus/test';
import { get_fun_password, rando } from './password-gen';

describe('rando', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	test('picks by Math.random index', () => {
		vi.spyOn(Math, 'random').mockReturnValue(0.99);
		expect(rando(['a', 'b', 'c'])).toBe('c');
	});

	test('picks first item at zero', () => {
		vi.spyOn(Math, 'random').mockReturnValue(0);
		expect(rando('xyz')).toBe('x');
	});
});

describe('get_fun_password', () => {
	test('returns four space separated words', () => {
		const words = get_fun_password().split(' ');
		expect(words).toHaveLength(4);
		for (const word of words) expect(word).toMatch(/^[a-z-]+$/);
	});
});
