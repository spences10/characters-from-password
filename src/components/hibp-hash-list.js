import React, { useEffect, useState } from 'react'
import hash from 'sha1'
import styled from 'styled-components'
import { fetchHIBPData, getFunName } from '../helpers'
import { SelectedCharacter } from './selected-character'

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. title     .'
    '. preamble  .'
    '. password  .'
    '. character .'
    '. result    .'
    '. result    .'
    '. generate  .'
    '. new       .';
  h1 {
    grid-area: title;
  }
  input {
    text-align: center;
    min-width: 900px;
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    border-style: none;
    border: solid 1px ${({ theme }) => theme.colours.grey[500]};
    padding: ${({ theme }) => theme.spacing[3]};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }
  select {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  section {
    grid-area: result;
    text-align: center;
    font-family: ${({ theme }) => theme.font.monospace};
    font-size: 6rem;
    span {
      font-family: ${({ theme }) => theme.font.sans};
    }
  }
  label {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  button,
  input,
  select {
    outline: none;
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow.outline};
    }
  }
`

const PasswordFieldset = styled.fieldset`
  grid-area: password;
`
const PickerFieldset = styled.fieldset`
  grid-area: character;
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
    <Wrapper onClick={e => e.preventDefault()}>
      <h1>Password Character Picker</h1>
      <PasswordFieldset>
        <label htmlFor='passwordInput'>
          Enter Password You Want to Pick Characters From:
        </label>
        <input
          id='passwordInput'
          // type='password'
          placeholder='password me up yo!'
          value={getPassword}
          onChange={e => handleInputChange(e)}
        />
      </PasswordFieldset>
      <PickerFieldset>
        <label htmlFor='characterFromPassword'>
          Select Character:
        </label>
        <select
          id='characterFromPassword'
          onChange={e => handleSelectedChange(e)}
        >
          {list}
        </select>
        <SelectedCharacter char={characterFromPassword} />
        {getNumberOfBreaches() && (
          <p>{`This password shows in ${getNumberOfBreaches().toLocaleString()} breaches.`}</p>
        )}
        <button onClick={handleFunPassword}>Get Fun Name</button>
        <p>{funPassword}</p>
      </PickerFieldset>
    </Wrapper>
  )
}
