import React, { useState } from 'react'
import { getFunPassword } from '../helpers'

export const GetFunPassword = ({ handleFunPassword }) => {
  const [funPassword, setFunPassword] = useState(null)
  function handleFunPassword() {
    setFunPassword(getFunPassword)
  }
  return (
    <>
      <button onClick={handleFunPassword}>Get Fun Password</button>
      <p>{funPassword}</p>
    </>
  )
}
