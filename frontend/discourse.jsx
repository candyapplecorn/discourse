import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// DEBUG
import * as SessionAPIUtil from './util/session_api_util';
import * as SessionActions from './actions/session_actions';
// END DEBUG

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const panda = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, panda);

  debugging(store);
});

function debugging(store){
    window.postSignup = SessionAPIUtil.postSignup
    window.postLogin = SessionAPIUtil.postLogin
    window.postLogout = SessionAPIUtil.deleteLogout
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.SessionsActions = SessionActions;
}
