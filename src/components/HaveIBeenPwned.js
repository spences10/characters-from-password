import React from 'react'

import { Dump } from '../helpers'

const HaveIBeenPwned = ({
  password,
  passwordHash,
  sha1,
  firstFive,
  rest,
  hibpHashes
}) => {
  return (
    <React.Fragment>
      <Dump
        password={password}
        sha1={sha1}
        // firstFive={getHash(password).substring(0, 5)}
        // rest={getHash(password).slice(5, getHash(password).length)}
      />
      {/* <p>{hash(this.props.password)}</p> */}
    </React.Fragment>
  )
}
export default HaveIBeenPwned
