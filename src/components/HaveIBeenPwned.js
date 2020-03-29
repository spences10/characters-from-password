import React from 'react';
import { Dump } from '../helpers';

const HaveIBeenPwned = ({
  password,
  sha1,
  firstFiveHashChars,
  restHashChars,
  hibpHashes,
}) => {
  return (
    <>
      <Dump
        password={password}
        sha1={sha1}
        firstFiveHashChars={firstFiveHashChars}
        restHashChars={restHashChars}
      />
      {/* <p>{hash(this.props.password)}</p> */}
    </>
  );
};
export default HaveIBeenPwned;
