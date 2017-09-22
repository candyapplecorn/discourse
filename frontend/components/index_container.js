import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getStories } from '../actions/story_actions';
import Index from './index.jsx';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Index));
