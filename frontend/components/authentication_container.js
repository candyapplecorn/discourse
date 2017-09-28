import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { withRouter } from 'react-router'
import Authentication from './authentication';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
})
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

const AuthenticationContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication));

export default AuthenticationContainer
