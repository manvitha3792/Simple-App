import React, { Component } from 'react'

export default class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      content:'',
      id: 1
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
  handleCreatePost = () =>{
    const {title, content, id} = this.state;
    let oldId = this.state.id;
    ++oldId;
    this.setState({
      id: oldId
    },() =>{
      this.props.onClickCreatePost({id, title, content});
    });
    this.setState({
      title:'',
      content:''
    });
    this.myRef.current.focus();
  }
  render() {
    const {title, content} = this.state;
    return (
      <div className="CreatePost">
        <form onSubmit={ e => {
          e.preventDefault();
        }}>
          <fieldset>
            <legend>CreatePost</legend>
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
              <label htmlFor="content">Title</label>
              <textarea id="content"
                rows={10}
                cols={15}
                value={content}
                name="content"
                onChange={this.handleUserInput}
              />
            </div>
            <button onClick={this.handleCreatePost}>Create</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
