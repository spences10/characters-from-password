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
      <option value='0'>Select Character</option>
      <option value='1'>Saab</option>
      <option value='2'>Mercedes</option>
      <option value='3'>Audi</option>
    </Select>
  </div>
)

// const result = Select // for use with Quokka
