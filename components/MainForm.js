import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
//for mobile
  color: purple;
  border-radius: 5px;
  text-align: center;  
  font-family: verdana;
  font-size: 2em;

//for tablets
  @media only screen and (max-width: 425px) and (min-width: 768px) {
    font-size: 1.5em;
  }

//for desktops
  @media only screen and (min-width: 768px) {
    font-size:1m;
  }  
`

const CharacterInput = styled.input.attrs({
  // we can define static props
  type: 'password',
  placeholder: 'Paste your password here',

  // or we can define dynamic ones
  margin: props => props.size || '10px',
  padding: props => props.size || '10px',
})`
//for mobile phones
  color: purple;
  font-size: 2em;
  border: 2px solid purple;
  border-radius: 5px;
  
  //there's probably a better way of doing this XD 
  //border-width hard coded
  width: calc(100% - ${props => props.margin} - ${props => props.margin} - ${props => props.padding} - ${props => props.padding} - 4px);

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};

//for tablets
  @media only screen and (max-width: 425px) and (min-width: 768px) {
    font-size: 1.5em;
  }

//for desktops
  @media only screen and (min-width: 768px) {
    font-size: 1em;
  }  
`

const CharacterSelect = styled.select`
  border: 2px solid purple;
  border-radius: 5px;
  justify-self: start;
  font-size: 1.5em;

//for tablets
/*  @media only screen and (max-width: 425px) and (min-width: 768px) {
    font-size: 1.5em;
  }*/

//for desktops
  @media only screen and (min-width: 768px) {
    font-size: 2em;
  }  
`

const CharacterLabel = styled.label`
  padding: 10px;
  border: 10px;
  justify-self: end; 
`

const SelectDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: purple;
  align-items: center
`

const ResultsDiv = styled.div`
  border-radius: 5px;
  text-align: center;
  font-size: 6em;

//for tablets
  /*@media only screen and (max-width: 425px) and (min-width: 768px) {
    font-size: 6em;
  }*/

//for desktops
  @media only screen and (min-width: 768px) {
    font-size: 10em;
  }  
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
      <Container>
        <div>
          <p>I use strong passwords, "correct battery horse staple" ftw!</p> 
          <p>But I also get quite annoyed counting out my password onto my fingers when prompted to give characters 18, 7 and 12 from my password.</p>
          <p>I put this together for just that, paste or type in your password then pick out your character you need.</p>
        </div>
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
      </Container>
    )
  }
}

export default MainForm
