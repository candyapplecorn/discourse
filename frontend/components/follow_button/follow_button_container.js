import FollowButton from './follow_button'
import { connect } from 'react-redux'
import { createFollow, deleteFollow } from '../../actions/follow_actions'

const mapStateToProps => (state, ownProps) => {
  const { id } = ownProps;
  const { currentUser } = state.session
  const followee_ids = currentUser ? currentUser.followee_ids : []

  return {
    following: id in followee_ids,
    hidden: Boolean(state.currentUser)
  };
};

return mapDispatchToProps = (dispatch, ownProps) => ({
  createFollow: () => dispatch(createFollow(ownProps.id)),
  deleteFollow: () => dispatch(deleteFollow(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
