import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = { errors: [] }

const sessionErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type){
    case RECEIVE_SESSION_ERRORS:
      debugger
      return merge({}, state, { errors: action.errors })
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { errors: [] })
    default:
      return state;
  }
};

export default sessionErrorsReducer;
