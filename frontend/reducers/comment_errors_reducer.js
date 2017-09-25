import {
  RECEIVE_COMMENT_ERRORS, RECEIVE_COMMENT, RECEIVE_COMMENTS
} from '../actions/comment_actions'

const DEFAULT_STATE = { errors: [] }

const comment_errors_reducer = (oldState = DEFAULT_STATE, action) => {
  Object.freeze(oldState)

  switch(action.type){
    case RECEIVE_COMMENT_ERRORS:
      return { errors: action.errors }
    case RECEIVE_COMMENT:
    case RECEIVE_COMMENTS:
      return Object.assign({}, DEFAULT_STATE)
    default:
      return oldState
  }

}

export default comment_errors_reducer;
