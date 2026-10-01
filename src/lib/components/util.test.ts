import { describe, expect, test } from 'vite-plus/test';
import { get_character_type, join_list, ordinal } from './util';

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

describe('ordinal', () => {
	test.each([
		[1, '1st'],
		[2, '2nd'],
		[3, '3rd'],
		[4, '4th'],
		[11, '11th'],
		[12, '12th'],
		[13, '13th'],
		[21, '21st'],
		[22, '22nd'],
		[111, '111th'],
	])('%i is %s', (n, expected) => {
		expect(ordinal(n)).toBe(expected);
	});
});

describe('join_list', () => {
	test.each([
		[[], ''],
		[['2nd'], '2nd'],
		[['2nd', '5th'], '2nd and 5th'],
		[['2nd', '5th', '8th'], '2nd, 5th and 8th'],
	])('%j', (items, expected) => {
		expect(join_list(items)).toBe(expected);
	});
});
