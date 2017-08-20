import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  color: palevioletred;
  font-size: 1.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: absolute;
  top: 35%;
  left: 26%;
`

// this.state.input.split('').map((a, i) => <option value={a}>i</option>)

export default () => (
  <div>
    <Select>
      <option value='Select Character'>Select Character</option>
      <option value='saab'>Saab</option>
      <option value='mercedes'>Mercedes</option>
      <option value='audi'>Audi</option>
    </Select>
  </div>
)

const result = Select
