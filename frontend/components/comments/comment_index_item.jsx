import React from 'react'
class CommentIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
      body: props.comment.body
    }
  }
  changeFactory(field){
    return ({ target: { value }}) => this.setState({ [field]: value })
  }
  handleEdit(e){
    e.preventDefault()
    this.props.editComment(this.props.comment.id)
    this.setState({
      editing: true
    })
  }
  handleDelete(e){
    e.preventDefault()
    this.props.deleteComment(this.props.comment.id)
  }
  handleUpdate(e){
    e.preventDefault()
    const { comment } = this.props
    const { body }    = this.state

    this.props.updateComment(comment, body).then(
      () => this.setState({ editing: false })
    );
  }
  handleCancel(e){
    e.preventDefault()
    this.setState({
      editing: false, body: this.props.comment.body
    })
  }
  render(){
    if (!this.state.editing)
      return this.notEditing();
    else
      return this.editing();
  }

  editing(){
    const editingActions = (
        <div>
          <button className="update-comment" onClick={this.handleUpdate.bind(this)}>
            <i className="fa fa-pencil" aria-hidden="false"></i>
            Update Comment
          </button>
          <button className="cancel-edit" onClick={this.handleCancel.bind(this)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
            Cancel
          </button>
        </div>
    );

    return (
      <div className="edit-comment">
        <textarea onChange={this.changeFactory('body').bind(this)}
                  value={this.state.body} />
        {editingActions}
      </div>
    )
  }

  notEditing(){
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
        {` - ${username}`}
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

// CommentIndexItem.prototype.editingActions = function(){
//
// }
export default CommentIndexItem;
