import { merge } from 'lodash';
import {
  CLEAR_ERRORS, RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER
 } from '../actions/session_actions';

const defaultState = { errors: [] }

const sessionErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state)

  switch (action.type){
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state.errors.session, { errors: action.errors })
    case RECEIVE_CURRENT_USER:
      return merge({}, state.errors.session, { errors: [] })
    case CLEAR_ERRORS:
      return merge({}, state.errors.session, { errors: [] })
    default:
      return state;
  }
};

export default sessionErrorsReducer;
