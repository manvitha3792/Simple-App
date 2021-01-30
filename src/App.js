import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration  from './components/Registration'
import Logout from './components/Logout';
import { Component } from 'react';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      title: '',
      content:'',
      posts: []
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
  onClickCreatePost = ({id, title, content}) => {
    let newPosts = [...this.state.posts, {id, title, content}];
    this.setState({
      posts: newPosts,
      title: title,
      content: content
    })
  }
  onDeletePost = (id) => {
    let { posts: oldPosts } = this.state;
    const newPosts = [...oldPosts].filter( post => post.id !== id);
    this.setState({
      posts: newPosts
    })
  }
  onClickUpdatePost = ({id, title, content}) => {
    let { posts: oldPosts } = this.state;
    const newPosts = oldPosts.map( post => {
      if(post.id===id){
        return {
          id, 
          title, 
          content
        }
      }
      return post;
    });
    this.setState({
      posts: newPosts
    })
  }
  render(){
    return (
      <div className="App">
        {!this.state.username && <Login onUserNameChange={this.onUserNameChange} />}
        {
          !this.state.username && <Registration onUserNameChange={this.onUserNameChange}/>
        }
        {
          this.state.username && <Logout username={this.state.username} onLogoutClick={this.onLogoutClick}/>
        }
        {
          this.state.username &&  <CreatePost onClickCreatePost={this.onClickCreatePost} />
        }
        {
          this.state.username && this.state.posts && <PostList posts={this.state.posts} onClickUpdatePost={this.onClickUpdatePost} onDeletePost={this.onDeletePost}/>
        }
      </div>
    );
  }
}

export default App;
