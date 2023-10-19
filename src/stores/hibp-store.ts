import { writable } from 'svelte/store'

export const breaches = writable('')
export const fetch_hibp_hashes = async (sha1: string) => {
	const url = `https://api.pwnedpasswords.com/range/${sha1.substring(
		0,
		5,
	)}`
	const res = await fetch(url)
	const response_text = await res.text()

	// work through hash data to get number of breaches
	const split_text = response_text.split('\r\n')

	if (!split_text) return breaches.set('')
	const match = split_text.filter(
		(hash) =>
			hash.substring(0, hash.indexOf(':')) ===
			sha1.slice(5, sha1.length),
	)

	const breaches_match = match[0]
	if (!breaches_match) return breaches.set('')

	const number_of_breaches = breaches_match.substring(
		breaches_match.indexOf(`:`) + 1,
		breaches_match.length,
	)

	breaches.set(number_of_breaches)
}
