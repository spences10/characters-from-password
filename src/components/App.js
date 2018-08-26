import React, { Component } from 'react'

import MainForm from './MainForm'
import HaveIBeenPwned from './HaveIBeenPwned'
// import { theme } from '../theme/globalStyle';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainForm />
        <HaveIBeenPwned />
      </React.Fragment>
    )
  }
}

export default App
