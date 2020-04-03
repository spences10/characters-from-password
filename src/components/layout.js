import React from 'react'
import styled from 'styled-components'

const AppStyles = styled.main`
  h1 {
    font-family: ${({ theme }) => theme.font.serif};
    font-size: ${({ theme }) => theme.fontSize['5xl']};
  }
  h2 {
    font-family: ${({ theme }) => theme.font.serif};
    font-size: ${({ theme }) => theme.fontSize['4xl']};
  }
  h3 {
    font-family: ${({ theme }) => theme.font.serif};
    font-size: ${({ theme }) => theme.fontSize['3xl']};
  }
  h4 {
    font-family: ${({ theme }) => theme.font.serif};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
  }
  h5 {
    font-family: ${({ theme }) => theme.font.serif};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  h6 {
    font-family: ${({ theme }) => theme.font.serif};
    font-size: ${({ theme }) => theme.fontSize.lg};
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
