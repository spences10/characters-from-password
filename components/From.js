import React from 'react'

export default class Form extends React.Component {
  state = {
    password: '',
    selected: 0,
    character: ''
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('====================')
    console.log(nextProps)
    console.log('====================')
    console.log('====================')
    console.log(nextState)
    console.log('====================')
  }

  render(){
    // make variable to store the options in from <input>
    const items = [...this.state.password]

    // map over contents of items to make <options>
    // use index for unique key and also option
    const list = items.map((item, index) => {
      // console.log('====================')
      // console.log(item)
      // console.log('====================')
      // if (index===0) {
      //   return (
      //     <option key={index}>Select Character</option>
      //   )
      // } else {
        return (
          <option 
            key={index}
            letter={item}
          >
            {index}
          </option>
        )
      // }
    })

    // console.log('====================')
    // console.log(items)
    // console.log('====================')

    const characterFromPassword = this.state.password.charAt(this.state.selected) 
    // characterFromPassword = characterFromPassword.charAt(this.state.selected)

    return (
      <div>
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
        <label>{characterFromPassword}</label>
      </div>
    )
  }
}

