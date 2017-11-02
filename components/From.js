import React from 'react'

export default class Form extends React.Component {
  state = {
    password: '',
    selected: 0
  }

  render(){
    // make variable to store the options in from <input>
    const items = [...this.state.password]

    const list = items.map((item, index) => {
      // console.log('====================')
      // console.log(item)
      // console.log('====================')
      return (
        <option key={index}>{index}</option>
      )
    })
    
    // console.log('====================')
    // console.log(items)
    // console.log('====================')

    return (
      <form>
        <input 
          type='password'
          placeholder='Pasta password here'
          value={this.state.password}
          onChange={e => this.setState({password: e.target.value})}
        />
        <select
          onChange={e => this.setState({selected: e.target.value})}
        >
          {list}
        </select>
      </form>
    )
  }
}

