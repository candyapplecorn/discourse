import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// DEBUG
import * as CommentAPIUtil from './util/comment_api_util';
import * as SessionAPIUtil from './util/session_api_util';
import * as SessionActions from './actions/session_actions';
import * as StoryActions from './actions/story_actions';
import * as StoryAPIUtil from './util/story_util';
// END DEBUG

document.addEventListener('DOMContentLoaded', () => {
  const store = getConfiguredStore(window);
  const panda = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, panda);

  debugging(store);
});

function getConfiguredStore({ currentUser }){
  if (!currentUser)
    return configureStore()

  let preloadedState = { session: { currentUser }}
  return configureStore(preloadedState)
}

function debugging(store){
    window.postSignup = SessionAPIUtil.postSignup
    window.postLogin = SessionAPIUtil.postLogin
    window.postLogout = SessionAPIUtil.deleteLogout
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.SessionsActions = SessionActions;
    window.StoryActions = StoryActions;
    window.StoryAPIUtil = StoryAPIUtil
    window.CommentAPIUtil = CommentAPIUtil
}
