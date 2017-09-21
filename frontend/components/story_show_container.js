import { connect } from 'react-redux'
import { withRouter } from  'react-router'
import { getStory } from '../actions/story_actions';
import StoryShow from './story_show'

const EMPTY_STORY = {
  body: '', title: '', author: {}
};

const mapStateToProps = (state, ownProps) => {
  const story = state.stories[ownProps.match.params.id]
  const author = story ? story.author : {}

  return {
    story: story || EMPTY_STORY
  , author
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getStory: () => dispatch(getStory(ownProps.match.params.id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow))
