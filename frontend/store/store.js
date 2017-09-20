import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        logger
      )
    )
  )
;

export default configureStore
