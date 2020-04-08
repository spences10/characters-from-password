import React, { useState } from 'react'
import { NumberOfBreaches } from './number-of-breaches'
import { SelectedCharacter } from './selected-character'

export const CharacterPicker = ({ password, breaches }) => {
  const [selected, setSelected] = useState(``)

  const items = [...password]
  const characterFromPassword = password.charAt(selected - 1)

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
    <fieldset>
      <label htmlFor='characterFromPassword'>Select Character:</label>
      <select
        id='characterFromPassword'
        onChange={e => handleSelectedChange(e)}
      >
        {list}
      </select>
      <SelectedCharacter char={characterFromPassword} />
      <NumberOfBreaches
        breaches={breaches()}
        passwordLength={password}
      />
    </fieldset>
  )
}
