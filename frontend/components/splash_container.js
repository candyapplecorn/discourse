import { connect } from 'react-redux'
import Splash from './splash'

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export default connect(
  mapStateToProps,
  undefined
)(Splash)
