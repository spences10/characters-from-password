import React, { useEffect, useState } from 'react'
import hash from 'sha1'
import { fetchHIBPData } from '../helpers'
import { CharacterPicker } from './character-picker'

const apiUrl = `https://api.pwnedpasswords.com/range/`

export const HIBPCheck = () => {
  const [hashes, setHashes] = useState(``)
  const [getSha1, setSha1] = useState(``)
  const [getPassword, setPassword] = useState(``)

  useEffect(() => {
    function getHIBPHashes(apiUrl, sha1) {
      if (sha1.length < 5) return null
      fetchHIBPData(`${apiUrl}/${sha1.substring(0, 5)}`).then(
        result => {
          setHashes(result.data.split('\r\n'))
        }
      )
    }
    getHIBPHashes(apiUrl, getSha1)
  }, [getSha1])

  function handleInputChange(e) {
    const password = e.target.value
    setSha1(hash(password).toUpperCase())
    setPassword(password)
  }

  function getNumberOfBreaches() {
    if (!hashes) return 0
    const match = hashes.filter(
      hash =>
        hash.substring(0, hash.indexOf(':')) ===
        getSha1.slice(5, getSha1.length)
    )

    const breaches = match[0]
    if (!breaches) return 0
    const numberOfBreaches = breaches.substring(
      breaches.indexOf(`:`) + 1,
      breaches.length
    )
    return numberOfBreaches
  }

  return (
    <form onClick={e => e.preventDefault()}>
      <fieldset>
        <label
          htmlFor='passwordInput'
          aria-label='Enter Password You Want to Pick Characters From:'
          aria-labelledby='passwordInput'
        />
        <input
          id='passwordInput'
          type='password'
          placeholder='password me up yo!'
          value={getPassword}
          onChange={e => handleInputChange(e)}
        />
      </fieldset>
      <CharacterPicker
        password={getPassword}
        breaches={getNumberOfBreaches}
      />
    </form>
  )
}
