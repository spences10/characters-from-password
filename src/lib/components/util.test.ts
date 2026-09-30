import { describe, expect, test } from 'vite-plus/test';
import { get_character_type } from './util';

describe('get_character_type', () => {
	test.each(['0', '4', '9'])('%s is a number', (char) => {
		expect(get_character_type(char)).toBe('number character');
	});

	test.each(['A', 'Z'])('%s is uppercase', (char) => {
		expect(get_character_type(char)).toBe('uppercase character');
	});

	test.each(['a', 'z'])('%s is lowercase', (char) => {
		expect(get_character_type(char)).toBe('lowercase character');
	});

	test.each([
		' ',
		'!',
		'$',
		'&',
		'/',
		':',
		'@',
		'[',
		'`',
		'{',
		'|',
		'}',
		'~',
	])('%s is special', (char) => {
		expect(get_character_type(char)).toBe('special character');
	});

	test('returns empty string for empty input', () => {
		expect(get_character_type('')).toBe('');
	});

	test('returns empty string for non-ascii', () => {
		expect(get_character_type('é')).toBe('');
	});
});
