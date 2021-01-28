import React, { Component } from 'react'

export default class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      reenterpassword:''
    }
  }
  handleUserInput = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]:value,
    })

  }
  handleRegister = () => {
    this.props.onUserNameChange(this.state.username)
  }

  render() {
    const { username, password, reenterpassword} = this.state;
    return (
      <div className="Registration">
        <div>
          <label htmlFor="username" >UserName</label>
          <input
            placeholder="username"
            type="text"
            name="username"
            id="username"
            value={username}
            autoComplete="off"
            onChange={this.handleUserInput}
          />
        </div>

        <div>
        <label htmlFor="password" >Password</label>
        <input 
            type="password"
            placeholder="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleUserInput}
          />
      </div>
      <div>
        <label htmlFor="reenterpassword" >Password</label>
        <input 
            type="password"
            placeholder="re enter password"
            name="reenterpassword"
            id="reenterpassword"
            value={reenterpassword}
            onChange={this.handleUserInput}
          />
      </div>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}
