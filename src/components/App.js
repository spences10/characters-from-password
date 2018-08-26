import React from 'react'

import MainForm from './MainForm'
import HaveIBeenPwned from './HaveIBeenPwned'

import { PasswordContext } from '../contexts/PasswordContext'
// import { theme } from '../theme/globalStyle';

const App = () => (
  <React.Fragment>
    <PasswordContext.Consumer>
      {({ password, selected, character }) => (
        <MainForm
          password={password}
          selected={selected}
          character={character}
        />
      )}
    </PasswordContext.Consumer>

    <HaveIBeenPwned />
  </React.Fragment>
)

export default App
