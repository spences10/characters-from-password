import React, { useEffect, useState } from 'react'
import hash from 'sha1'
import styled from 'styled-components'
import { fetchHIBPData } from '../helpers'
import { FunPassword } from './get-fun-password'
import { NumberOfBreaches } from './number-of-breaches'
import { SelectedCharacter } from './selected-character'

const Wrapper = styled.form`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    '. . p p p p p p p p . .'
    '. . t t t t t t t t . .'
    '. . s s s s s s s s . .'
    '. . r r r r r r r r . .'
    '. . n n n n n n n n . .'
    '. . h h h h h h h h . .';

  section {
    grid-area: p;
    text-align: center;
  }
`

const PasswordFieldset = styled.fieldset`
  grid-area: t;
  input {
    text-align: center;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    border-style: none;
    border: solid 1px ${({ theme }) => theme.colours.grey[500]};
    padding: ${({ theme }) => theme.spacing[3]};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    width: 100%;
  }
`
const PickerFieldset = styled.fieldset`
  grid-area: s;
  text-align: center;
  select {
    margin: ${({ theme }) => theme.spacing['1']};
  }
`

const apiUrl = `https://api.pwnedpasswords.com/range/`

export const CharacterPicker = () => {
  const [hashes, setHashes] = useState(``)
  const [getSha1, setSha1] = useState(``)
  const [getPassword, setPassword] = useState(``)
  const [selected, setSelected] = useState(``)

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

  return (
    <Wrapper onClick={e => e.preventDefault()}>
      <section>Password Character Picker</section>
      <PasswordFieldset>
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
        <NumberOfBreaches
          breaches={getNumberOfBreaches()}
          passwordLength={getPassword}
        />
        <FunPassword />
      </PickerFieldset>
    </Wrapper>
  )
}
