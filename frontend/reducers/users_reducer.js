import { merge } from 'lodash'
import { RECEIVE_USER } from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state)

  switch(action.type){
    case RECEIVE_USER:
      const { user, user: { id } } = action
      return merge({}, state, {[id]: user})
    default:
      return state;
  }
}

export default usersReducer;
