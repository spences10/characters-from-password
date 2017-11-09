import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  // we can define static props
  type: 'password',

  // or we can define dynamic ones
  margin: props => props.size || '10px',
  padding: props => props.size || '10px'
})`
  color: palevioletred;
  font-size: 2em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

// export default () => (
//   <div>
//     <Input placeholder='Pasta password here' size='10px' onChange={(event) => this.handleChange(event.target.value)} />
//   </div>
// )

class Textbox extends React.Component {
  constructor() {
    super()
    this.state = {
      txt: ''
    }
  }
  update(e) {
    this.setState({ txt: e.target.value })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <Input
          placeholder="Paste password here"
          size="10px"
          onChange={this.update.bind(this)}
        />
      </div>
    )
  }
}

export default Textbox
