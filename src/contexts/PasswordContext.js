import React from 'react';
import hash from 'sha1';
// import { throttle } from "throttle-debounce";
import { fetchHIBPData } from '../helpers';

// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const PasswordContext = React.createContext();

export class PasswordProvider extends React.Component {
  state = {
    password: '',
    selected: 0,
    character: '',
    passwordHash: '',
    sha1: '',
    firstFiveHashChars: '',
    restHashChars: '',
    apiUrl: 'https://api.pwnedpasswords.com/range/',
    hibpHashes: [],
    passwordUsed: '',
  };

  componentDidMount() {
    console.log('=====================');
    console.log(this.state);
    console.log('=====================');
  }

  handlePasswordChange = e => {
    const password = e.target.value;
    this.setState({
      password,
      sha1: hash(password).toUpperCase(),
    });
  };

  handleSelectedChange = e => {
    const selected = e.target.value;
    this.setState({ selected });
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState.sha1 !== this.state.sha1) {
      // update string mutations from nextState
      this.setState({
        firstFiveHashChars: nextState.sha1.substring(0, 5),
        restHashChars: nextState.sha1.slice(5, nextState.sha1.length),
      });
      this.getHIBPHashes(nextState.apiUrl, nextState.sha1);
    }
  }

  //www.npmjs.com/package/throttle-debounce
  componentDidUpdate(prevProps, prevState) {
    // filter for password in hashes
    const p = this.matchHash()[0];

    if (typeof p !== 'undefined') {
      console.log('=====================');
      console.log(p.substring(p.indexOf(':') + 1, p.length));
      console.log('=====================');
    }
  }

  // filter hash list to see if password appears
  matchHash = () => {
    const hashes = this.state.hibpHashes;
    return hashes.filter(
      hash =>
        hash.substring(0, hash.indexOf(':')) ===
        this.state.restHashChars
    );
  };

  apiCallsThrottled = query => {
    this.setState({
      // hibpHashes: throttle(500, query)
    });
  };

  // get Have I Been Pwned hash list
  getHIBPHashes(apiUrl, sha1) {
    fetchHIBPData(`${apiUrl}/${sha1.substring(0, 5)}`).then(
      result => {
        this.setState({
          hibpHashes: result.data.split('\r\n'),
        });
      }
    );
  }

  render() {
    return (
      <PasswordContext.Provider
        value={{
          ...this.state,
          handlePasswordChange: this.handlePasswordChange,
          handleSelectedChange: this.handleSelectedChange,
          getHIBPHashes: this.getHIBPHashes,
        }}
      >
        {this.props.children}
      </PasswordContext.Provider>
    );
  }
}
