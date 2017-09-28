import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = { currentUser: null, errors: [] };

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type){
    case RECEIVE_CURRENT_USER:
      const newState = merge({}, state, { currentUser: action.user })
      if (newState.currentUser && newState.currentUser.followee_ids)
        newState.currentUser.followee_ids = action.user.followee_ids
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
