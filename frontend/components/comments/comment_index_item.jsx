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
    const { comment: { currentIsAuthor, author: { username } }} = this.props

    const authorActions = (
        <button className="edit-comment" onClick={this.handleClick.bind(this)}>
          <i className="fa fa-pencil" aria-hidden="false"></i>
          Edit Comment
        </button>
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
