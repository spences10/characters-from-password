import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  // we can define static props
  type: 'password',

  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export default () => (
	<div>
		<Input placeholder="A small text input" size="1em" />
		<br />
		<Input placeholder="A bigger text input" size="2em" />
	</div>
)
