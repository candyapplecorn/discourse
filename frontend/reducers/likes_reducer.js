import { RECEIVE_LIKES } from '../actions/like_actions'
import { RECEIVE_STORY } from '../actions/story_actions'

const DEFAULT_STATE = {
  story_id: null,
  num_likes: null,
  current_user_likes: null
}

const likesReducer = (state = DEFAULT_STATE, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_STORY:
      const {
        current_user_likes, id: story_id, likes: num_likes
      } = action.story;

      return {
        current_user_likes
      , story_id
      , num_likes
      };
    case RECEIVE_LIKES:
      return action.likes || state
    default:
      return state;
  }
}

export default likesReducer;
