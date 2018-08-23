import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import MainForm from './components/MainForm'
// import { theme } from '../theme/globalStyle';

import { sha1 } from './helpers'

console.log('=====================')
console.log(sha1('hello'))
console.log('=====================')

class App extends Component {
  render() {
    return (
      <div>
        <MainForm />
      </div>
    )
  }
}

export default App
