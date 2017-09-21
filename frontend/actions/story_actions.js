import {
  post_story, patch_story, delete_story, get_story, get_stories
} from '../util/story_util';

export const RECEIVE_STORY = "RECEIVE_STORY"
export const RECEIVE_STORIES = "RECEIVE_STORIES"
export const REMOVE_STORY = "REMOVE_STORY"
export const RECEIVE_STORY_ERRORS= "RECEIVE_STORY_ERRORS"
export const CLEAR_STORY_ERRORS = "CLEAR_STORY_ERRORS"

// Synchronous action creators
const clear_story_errors = () => ({
  type: CLEAR_STORY_ERRORS
})
const receive_story_errors = errors => ({
  type: RECEIVE_STORY_ERRORS,
  errors
})
const receive_story = story => ({
  type: RECEIVE_STORY,
  story
});

const receive_stories = stories => ({
  type: RECEIVE_STORIES,
  stories
})

const remove_story = story => ({
  type: REMOVE_STORY,
  story
})

// Asynchronous action creators -- thunk action creators
export const getStory = id => dispatch =>
  get_story(id).then(
    story => dispatch(receive_story(story))
  , errors => dispatch(receive_story_errors(errors.responseJSON))
  );

export const getStories = () => dispatch =>
  get_stories().then(
    stories => dispatch(receive_stories(stories))
  , errors => dispatch(receive_story_errors(errors.responseJSON))
  );

export const removeStory = id => dispatch =>
  delete_story(id).then(
    story => dispatch(remove_story(story))
  , errors => dispatch(receive_story_errors(errors.responseJSON))
);

export const createStory = formStory => dispatch =>
  post_story(formStory).then(
    story => dispatch(receive_story(story)).story // BRAIN HURTS
  , errors => dispatch(receive_story_errors(errors.responseJSON))
);

export const updateStory = formStory => dispatch =>
  patch_story(formStory).then(
    story => dispatch(receive_story(story))
  , errors => dispatch(receive_story_errors(errors.responseJSON))
);
