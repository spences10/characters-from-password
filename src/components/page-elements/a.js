import React from 'react'
import styled from 'styled-components'
import { useAnalytics } from '../../contexts/event-tracking'

export const StyledA = styled.a`
  color: ${({ theme }) => theme.colours.grey[900]};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colours.grey[900]};
  &:hover {
    opacity: 0.5;
  }
`

export const A = props => {
  const fa = useAnalytics()
  return (
    <StyledA
      {...props}
      id={props.id}
      onClick={() => fa(props.goal)}
      target='_blank'
      rel='noopener noreferrer'
    >
      {props.children}
    </StyledA>
  )
}
