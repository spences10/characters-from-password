import React from 'react'
import styled from 'styled-components'

const AppStyles = styled.main`
  h1 {
    font-family: ${({ theme }) => theme.font.serif};
    font-size: ${({ theme }) => theme.fontSize['4xl']};
  }
  p,
  label,
  input,
  select {
    font-family: ${({ theme }) => theme.font.sans};
  }
`

export const Layout = ({ children }) => {
  return <AppStyles>{children}</AppStyles>
}
