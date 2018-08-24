import React from 'react'
import hash from 'sha1'

class HaveIBeenPwned extends React.Component {
  state = {
    sha1: null,
    firstFiveHashChars: '',
    restHashChars: ''
  }

  componentDidUpdate() {
    this.setState({ sha1: hash(this.props.password) })
  }
  componentDidMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <React.Fragment>
        <p>{this.sha1}</p>
        {/* <p>{hash(this.props.password)}</p> */}
      </React.Fragment>
    )
  }
}

export default HaveIBeenPwned
