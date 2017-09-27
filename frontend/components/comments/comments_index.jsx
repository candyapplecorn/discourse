import React from 'react'
import CommentIndexItem from './comment_index_item'
import CommentFormContainer from './comment_form_container'

class CommentsIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = { editing: null }
  }
  componentDidMount(){
    this.props.getComments()
  }
  componentWillReceiveProps(newProps){
    this.setState({ editing: null })
  }
  editComment(id){
    this.setState({ editing: id })
  }
  deleteComment(id){
    this.props.deleteComment(id)
  }
  render(){
    return (
      <div className="comments-index" id="comments">
      {this.props.loggedIn && <CommentFormContainer editing={this.state.editing} />}
      <ul>
      {
        this.props.comments.map((c, i) =>
          <CommentIndexItem key={i + c.body}
                            comment={c}
                            editComment={this.editComment.bind(this)}
                            deleteComment={this.deleteComment.bind(this)}
                            updateComment={this.props.updateComment}
                             />
        )
      }
      </ul>
      </div>
    );
  }
}

export default CommentsIndex;
