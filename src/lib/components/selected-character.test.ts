import { describe, expect, test } from 'vitest'
import { get_character_type } from './util'

describe('character-utils', () => {
	test('should identify numbers', () => {
		expect(get_character_type('4')).toBe('number')
		expect(get_character_type('7')).toBe('number')
	})

	test('should identify special characters', () => {
		expect(get_character_type('$')).toBe('special')
		expect(get_character_type('&')).toBe('special')
	})

	test('should identify uppercase characters', () => {
		expect(get_character_type('A')).toBe('uppercase')
		expect(get_character_type('Z')).toBe('uppercase')
	})

	test('should identify lowercase characters', () => {
		expect(get_character_type('a')).toBe('lowercase')
		expect(get_character_type('z')).toBe('lowercase')
	})
})
