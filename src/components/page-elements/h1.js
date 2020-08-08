import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-family: ${({ theme }) => theme.font.serif};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  ${down('sm')} {
    margin-top: ${({ theme }) => theme.spacing[3]};
  }
  ${up('md')} {
  }
  ${up('lg')} {
  }
  ${up('xl')} {
  }
`

export const H1 = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}
