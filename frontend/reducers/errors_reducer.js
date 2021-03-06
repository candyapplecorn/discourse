import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import storiesErrorsReducer from './stories_errors_reducer';
import commentsErrorsReducer from './comment_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  stories: storiesErrorsReducer,
  comments: commentsErrorsReducer
});

export default errorsReducer;
