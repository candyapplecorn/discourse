import {
  postStory, patchStory, deleteStory, getStory, getStories
} from '../util/story_util';

export const FETCH_STORY = "FETCH_STORY"
export const FETCH_STORIES = "FETCH_STORIES"
export const REMOVE_STORY = "REMOVE_STORY"
export const UPDATE_STORY = "UPDATE_STORY"
export const CREATE_STORY = "CREATE_STORY"

export const RECEIVE_STORY = "RECEIVE_STORY"
export const RECEIVE_STORIES = "RECEIVE_STORIES"
export const REMOVE_STORY = "REMOVE_STORY"

// Synchronous action creators
receive_story = story => ({
  type: RECEIVE_STORY
  story
});

receive_stories = stories => ({
  type: RECEIVE_STORIES,
  stories
})

remove_story = story => ({
  type: REMOVE_STORY,
  story
})

// Asynchronous action creators -- thunk action creators
export const fetch_story = id => dispatch =>
  getStory(id).then(story => dispatch(receive_story(story)));

export const fetch_stories = () => dispatch =>
  getStories().then(stories => dispatch(receive_stories(stories)));

export const remove_story = id => dispatch =>
  deleteStory(id).then(story => dispatch(remove_story(story)));

export const create_story = formStory => dispatch =>
  postStory(formStory).then(story => dispatch(receive_story(story)));

export const update_story = formStory => dispatch =>
  patchStory(formStory).then(story => dispatch(receive_story(story)));
