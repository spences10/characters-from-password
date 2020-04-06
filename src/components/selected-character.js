import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.section`
  grid-area: character;
  text-align: center;
  font-family: ${({ theme }) => theme.font.monospace};
  span {
    font-family: ${({ theme }) => theme.font.sans};
  }
`

export const SelectedCharacter = ({ char }) => {
  function whatIsIt() {
    const asciiNumber = char.charCodeAt(0)

    if (asciiNumber > 47 && asciiNumber < 58) return `numerical`

    if (asciiNumber > 64 && asciiNumber < 91) return `uppercase`

    if (asciiNumber > 96 && asciiNumber < 123) return `lowercase`

    return `a symbol`
  }

  return (
    <StyledCharacter>
      <span>"</span>
      {char}
      <span>"</span>
      {char && <h5>This character is {whatIsIt()}</h5>}
    </StyledCharacter>
  )
}
