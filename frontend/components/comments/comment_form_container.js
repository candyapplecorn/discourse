import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createComment, updateComment } from '../../actions/comment_actions';
import CommentForm from './comment_form'

const DEFAULT_COMMENT = {
  body: '',
  id: null
}

const mapStateToProps = (state, ownProps) => {
  let comment = DEFAULT_COMMENT
  let formType = 'new'

  /*
  Since comments may be edited in-line, the new comment form no longer needs
  its dual functionality. Rather than removing it, however, I've chosen to move
  on to implementing other required MVP features.
  */
  if (false){//ownProps.editing != null){
    comment = state.comments[ownProps.editing]
    formType = 'edit'
  }

  return { formType, comment }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = comment => dispatch(createComment(ownProps.match.params.id, comment))

  /*
  See above comment.
  */
  if (false)//ownProps.editing != null)
    action = comment =>{ dispatch(updateComment(comment)) }

  return {
    submitComment: action
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm))
