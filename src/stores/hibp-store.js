import { writable } from 'svelte/store'

export const breaches = writable('')
export const fetchHIBPHashes = async (/** @type {string} */ sha1) => {
	const url = `https://api.pwnedpasswords.com/range/${sha1.substring(
		0,
		5
	)}`
	const res = await fetch(url)
	const resText = await res.text()

	// work through hash data to get number of breaches
	const splitText = resText.split('\r\n')

	if (!splitText) return breaches.set('')
	const match = splitText.filter(
		(hash) =>
			hash.substring(0, hash.indexOf(':')) ===
			sha1.slice(5, sha1.length)
	)

	const breachesMatch = match[0]
	if (!breachesMatch) return breaches.set('')

	/** @type {string} */
	const numberOfBreaches = breachesMatch.substring(
		breachesMatch.indexOf(`:`) + 1,
		breachesMatch.length
	)

	breaches.set(numberOfBreaches)
}
