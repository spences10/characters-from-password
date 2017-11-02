import React from 'react'

export default class Form extends React.Component {
  state = {
    password: ''
  }

  render(){
    // make variable to store the options in from <input>
    const items = this.state.password

    return (
      <form>
        <input 
          type='password'
          placeholder='Pasta password here'
          value={this.state.password}
          onChange={e => this.setState({password: e.target.value})}
        />
        <select></select>
      </form>
    )
  }
}

