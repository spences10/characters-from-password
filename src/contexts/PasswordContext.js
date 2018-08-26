import React from 'react'
import hash from 'sha1'
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
    firstFive: '',
    rest: '',
    hibpHashes: []
  }

  handlePasswordChange = e => {
    const password = e.target.value
    this.setState({ password })
  }

  handleSelectedChange = e => {
    const selected = e.target.value
    this.setState({ selected })
  }

  getHash = stringToHash => {
    this.setState({
      sha1: hash(stringToHash)
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
          getHash: this.getHash,
          getHIBPHashes: this.getHIBPHashes
        }}
      >
        {this.props.children}
      </PasswordContext.Provider>
    )
  }
}
