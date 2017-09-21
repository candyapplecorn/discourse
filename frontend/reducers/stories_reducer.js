import { RECEIVE_STORY, RECEIVE_STORIES, REMOVE_STORY } from '../actions/story_actions';
import { merge } from 'lodash'

const storiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  const { story, stories } = action;

  switch (action.type){
    case RECEIVE_STORIES:
      return action.stories
    case RECEIVE_STORY:
      return merge({}, oldState, { [story.id]: story })
    case REMOVE_STORY:
      return Object.values(oldState).reduce((acc, st) => {
        (st.id != action.id) && (acc[st.id] = st);
        return acc
      }, {})
    default:
      return oldState;
  }
};

export default storiesReducer;
