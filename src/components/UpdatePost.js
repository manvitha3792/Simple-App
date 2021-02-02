import React, { Component } from 'react'

export default class UpdatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.post.title,
      content: this.props.post.content,
      id: this.props.post.id
    }
    this.myRef = React.createRef();
  }
  handleUserInput = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    this.setState({
      [name]:value,
    })
  }
  handleUpdatePost = () =>{
    const {title, content, id} = this.state;
    this.props.handleEdit({id, title, content});
  }
  render() {
    const {title, content} = this.state;
    return (
      <div className="UpdatePost">
        <form onSubmit={ e => {
          e.preventDefault();
        }}>
          <fieldset>
            <legend>UpdatePost</legend>
            <div>
              <label htmlFor="title">Title</label>
              <input 
                type="text" 
                id="title"
                value={title}
                name="title"
                autoComplete="off"
                ref={this.myRef}
                onChange={this.handleUserInput}
              />
            </div>
            <div>
              <label htmlFor="content">Content</label>
              <textarea id="content"
                rows={10}
                cols={15}
                value={content}
                name="content"
                onChange={this.handleUserInput}
              />
            </div>
            <button onClick={this.handleUpdatePost}>Update</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
