import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.section`
  grid-area: character;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize['5xl']};
  font-family: ${({ theme }) => theme.font.monospace};
  span {
    font-family: ${({ theme }) => theme.font.sans};
  }
  p {
    min-height: ${({ theme }) => theme.spacing['12']};
    font-size: ${({ theme }) => theme.fontSize.xl};
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
      <p>{char && <p>This character is {whatIsIt()}</p>}</p>
    </StyledCharacter>
  )
}
