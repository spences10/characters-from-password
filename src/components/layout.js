import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

const AppStyles = styled.main`
  position: relative;

  ${down('sm')} {
    /* background-color: seagreen; */
  }
  ${up('md')} {
    /* background-color: dodgerblue; */
  }
  ${up('lg')} {
    /* background-color: rebeccapurple; */
  }
  ${up('xl')} {
    /* background-color: hotpink; */
  }
`

export const Layout = ({ children }) => {
  return <AppStyles>{children}</AppStyles>
}
