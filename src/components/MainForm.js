import React from 'react'
import styled from 'styled-components'

// import HaveIBeenPwned from './HaveIBeenPwned'

import { media } from '../theme/globalStyle'
// import { getFunName } from '../helpers'

const Container = styled.div`
  margin: 1rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . p p p p p p p p . .'
    '. . t t t t t t t t . .'
    '. . s s s s s s s s . .'
    '. . r r r r r r r r . .'
    '. . n n n n n n n n . .'
    '. . h h h h h h h h . .';

  text-align: center;

  ${media.giant`
    /* background: goldenrod; */
  `};
  ${media.desktop`
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    margin: 0rem;
    padding: 0rem;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. p p p p p p p .'
      '. t t t t t t t .'
      '. s s s s s s s .'
      '. r r r r r r r .'
      '. n n n n n n n .'
      '. h h h h h h h .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    margin: 0rem;
    padding: 0rem;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. p p p p p p p .'
      '. t t t t t t t .'
      '. s s s s s s s .'
      '. r r r r r r r .'
      '. n n n n n n n .'
      '. h h h h h h h .';
    /* background: palevioletred; */
  `};
`

const Preamble = styled.div`
  grid-area: p;
`

const StyledLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener',
  href: props => props.url
})`
  color: ${props => props.theme.blue};
  &:hover {
    text-decoration: underline;
  }
`

const CharacterInput = styled.input.attrs({
  // we can define static props
  type: 'password',
  // Yes Pasta is intentional!!!!1!
  placeholder: 'Pasta your password here'
})`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;

  grid-area: t;

  width: 100%;

  color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  border-radius: 5px;
  text-align: center;
`

const CharacterSelect = styled.select`
  margin: 0rem;
  padding: 0rem 0.5rem;
  font-size: 1rem;
  height: 2rem;
  border: 1px solid ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  border-radius: 5px;
`

const CharacterLabel = styled.label`
  padding: 10px;
  border: 10px;
  justify-self: end;
  color: ${props => props.theme.black};
`

const SelectDiv = styled.div`
  grid-area: s;
  // display: grid;
  grid-template-columns: repeat(2, 1fr);
  */color: purple;
  align-items: center;
`

const ResultsDiv = styled.div`
  grid-area: r;

  border-radius: 5px;
  text-align: center;
  font-size: 6rem;

  /* for tablets */
  /*@media only screen and (max-width: 425px) and (min-width: 768px) {
    font-size: 6em;
  }*/

  /* for desktops */
  /* @media only screen and (min-width: 768px) {
    font-size: 10em;
  } */
`

// const NewPassword = styled.div`
//   grid-area: n;
//   font-size: 2rem;
// `

const HIBPWrapper = styled.div`
  grid-area: h;
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
        <Preamble>
          <h1>Password Character Picker</h1>
          <p>
            I use strong passwords,{' '}
            <StyledLink url={'https://xkcd.com/936/'}>
              "correct battery horse staple"
            </StyledLink>{' '}
            ftw!
          </p>
          <p>
            But I also get quite annoyed counting out characters 18, 7
            and 12 from my password.
          </p>
          <p>
            I put this together for just that, paste or type in your
            password then pick out your character you need.
          </p>
        </Preamble>
        <CharacterInput
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <SelectDiv>
          <CharacterLabel>Character:</CharacterLabel>
          <CharacterSelect
            onChange={e =>
              this.setState({ selected: e.target.value })
            }
          >
            {list}
          </CharacterSelect>
        </SelectDiv>
        <ResultsDiv>
          <label>"{characterFromPassword}"</label>
        </ResultsDiv>
        {/* <NewPassword>{getFunName()}</NewPassword> */}
        <HIBPWrapper>
          {/* <HaveIBeenPwned password={this.state.password} /> */}
        </HIBPWrapper>
      </Container>
    )
  }
}

export default MainForm
