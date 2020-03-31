import React, { useEffect, useState } from 'react'
import hash from 'sha1'
import styled from 'styled-components'
import { fetchHIBPData, getFunName } from '../helpers'

const Wrapper = styled.div`
  input {
    text-align: center;
    min-width: 900px;
  }
`

const apiUrl = `https://api.pwnedpasswords.com/range/`

export const HIBPHashList = () => {
  const [hashes, setHashes] = useState(``)
  const [getSha1, setSha1] = useState(``)
  const [getPassword, setPassword] = useState(``)
  const [selected, setSelected] = useState(``)
  const [funPassword, setFunPassword] = useState(``)

  useEffect(() => {
    function getHIBPHashes(apiUrl, sha1) {
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
    if (!hashes) return
    const match = hashes.filter(
      hash =>
        hash.substring(0, hash.indexOf(':')) ===
        getSha1.slice(5, getSha1.length)
    )

    const breaches = match[0]
    if (!breaches) return
    const numberOfBreaches = breaches.substring(
      breaches.indexOf(`:`) + 1,
      breaches.length
    )
    const number = new Intl.NumberFormat()
    return number.format(numberOfBreaches)
  }

  const items = [...getPassword]
  const characterFromPassword = getPassword.charAt(selected - 1)

  function handleSelectedChange(e) {
    setSelected(e.target.value)
  }

  const list = items.map((item, index) => {
    return (
      <option key={index} letter={item}>
        {index + 1}
      </option>
    )
  })

  function handleFunPassword() {
    setFunPassword(getFunName)
  }

  return (
    <Wrapper>
      <label htmlFor='passwordInput'>
        Enter Password You Want to Pick Characters From:
      </label>
      <input
        id='passwordInput'
        type='password'
        placeholder='password me up yo!'
        value={getPassword}
        onChange={e => handleInputChange(e)}
      />
      <label htmlFor='characterFromPassword'>Select Character:</label>
      <select
        id='characterFromPassword'
        onChange={e => handleSelectedChange(e)}
      >
        {list}
      </select>
      <section>"{characterFromPassword}"</section>
      <button onClick={handleFunPassword}>Get Fun Name</button>
      <p>{funPassword}</p>
      {getNumberOfBreaches() && (
        <p>{`This password shows in ${getNumberOfBreaches().toLocaleString()} breaches.`}</p>
      )}
    </Wrapper>
  )
}
