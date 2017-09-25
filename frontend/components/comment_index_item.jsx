import React from 'react'
class CommentIndexItem extends React.Component {
  constructor(props){
    super(props)
  }
  handleClick(e){
    e.preventDefault()
    this.props.editComment(this.props.comment.id)
  }
  render(){
    return (
      <div>
        <h3>Hi from commentindexitem!</h3>
        <p>
          {this.props.comment.body}
        </p>
        <button onClick={this.handleClick.bind(this)}>
          Edit Comment
        </button>
      </div>
    )
  }
}
export default CommentIndexItem;
