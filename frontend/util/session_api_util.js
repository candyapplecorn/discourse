export const postSignup = user => $.ajax({
  url: 'api/users',
  method: 'post',
  data: { user }
});

export const postLogin = user => $.ajax({
  url: 'api/session',
  method: 'post',
  data: { user }
});

export const deleteLogout = () => $.ajax({
  url: 'api/session',
  method: 'delete'
});
