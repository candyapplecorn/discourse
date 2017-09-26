import { connect } from 'react-redux'
import { withRouter } from  'react-router'
import { createLike, deleteLike, receiveLikes } from '../../actions/like_actions';
import Likes from './likes'

const mapStateToProps = ({ likes }, ownProps) => ({
  likes
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const cLike = () => dispatch(createLike(ownProps.match.params.id));
  const dLike = () => dispatch(deleteLike(ownProps.match.params.id));

  return {
    action: currentUserLikes => currentUserLikes ? dLike() : cLike() 
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes))
