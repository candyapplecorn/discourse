import { create_like, delete_like } from '../util/like_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";

const receive_likes = sIDAndCULikes => ({
  type: RECEIVE_LIKES,
  likes: sIDAndCULikes
});

export const receiveLikes = likes => dispatch =>
  receive_likes(likes)
;

export const createLike = storyId => dispatch =>
  create_like(storyId).then(
    sIDAndCULikes => dispatch(receive_likes(sIDAndCULikes))
  )
;

export const deleteLike = storyId => dispatch =>
  delete_like(storyId).then(
    sIDAndCULikes => dispatch(receive_likes(sIDAndCULikes))
  )
;
