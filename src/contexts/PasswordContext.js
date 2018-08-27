import React from 'react'
import hash from 'sha1'
// import { throttle } from "throttle-debounce";

import { fetchHIBPData } from '../helpers'

// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const PasswordContext = React.createContext()

export class PasswordProvider extends React.Component {
  state = {
    password: '',
    selected: 0,
    character: '',
    passwordHash: '',
    sha1: '',
    firstFiveHashChars: '',
    restHashChars: '',
    apiUrl: 'https://api.pwnedpasswords.com/range/',
    hibpHashes: []
  }

  handlePasswordChange = e => {
    const password = e.target.value
    this.setState({
      password,
      sha1: hash(password)
    })
  }

  handleSelectedChange = e => {
    const selected = e.target.value
    this.setState({ selected })
  }

  //www.npmjs.com/package/throttle-debounce
  componentDidUpdate(prevProps, prevState) {
    if (prevState.password !== this.state.password) {
      // this.state.password
      // console.log('=====================')
      // console.log(this.state)
      // console.log('=====================')
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.sha1 !== this.state.sha1) {
      // update string mutations from nextState
      this.setState({
        firstFiveHashChars: nextState.sha1.substring(0, 5),
        restHashChars: nextState.sha1.slice(5, nextState.sha1.length)
      })
      // console.log('=====================')
      // console.log(nextState.sha1)
      // console.log('=====================')
      this.getHIBPHashes(nextState.apiUrl, nextState.sha1)
    }
  }

  apiCallsThrottled = query => {
    this.setState({
      // hibpHashes: throttle(500, query)
    })
  }

  getHIBPHashes(apiUrl, sha1) {
    fetchHIBPData(`${apiUrl}/${sha1.substring(0, 5)}`).then(
      result => {
        console.log('=====================')
        console.log(result.data)
        console.log('=====================')
      }
    )
  }

  render() {
    return (
      <PasswordContext.Provider
        value={{
          ...this.state,
          handlePasswordChange: this.handlePasswordChange,
          handleSelectedChange: this.handleSelectedChange,
          getHIBPHashes: this.getHIBPHashes
        }}
      >
        {this.props.children}
      </PasswordContext.Provider>
    )
  }
}
