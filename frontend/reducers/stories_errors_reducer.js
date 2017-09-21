import { merge } from 'lodash';
import {
  CLEAR_STORY_ERRORS, RECEIVE_STORY_ERRORS, RECEIVE_STORY
 } from '../actions/story_actions';

const defaultState = { errors: [] }

const stories_errors_reducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_STORY:
    case CLEAR_STORY_ERRORS:
      return merge({}, { errors: []})
    case RECEIVE_STORY_ERRORS:
      return merge({}, oldState, { errors: action.errors })
    default:
      return oldState;
  }
};

export default stories_errors_reducer;
