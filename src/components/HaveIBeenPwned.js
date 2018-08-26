import React from 'react'
// import hash from 'sha1'

import { Dump } from '../helpers'

class HaveIBeenPwned extends React.Component {
  // getHash(stringToHash) {
  //   return hash(stringToHash)
  // }

  getHIBPHashes() {}

  render() {
    return (
      <React.Fragment>
        <Dump
        // password={this.props.password}
        // sha1={this.getHash(this.props.password)}
        // firstFive={this.getHash(this.props.password).substring(
        //   0,
        //   5
        // )}
        // rest={this.getHash(this.props.password).slice(
        //   5,
        //   this.getHash(this.props.password).length
        // )}
        />
        {/* <p>{hash(this.props.password)}</p> */}
      </React.Fragment>
    )
  }
}

export default HaveIBeenPwned
