import React, { useState } from 'react'
import { getFunName } from '../helpers'

export const GetFunPassword = ({ handleFunPassword }) => {
  const [funPassword, setFunPassword] = useState(null)
  function handleFunPassword() {
    setFunPassword(getFunName)
  }
  return (
    <>
      <button onClick={handleFunPassword}>Get Fun Name</button>
      <p>{funPassword}</p>
    </>
  )
}
