import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production'){
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const configureStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        ... middlewares
      )
    )
  )
;

export default configureStore
