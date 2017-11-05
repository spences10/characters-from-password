import React from 'react'
import styled from 'styled-components'

const WrapperForm = styled.form`
  /* position: absolute; */
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2em;
`

const CharacterInput = styled.input.attrs({
  // we can define static props
  type: 'password',
  placeholder: 'Pasta password here',

  // or we can define dynamic ones
  margin: props => props.size || '10px',
  padding: props => props.size || '10px'
})`
  color: purple;
  font-size: 3em;
  border: 2px solid purple;
  border-radius: 5px;
  // position: absolute;
  // top: 25%;
  // left: 25%;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

const CharacterSelect = styled.select`
  color: purple;
  font-size: 1.5em;
  border: 2px solid purple;
  border-radius: 5px;
  justify-self: start;
  /* position: absolute;
  top: 35%;
  left: 26%; */
`

const ResultsDiv = styled.div`
  color: purple;
  font-size: 10em;
  border-radius: 5px;
  text-align: center;
  /* position: absolute;
  top: 15%;
  left: 26%; */
`

const CharacterLabel = styled.label`
  color: purple;
  font-size: 1.5em;
  /* margin: 10px 200px 10px 200px; */
  padding: 10px;
  border: 10px;
  justify-self: end;
`

const SelectDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: purple;
  align-items: center
  /* font-size: 1.5em; */
  /* margin: 10px 200px 10px 200px; */
  /* padding: 10px; */
  /* border: 10px; */
`

class MainForm extends React.Component {
  state = {
    password: '',
    selected: 0,
    character: ''
  }

  render() {
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
        <option key={index} letter={item}>
          {index + 1}
        </option>
      )
      // }
    })

    // console.log('====================')
    // console.log(items)
    // console.log('====================')

    const characterFromPassword = this.state.password.charAt(
      this.state.selected - 1
    )
    // characterFromPassword = characterFromPassword.charAt(this.state.selected)

    return (
      <div>
        <WrapperForm>
          <CharacterInput
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <SelectDiv>
            <CharacterLabel>Character:</CharacterLabel>
            <CharacterSelect
              onChange={e => this.setState({ selected: e.target.value })}
            >
              {list}
            </CharacterSelect>
          </SelectDiv>
          <ResultsDiv>
            <label>`{characterFromPassword}`</label>
          </ResultsDiv>
        </WrapperForm>
      </div>
    )
  }
}

export default MainForm
