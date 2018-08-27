import React from 'react'

import { Dump } from '../helpers'

const HaveIBeenPwned = ({
  password,
  passwordHash,
  sha1,
  firstFiveHashChars,
  restHashChars,
  hibpHashes
}) => {
  return (
    <React.Fragment>
      <Dump
        password={password}
        sha1={sha1}
        firstFiveHashChars={firstFiveHashChars}
        restHashChars={restHashChars}
      />
      {/* <p>{hash(this.props.password)}</p> */}
    </React.Fragment>
  )
}
export default HaveIBeenPwned
