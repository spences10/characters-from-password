import React from 'react'
import styled from 'styled-components'

export const StyledLi = styled.li`
  list-style-type: disc;
  margin-left: ${({ theme }) => theme.spacing['8']};
  p {
    margin-top: 10px;
  }
`

export const Li = props => {
  return <StyledLi {...props}>{props.children}</StyledLi>
}
