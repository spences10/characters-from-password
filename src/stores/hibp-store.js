import { writable } from 'svelte/store'

export const breaches = writable(``)
export const fetchHIBPHashes = async sha1 => {
  const url = `https://api.pwnedpasswords.com/range/${sha1.substring(
    0,
    5
  )}`
  const res = await fetch(url)
  const resText = await res.text()

  // work through hash data
  const splitText = resText.split('\r\n')
  const match = splitText.filter(
    hash =>
      hash.substring(0, hash.indexOf(':')) ===
      sha1.slice(5, sha1.length)
  )
  const breachesMatch = match[0]
  if (!breachesMatch) return 0
  const numberOfBreaches = breachesMatch.substring(
    breachesMatch.indexOf(`:`) + 1,
    breachesMatch.length
  )
  breaches.set(numberOfBreaches)
}
