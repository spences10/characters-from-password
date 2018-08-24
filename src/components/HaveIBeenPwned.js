import React from 'react';
import hash from 'sha1';

import { Dump } from '../helpers';

class HaveIBeenPwned extends React.Component {
  state = {
    sha1: null,
    firstFiveHashChars: '',
    restHashChars: ''
  };

  componentDidUpdate() {}

  componentDidMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <React.Fragment>
        <p>{this.sha1}</p>
        <Dump props={this.props.password} />
        {/* <p>{hash(this.props.password)}</p> */}
      </React.Fragment>
    );
  }
}

export default HaveIBeenPwned;
