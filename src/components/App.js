import React from 'react'

import MainForm from './MainForm'
import HaveIBeenPwned from './HaveIBeenPwned'

import { PasswordContext } from '../contexts/PasswordContext'
// import { theme } from '../theme/globalStyle';

const App = () => (
  <React.Fragment>
    <PasswordContext.Consumer>
      {({ password, selected, character }) => (
        <React.Fragment>
          <MainForm
            password={password}
            selected={selected}
            character={character}
          />
          <HaveIBeenPwned
            passwordHash={passwordHash}
            sha1={sha1}
            firstFive={firstFive}
            rest={rest}
            hibpHashe={hibpHashe}
          />
        </React.Fragment>
      )}
    </PasswordContext.Consumer>
  </React.Fragment>
)

export default App
