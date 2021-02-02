import React, { Component, useState } from 'react'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost';

export default function PostList(props){
  const [editPosts, setEditPosts ] = useState({});

  const deletePost = (id) => {
    console.log(id)
    props.onDeletePost(id);
  }
  const editPost = (id, title, content) => {
    console.log(id, 'editing')
    setEditPosts( () => {
      return {
        [id]: true
      }
    });
  }
  const handleEdit = ({id, title, content}) => {
    props.onClickUpdatePost({id, title, content});
    editPosts[id] = false;
    setEditPosts( () => editPosts);
  }
  return (
      <div className="PostList">
        {
          (props.posts || []).map( ({id, title, content}) => {
            console.log(editPosts)
            if(editPosts[id]){
              const post = {id, title, content}
              return <UpdatePost post={post} handleEdit={handleEdit} key={id}/>
            } else {
              return (
                <div className="Post" key={id}>
                  <span>{id}</span><h3>{title}</h3>
                  <p>{content}</p>
                  <button onClick={() => deletePost(id)}>Delete</button>
                  <button onClick={() => editPost(id,title, content)}>Edit</button>
                </div>
              )
            }
          })
        }
      </div>
  )
}
