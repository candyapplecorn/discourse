export const create_like = storyId => $.ajax({
  url: `api/stories/${storyId}/likes`,
  method: 'post'
});

export const delete_like = storyId => $.ajax({
  url: `api/stories/${storyId}/likes/1`,
  method: 'delete'
});
