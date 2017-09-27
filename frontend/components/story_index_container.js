import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getStories } from '../actions/story_actions';
import { toList, byAuthor } from '../selectors/story_selectors';
import StoryIndex from './story_index.jsx';

const mapStateToProps = (state, ownProps) => {
  const { match: { path, params: {  id: authorId } } } = ownProps;
  const isUserShow = /user/.test(path);
  const indexStories = () => toList(state.stories);
  const authorStories = () => byAuthor(state.stories, authorId)

  return {
    stories: isUserShow ? authorStories() : indexStories()
  }
};

const mapDispatchToProps = dispatch => ({
  getStories: () => dispatch(getStories())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex));
