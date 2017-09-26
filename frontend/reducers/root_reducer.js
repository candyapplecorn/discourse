import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import storiesReducer from './stories_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  stories: storiesReducer,
  comments: commentsReducer,
  likes: likesReducer,
  errors: errorsReducer
})

export default rootReducer;
