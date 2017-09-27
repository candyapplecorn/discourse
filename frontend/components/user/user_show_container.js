import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserShow from './user_show';
import { patchUser, getUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const uid = ownProps.match.params.id
  const { currentUser } = state.session

  return {
    user: state.users[uid] // if no user, should show <Loading />
  , viewingSelf: currentUser && currentUser.id == uid
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUser: userId => dispatch(getUser(ownProps.match.params.id))
, patchUser: user => dispatch(patchUser(user))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow))
