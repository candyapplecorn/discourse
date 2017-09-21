export const post_story = story => dispatch => $.ajax({
  url: 'api/stories',
  method: 'post',
  data: { story }
});

export const patch_story = story => $.ajax({
  url: `api/stories/${formStory.id}`,
  method: 'patch',
  data: { story }
});

export const delete_story = id => $.ajax({
  url: `api/stories${id}`,
  method: 'delete'
});

export const get_story = id => $.ajax({
  url: `api/stories/${id}`,
  method: 'get'
});

export const get_stories = () => $.ajax({
  url: `api/stories`,
  method: 'get'
});
