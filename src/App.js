import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration  from './components/Registration'
import Logout from './components/Logout';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:''
    }
  }
  onUserNameChange = (username) =>{
    this.setState({
      username: username
    })
  }
  onLogoutClick = () =>{
    this.setState({
      username:''
    })
  }
  render(){
    const {username, password} = this.state;
    return (
      <div className="App">
        {!this.state.username && <Login onUserNameChange={this.onUserNameChange} />}
        {
          !this.state.username && <Registration onUserNameChange={this.onUserNameChange}/>
        }
        {
          this.state.username && <Logout username={this.state.username} onLogoutClick={this.onLogoutClick}/>
        }
      </div>
    );
  }
}

export default App;
