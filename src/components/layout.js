import React from 'react'
import styled from 'styled-components'

const AppStyles = styled.main`
  h1 {
    font-family: ${({ theme }) => theme.font.sans};
  }
  p,
  label,
  input,
  select {
    font-family: ${({ theme }) => theme.font.serif};
  }
  section {
    font-family: ${({ theme }) => theme.font.monospace};
  }
`

export const Layout = ({ children }) => {
  return <AppStyles>{children}</AppStyles>
}
