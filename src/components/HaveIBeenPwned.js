import React from 'react'
import hash from 'sha1'

class HaveIBeenPwned extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.password}</p>
        <p>{hash(this.props.password)}</p>
      </React.Fragment>
    )
  }
}

export default HaveIBeenPwned
