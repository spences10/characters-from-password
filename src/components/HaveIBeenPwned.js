import React from 'react'

import { Dump } from '../helpers'

const HaveIBeenPwned = ({
  password,
  passwordHash,
  sha1,
  restHashChars,
  hibpHashes
}) => {
  return (
    <React.Fragment>
      <Dump
        password={password}
        sha1={sha1}
        firstFive={sha1.substring(0, 5)}
        rest={sha1.slice(5, sha1.length)}
      />
      {/* <p>{hash(this.props.password)}</p> */}
    </React.Fragment>
  )
}
export default HaveIBeenPwned
