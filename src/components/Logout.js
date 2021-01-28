import React, { Component } from 'react'

export default class Logout extends Component {
  handleLogout = () =>{
    this.props.onLogoutClick();
  }
  render() {
    return (
      <div className="Logout">
        <b><span>{this.props.username}</span></b>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}


//1. create post
/**
 * 1. one input box for title
 * 2. one text area for content
 * 3. button for create post
 */

//2. list posts
/**
 * takes the post from create post, add it to the list of posts.
 */
