import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getStories } from '../actions/story_actions';
import StoryIndex from './story_index.jsx';

const mapStateToProps = state => ({
  stories: Object.values(state.stories)
});

const mapDispatchToProps = dispatch => ({
  getStories: () => dispatch(getStories())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex));
