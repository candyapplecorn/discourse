import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// DEBUG
import * as SessionAPIUtil from './util/session_api_util';
// END DEBUG

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const panda = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, panda);

  debugging(store);
});

function debugging(store){
    window.signup = SessionAPIUtil.postSignup
    window.login = SessionAPIUtil.postLogin
    window.logout = SessionAPIUtil.deleteLogout
    window.getState = store.getState
    window.dispatch = store.dispatch
}
