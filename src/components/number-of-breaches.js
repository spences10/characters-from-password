import React from 'react'

export const NumberOfBreaches = ({ breaches }) => {
  return (
    <>
      {breaches && (
        <p>{`This password appears in ${breaches} breaches.`}</p>
      )}
    </>
  )
}
