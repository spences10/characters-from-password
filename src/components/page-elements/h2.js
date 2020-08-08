import React from 'react'
import styled from 'styled-components'

const StyledText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.font.serif};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`

export const H2 = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}
