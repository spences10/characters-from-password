import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

const AppStyles = styled.main`
  position: relative;
  min-width: 300px;
  max-width: 700px;
  margin: 0 auto;
  input,
  select,
  button {
    outline: none;
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow.outline};
    }
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    font-family: ${({ theme }) => theme.font.serif};
    margin-top: ${({ theme }) => theme.spacing[8]};
    line-height: ${({ theme }) => theme.lineHeight.none};
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    font-family: ${({ theme }) => theme.font.serif};
    margin-top: ${({ theme }) => theme.spacing[8]};
    line-height: ${({ theme }) => theme.lineHeight.none};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.base};
    margin-top: ${({ theme }) => theme.spacing[3]};
    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
    img {
      width: 100%;
    }
    word-break: break-word;
  }
  input {
    text-align: center;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    border-style: none;
    border: solid 1px ${({ theme }) => theme.colours.grey[500]};
    padding: ${({ theme }) => theme.spacing[3]};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    width: 100%;
  }
  ${down('sm')} {
    background-color: seagreen;
  }
  ${up('md')} {
    background-color: dodgerblue;
  }
  ${up('lg')} {
    background-color: rebeccapurple;
  }
  ${up('xl')} {
    background-color: hotpink;
  }
`

export const Layout = ({ children }) => {
  return <AppStyles>{children}</AppStyles>
}
