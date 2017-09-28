import { receive_current_user } from './session_actions';
import { create_follow, delete_follow } from '../util/follow_util';

export const createFollow = followerId => dispatch =>
  create_follow(followerId).then(user => dispatch(receive_current_user(user)))

export const deleteFollow = followerId => dispatch =>
  delete_follow(followerId).then(user => dispatch(receive_current_user(user)))
