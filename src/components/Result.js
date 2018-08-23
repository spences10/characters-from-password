import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  color: palevioletred;
  font-size: 1.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: absolute;
  top: 35%;
  left: 26%;
`

export default () => (
  <div>
    <Div />
  </div>
)
