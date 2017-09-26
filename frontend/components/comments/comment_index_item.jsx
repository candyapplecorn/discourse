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
    const authorActions = (
        <button className="edit-comment" onClick={this.handleClick.bind(this)}>
          <i className="fa fa-pencil" aria-hidden="false"></i>
          Edit Comment
        </button>
    );

    return (
      <div>
        <p>
          {this.props.comment.body}
        </p>
        {this.props.comment.currentIsAuthor && authorActions}
      </div>
    )
  }
}
export default CommentIndexItem;
