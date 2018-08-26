import React from 'react'

import MainForm from './MainForm'
import HaveIBeenPwned from './HaveIBeenPwned'

import { PasswordContext } from '../contexts/PasswordContext'
// import { theme } from '../theme/globalStyle';

const App = () => (
  <React.Fragment>
    <PasswordContext.Consumer>
      {({
        password,
        selected,
        character,
        handlePasswordChange,
        handleSelectedChange,
        passwordHash,
        sha1,
        firstFive,
        rest,
        hibpHashes
      }) => (
        <React.Fragment>
          <MainForm
            password={password}
            selected={selected}
            character={character}
            handlePasswordChange={handlePasswordChange}
            handleSelectedChange={handleSelectedChange}
          />
          <HaveIBeenPwned
            passwordHash={passwordHash}
            sha1={sha1}
            firstFive={firstFive}
            rest={rest}
            hibpHashes={hibpHashes}
          />
        </React.Fragment>
      )}
    </PasswordContext.Consumer>
  </React.Fragment>
)

export default App
