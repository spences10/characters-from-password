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
  p {
    min-height: ${({ theme }) => theme.spacing['20']};
    font-size: ${({ theme }) => theme.fontSize['5xl']};
    margin-left: -${({ theme }) => theme.spacing['64']};
    margin-right: -${({ theme }) => theme.spacing['64']};
  }
`

export const FunPassword = () => {
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
