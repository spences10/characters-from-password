import React from 'react'
import styled from 'styled-components'

const CharacterInput = styled.input.attrs({
  // we can define static props
  type: 'password',
  placeholder: 'Pasta password here',

  // or we can define dynamic ones
  margin: (props) => props.size || '10px',
  padding: (props) => props.size || '10px'
})`
  color: palevioletred;
  font-size: 3em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: relative;
  top: 25%;
  left: 25%;

  /* here we use the dynamically computed props */
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`

const CharacterSelect = styled.select`
  color: palevioletred;
  font-size: 1.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: relative;
  top: 35%;
  left: 26%;
`

const ResultsDiv = styled.div`
  color: palevioletred;
  font-size: 1.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: absolute;
  top: 35%;
  left: 26%;
`

class MainForm extends React.Component {
  state = {
    password: '',
    selected: 0,
    character: ''
  }

  render(){
    // make variable to store the options in from <input>
    const items = [...this.state.password]

    // map over contents of items to make <options>
    // use index for unique key and also option
    const list = items.map((item, index) => {
      // console.log('====================')
      // console.log(item)
      // console.log('====================')
      // if (index===0) {
      //   return (
      //     <option key={index}>Select Character</option>
      //   )
      // } else {
        return (
          <option 
            key={index}
            letter={item}
          >
            {index+1}
          </option>
        )
      // }
    })

    // console.log('====================')
    // console.log(items)
    // console.log('====================')

    const characterFromPassword = this.state.password.charAt(this.state.selected-1) 
    // characterFromPassword = characterFromPassword.charAt(this.state.selected)

    return (
      <div>
        <form>
          <CharacterInput 
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
          />
          <CharacterSelect
            onChange={e => this.setState({selected: e.target.value})}
          >
            {list}
          </CharacterSelect>
        </form>
        <ResultsDiv>
          <label>{characterFromPassword}</label>
        </ResultsDiv>
      </div>
    )
  }
}

export default MainForm
