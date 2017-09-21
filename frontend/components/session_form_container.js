import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router';
import { signup, login, clear_errors } from '../actions/session_actions';

const getFormType = ({ location: { pathname } }) =>
  /login/.test(pathname) ? 'login' : 'signup'
;

const getFormAction = ownProps =>
  getFormType(ownProps) == 'login' ? login : signup
;

const createAction = (action, dispatch) => formUser =>
  dispatch(action(formUser))
;

const NEW_USER = { username: '', email: '', password: '' };

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser || NEW_USER,
  loggedIn: Boolean(state.session.currentUser),
  formType: getFormType(ownProps),
  errors: state.errors.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitForm: createAction(getFormAction(ownProps), dispatch),
  clearErrors: () => dispatch(clear_errors()),
  login: (formUser) => dispatch(login(formUser))
});

const SessionFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));

export default SessionFormContainer
