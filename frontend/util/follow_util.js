export const create_follow = followee_id => $.ajax({
  url: 'api/follows',
  method: 'post',
  data: { followee_id }
});
export const delete_follow = followee_id => $.ajax({
  url: 'api/follows',
  method: 'delete',
  data: { followee_id }
});
