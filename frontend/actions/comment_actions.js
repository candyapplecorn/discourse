import {
  get_comments, delete_comment, create_comment, update_comment
} from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const RECEIVE_COMMENT_ERRORS  = "RECEIVE_COMMENT_ERRORS"

const receive_comments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});
const receive_comment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})
const remove_comment = comment => ({
  type: REMOVE_COMMENT,
  comment
})
const receive_comment_errors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const getComments = storyId => dispatch =>
  get_comments(storyId).then(
    comments => dispatch(receive_comments(comments))
  , errors => dispatch(receive_comment_errors(errors.responseJSON))
  )
;

export const createComment = (storyId, formComment) => dispatch =>
  create_comment(storyId, formComment).then(
    comment => dispatch(receive_comment(comment))
  , errors => dispatch(receive_comment_errors(errors.responseJSON))
  )
;

export const deleteComment = id => dispatch =>
  delete_comment(id).then(
    comment => dispatch(remove_comment(comment))
  , errors => dispatch(receive_comment_errors(errors.responseJSON))
  )
;

export const updateComment = formComment => dispatch =>
  update_comment(formComment).then(
    comment => dispatch(receive_comment(comment))
  , errors => dispatch(receive_comment_errors(errors.responseJSON))
  )
;
