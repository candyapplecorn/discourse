export const RECEIVE_USER = "RECEIVE_USER";
import { get_user, patch_user } from '../util/user_util';

const receive_user = user => ({
  type: RECEIVE_USER,
  user
});

export const getUser = userId => dispatch =>
  get_user(userId).then(user => dispatch(receive_user(user)));

export const patchUser = formUser => dispatch =>
  patch_user(formUser).then(user => dispatch(receive_user(user)));
