import { connect } from 'react-redux';
import { withRouter } from  'react-router';
import { createLike, deleteLike } from '../../actions/like_actions';
import Likes from './likes';

const mapStateToProps = ({ likes }) => ({
  likes
});

const mapDispatchToProps = (dispatch, { match: { params: { id }}}) => ({
  action: currentUserLikes => currentUserLikes ?
            dispatch(deleteLike(id)) : dispatch(createLike(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes))
