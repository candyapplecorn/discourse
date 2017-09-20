import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup, login } from '../actions/session_actions'

const getFormType = ({ match: { path } }) =>
  /login/.test(path) ? 'login' : 'signup'
;

const getFormAction = ownProps =>
  getFormType(ownProps) == 'login' ? login : signup
;

const createAction = (action, dispatch) => formUser =>
  dispatch(action(formUser))
;

const NEW_USER = { username: '', email: '', password: '' };

const mapStateToProps = state => ({
  user: state.session.currentUser || NEW_USER,
  formType: getFormType(ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    submitForm: createAction(getFormAction(ownProps), dispatch)
});

const SessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export default SessionFormContainer
