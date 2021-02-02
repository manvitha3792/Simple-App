import React, { Component } from 'react'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost';

const Post =({id, title, content}) => {
  return (
    <div className="Post">
      <span>{id}</span><h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default class PostList extends Component{
  constructor(props){
    super(props);
    this.state ={
      editPosts: {}
    }
  }
  deletePost = (id) => {
    this.props.onDeletePost(id);
  }
  editPost = (id, title, content) => {
    const {editPosts} = this.state;
     editPosts[id] = true;
    this.setState({
      editPosts
    })
  }
  handleEdit = ({id, title, content}) => {
    this.props.onClickUpdatePost({id, title, content});
    const {editPosts} = this.state;
    editPosts[id] = false;
   this.setState({
     editPosts
   })
  }

  render(){
    return (
      <div className="PostList">
        {
          (this.props.posts || []).map( ({id, title, content}) => {
            if(this.state.editPosts[id]){
              const post = {id, title, content}
              return <UpdatePost post={post} handleEdit={this.handleEdit} key={id}/>
            } else {
              return (
                <div className="Post" key={id}>
                  <span>{id}</span><h3>{title}</h3>
                  <p>{content}</p>
                  <button onClick={() => this.deletePost(id)}>Delete</button>
                  <button onClick={() => this.editPost(id,title, content)}>Edit</button>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}
