import { merge } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  getComments, createComment, deleteComment, updateComment
} from '../../actions/comment_actions';
import { story_comments } from '../../selectors/comments_selector';
import CommentsIndex from './comments_index';

const mapStateToProps = (state, ownProps) => ({
  comments: story_comments(state, ownProps.match.params.id)
, loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownParams) => ({
  getComments: () => dispatch(getComments(ownParams.match.params.id))
, createComment: comment => dispatch(
    createComment(ownParams.match.props.id, comment)
  )
, deleteComment: commentId => dispatch(deleteComment(commentId))
, updateComment: (comment, body) => dispatch(updateComment(
    merge(comment, { body })
  ))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex));
