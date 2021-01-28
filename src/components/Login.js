import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }
  handleUserInput = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]:value,
    })

  }
  handleLogin = () => {
    this.props.onUserNameChange(this.state.username)
  }

  render() {
    const { username, password} = this.state;
    return (
      <div className="Login">
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
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}
