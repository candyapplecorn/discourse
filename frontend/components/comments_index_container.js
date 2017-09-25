import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  getComments, createComment, deleteComment
} from '../actions/comment_actions';
import { story_comments } from '../selectors/comments_selector';
import CommentsIndex from './comments_index';

const mapStateToProps = (state, ownProps) => ({
  comments: story_comments(state, ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch, ownParams) => ({
  getComments: () => dispatch(getComments(ownParams.match.params.id))
, createComment: comment => dispatch(
    createComment(ownParams.match.props.id, comment)
  ),
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex));
