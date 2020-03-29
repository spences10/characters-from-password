import React, { useEffect, useState } from 'react'
import hash from 'sha1'
import { Dump, fetchHIBPData } from '../helpers'

const apiUrl = `https://api.pwnedpasswords.com/range/`

export const HIBPHashList = () => {
  const [hashes, setHashes] = useState(``)
  const [getSha1, setSha1] = useState(``)
  const [getPassword, setPassword] = useState(``)

  useEffect(() => {
    function getHIBPHashes(apiUrl, sha1) {
      fetchHIBPData(`${apiUrl}/${sha1.substring(0, 5)}`).then(
        (result) => {
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

  function numberOfBreaches() {
    if (!hashes) return
    const match = hashes.filter(
      (hash) =>
        hash.substring(0, hash.indexOf(':')) ===
        getSha1.slice(5, getSha1.length)
    )

    const breaches = match[0]
    if (!breaches) return
    return breaches.substring(
      breaches.indexOf(`:`) + 1,
      breaches.length
    )
  }

  return (
    <>
      {numberOfBreaches() && (
        <p>{`This password shows in ${numberOfBreaches()} breaches.`}</p>
      )}
      <input
        value={getPassword}
        onChange={(e) => handleInputChange(e)}
        type='text'
        placeholder='password me up yo!'
      />
      <Dump sha1={getSha1} yo={hashes} />
    </>
  )
}
