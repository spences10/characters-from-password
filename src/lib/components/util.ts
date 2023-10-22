type CharacterTypeMap = {
	[key: string]: boolean
}

export const get_character_type = (char: string): string => {
	const ascii_number = char.charCodeAt(0)

	const type_map: CharacterTypeMap = {
		number: ascii_number > 47 && ascii_number < 58,
		special:
			(ascii_number > 57 && ascii_number < 65) ||
			(ascii_number > 31 && ascii_number < 47) ||
			(ascii_number > 90 && ascii_number < 97),
		uppercase: ascii_number > 64 && ascii_number < 91,
		lowercase: ascii_number > 96 && ascii_number < 123,
	}

	return Object.keys(type_map).find((key) => type_map[key]) || ''
}
