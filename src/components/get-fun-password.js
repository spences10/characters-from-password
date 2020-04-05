import React, { useState } from 'react'
import styled from 'styled-components'
import { getFunPassword } from '../helpers'

const GetPassword = styled.section`
  grid-area: result;
  text-align: center;
  font-family: ${({ theme }) => theme.font.monospace};
  span {
    font-family: ${({ theme }) => theme.font.sans};
  }
  button {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colours.primary[500]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    &:hover {
      background-color: ${({ theme }) => theme.colours.primary[700]};
    }
  }
`

export const GetFunPassword = ({ handleFunPassword }) => {
  const [funPassword, setFunPassword] = useState(null)
  function handleFunPassword() {
    setFunPassword(getFunPassword)
  }
  return (
    <GetPassword>
      <button onClick={handleFunPassword}>Get Fun Password</button>
      <p>{funPassword}</p>
    </GetPassword>
  )
}
