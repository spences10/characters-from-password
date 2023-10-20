import { error } from '@sveltejs/kit'

export const load = async () => {
	const slug = 'how-does-it-work'
	try {
		const Copy = await import(`../../copy/${slug}.md`)
		return {
			Copy: Copy.default,
		}
	} catch (e) {
		throw error(404, 'Uh oh!')
	}
}
