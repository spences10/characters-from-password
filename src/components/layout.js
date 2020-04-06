import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

const AppStyles = styled.main`
  position: relative;

  ${down('sm')} {
    background-color: seagreen;
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin-bottom: ${({ theme }) => theme.spacing['4']};
    }
  }
  ${up('md')} {
    background-color: dodgerblue;
    h1 {
      font-size: ${({ theme }) => theme.fontSize['2xl']};
      margin-bottom: ${({ theme }) => theme.spacing['6']};
    }
  }
  ${up('lg')} {
    background-color: rebeccapurple;
    h1 {
      font-size: ${({ theme }) => theme.fontSize['3xl']};
      margin-bottom: ${({ theme }) => theme.spacing['10']};
    }
  }
  ${up('xl')} {
    background-color: hotpink;
    h1 {
      font-size: ${({ theme }) => theme.fontSize['4xl']};
      margin-bottom: ${({ theme }) => theme.spacing['20']};
    }
  }
`

export const Layout = ({ children }) => {
  return <AppStyles>{children}</AppStyles>
}
