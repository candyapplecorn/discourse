import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getStories } from '../actions/story_actions';
import { toList, byAuthor } from '../selectors/story_selectors';
import StoryIndex from './story_index.jsx';

const mapStateToProps = (state, ownProps) => {
  const { match: { path, params: {  id: authorId } } } = ownProps;
  const isUserShow = /user/.test(path);
  const viewingSelf = isUserShow && state.session.currentUser && authorId == state.session.currentUser.id
  const indexStories = () => toList(state.stories);
  const authorStories = () => byAuthor(state.stories, authorId)

  return {
    stories: isUserShow && !viewingSelf ? authorStories() : indexStories(),
    followee_ids: state.session.currentUser ? state.session.currentUser.followee_ids : {},
    viewingSelf: viewingSelf
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match: { params: {  id: authorId } } } = ownProps;

  return {
    getStories: () => dispatch(getStories(authorId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex));
