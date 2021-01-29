import React from 'react'

const Post =({id, title, content}) => {
  return (
    <div className="Post">
      <span>{id}</span><h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export const PostList = ({posts}) => {
  return (
    <div className="PostList">
      {
        (posts || []).map( post => <Post key={post.id} {...post}/> )
      }
    </div>
  )
}
