import React from 'react'
class CommentIndexItem extends React.Component {
  constructor(props){
    super(props)
  }
  handleEdit(e){
    e.preventDefault()
    this.props.editComment(this.props.comment.id)
  }
  handleDelete(e){
    e.preventDefault()
    this.props.deleteComment(this.props.comment.id)
  }
  render(){
    const { comment: { currentIsAuthor, author: { username } }} = this.props

    const authorActions = (
        <div>
        <button className="edit-comment" onClick={this.handleEdit.bind(this)}>
          <i className="fa fa-pencil" aria-hidden="false"></i>
          Edit Comment
        </button>
        <button className="delete-comment" onClick={this.handleDelete.bind(this)}>
          <i className="fa fa-trash" aria-hidden="true"></i>
          Delete Comment
        </button>
        </div>
    );

    const authorDetails = (
      <em>
        {username}
      </em>
    )

    return (
      <div>
        <p>
          {this.props.comment.body}
        </p>
        {currentIsAuthor ? authorActions : authorDetails}
      </div>
    )
  }
}
export default CommentIndexItem;
