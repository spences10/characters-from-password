import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import {
  PasswordProvider,
  PasswordContext
} from './contexts/PasswordContext'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <PasswordProvider>
    <PasswordContext.Consumer>
      {({
        password,
        selected,
        character,
        passwordHash,
        sha1,
        firstFive,
        rest,
        hibpHashes
      }) => (
        <App
          password={password}
          selected={selected}
          character={character}
          passwordHash={passwordHash}
          sha1={sha1}
          firstFive={firstFive}
          rest={rest}
          hibpHashes={hibpHashes}
        />
      )}
    </PasswordContext.Consumer>
  </PasswordProvider>,
  document.getElementById('root')
)
registerServiceWorker()
