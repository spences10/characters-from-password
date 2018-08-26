import React from 'react'
import hash from 'sha1'
// import { throttle } from "throttle-debounce";

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
      console.log('=====================')
      console.log(this.state.password)
      console.log('=====================')
    }
  }

  apiCallsThrottled = query => {
    this.setState({
      // hibpHashes: throttle(500, query)
    })
  }

  getHIBPHashes() {}

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
