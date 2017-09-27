export const get_user = userId => $.ajax({
  url: `api/users/${userId}`
, method: 'get'
});

export const patch_user = user => $.ajax({
  url: `api/users/${user.id}`
, method: 'patch'
, data: { user }
});
