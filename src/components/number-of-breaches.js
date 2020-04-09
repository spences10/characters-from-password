import React from 'react'
import styled from 'styled-components'

const BreachesWrapper = styled.section`
  p {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
  }
`
export const NumberOfBreaches = ({ breaches, passwordLength }) => {
  const FormattedNumber = () => {
    const number = new Intl.NumberFormat()
    return number.format(breaches)
  }

  if (passwordLength < 1) return null

  return (
    <BreachesWrapper>
      {breaches > 0 ? (
        <p>{`This password appears in ${FormattedNumber()} breaches.`}</p>
      ) : (
        <p>{`This password doesn't appear in any breaches.`}</p>
      )}
    </BreachesWrapper>
  )
}
