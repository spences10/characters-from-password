import { describe, expect, test } from 'vitest';
import { get_character_type } from './util';

describe('character-utils', () => {
	test('should identify numbers', () => {
		expect(get_character_type('4')).toBe('number character');
		expect(get_character_type('7')).toBe('number character');
	});

	test('should identify special characters', () => {
		expect(get_character_type('$')).toBe('special character');
		expect(get_character_type('&')).toBe('special character');
	});

	test('should identify uppercase characters', () => {
		expect(get_character_type('A')).toBe('uppercase character');
		expect(get_character_type('Z')).toBe('uppercase character');
	});

	test('should identify lowercase characters', () => {
		expect(get_character_type('a')).toBe('lowercase character');
		expect(get_character_type('z')).toBe('lowercase character');
	});
});
