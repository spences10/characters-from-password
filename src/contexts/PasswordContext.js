import React from 'react'
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

  getHash = () => {
    this.setState({
      item1: 2,
      item2: 3
    })
  }

  getHIBPHashes() {}

  render() {
    return (
      <PasswordContext.Provider
        value={{
          ...this.state,
          getHash: this.getHash,
          getHIBPHashes: this.getHIBPHashes
        }}
      >
        {this.props.children}
      </PasswordContext.Provider>
    )
  }
}
