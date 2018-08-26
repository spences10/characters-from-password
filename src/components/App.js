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
        handlePasswordChange,
        handleSelectedChange,
        passwordHash,
        sha1,
        firstFive,
        rest,
        hibpHashes,
        getHash
      }) => (
        <React.Fragment>
          <MainForm
            password={password}
            selected={selected}
            handlePasswordChange={handlePasswordChange}
            handleSelectedChange={handleSelectedChange}
          />
          <HaveIBeenPwned
            password={password}
            passwordHash={passwordHash}
            sha1={sha1}
            firstFive={firstFive}
            rest={rest}
            hibpHashes={hibpHashes}
            getHash={getHash}
          />
        </React.Fragment>
      )}
    </PasswordContext.Consumer>
  </React.Fragment>
)

export default App
