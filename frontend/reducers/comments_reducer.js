import { merge } from 'lodash'
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions'

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  const { comment, comments } = action

  switch(action.type){
    case RECEIVE_COMMENTS:
      return comments
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[comment.id]: comment})
    case REMOVE_COMMENT:
      const newState = merge({}, oldState)
      delete newState[comment.id]
      return newState
    default:
      return oldState
  }
}

export default commentsReducer;
