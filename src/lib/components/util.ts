type CharacterType = 'number' | 'special' | 'uppercase' | 'lowercase';

type CharacterTypeMap = {
	[key in CharacterType]: boolean;
};

export const get_character_type = (char: string): string => {
	const ascii_number = char.charCodeAt(0);

	const type_map: CharacterTypeMap = {
		number: ascii_number > 47 && ascii_number < 58,
		special:
			(ascii_number > 31 && ascii_number < 48) ||
			(ascii_number > 57 && ascii_number < 65) ||
			(ascii_number > 90 && ascii_number < 97) ||
			(ascii_number > 122 && ascii_number < 127),
		uppercase: ascii_number > 64 && ascii_number < 91,
		lowercase: ascii_number > 96 && ascii_number < 123,
	};

	const type_key =
		Object.keys(type_map).find(
			(key) => type_map[key as CharacterType],
		) || '';

	const descriptive_type_map: { [key in CharacterType]: string } = {
		number: 'number character',
		special: 'special character',
		uppercase: 'uppercase character',
		lowercase: 'lowercase character',
	};

	return descriptive_type_map[type_key as CharacterType] || '';
};

export const ordinal = (n: number): string => {
	const tens = n % 100;
	if (tens >= 11 && tens <= 13) return `${n}th`;
	const suffix = { 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] ?? 'th';
	return `${n}${suffix}`;
};

export const join_list = (items: string[]): string => {
	if (items.length <= 1) return items.join('');
	return `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`;
};
