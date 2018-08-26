import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { PasswordProvider } from './contexts/PasswordContext'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <PasswordProvider>
    <App />
  </PasswordProvider>,
  document.getElementById('root')
)
registerServiceWorker()
