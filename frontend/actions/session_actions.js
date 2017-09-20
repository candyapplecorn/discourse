import { postSignup, postLogin, deleteLogout } from '../util/session_api_util';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receive_current_user = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receive_session_errors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = formUser => dispatch =>
  postLogin(formUser).then(
    user => dispatch(receive_current_user(user))
  , errors => dispatch(receive_session_errors(errors.responseJSON)))
;

export const logout = () => dispatch =>
  deleteLogout().then(
    blank => dispatch(receive_current_user(null))
  , errors => dispatch(receive_session_errors(errors.responseJSON)))
;

export const signup = formUser => dispatch =>
  postSignup(formUser).then(
    user => dispatch(receive_current_user(user))
  , errors => dispatch(receive_session_errors(errors.responseJSON)))
;
