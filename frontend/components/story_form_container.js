import { connect } from 'react-redux';
import { logout } from '../actions/story_actions';
import { withRouter } from 'react-router'
import { createStory, updateStory, removeStory } from '../actions/story_actions';
import StoryForm from './story_form';

const getFormType = ({ location: { pathname } }) =>
  /new/.test(pathname) ? 'new' : 'edit'
;

const getFormAction = ownProps =>
  getFormType(ownProps) == 'new' ? createStory : updateStory
;

const createAction = (action, dispatch) => formStory =>
  dispatch(action(formStory))
;

const NEW_STORY = { title: '', body: '' };

const mapStateToProps = (state, ownProps) => ({
  story: getFormType(ownProps) == 'new' ?
          NEW_STORY :
          state.stories[ownProps.match.params.id]
, state.errors.stories.errors
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm))
