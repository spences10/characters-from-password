import React from 'react'

export const SelectedCharacter = ({ char }) => {
  function whatIsIt() {
    const asciiNumber = char.charCodeAt(0)

    return String.fromCharCode(asciiNumber)
  }

  return (
    <section>
      <span>"</span>
      {char}
      <span>"</span>
    </section>
  )
}
