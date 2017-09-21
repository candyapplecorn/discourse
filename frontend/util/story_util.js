export const postStory = story => dispatch => $.ajax({
  url: 'api/stories',
  method: 'post',
  data: { story }
});

export const patchStory = story => dispatch => $.ajax({
  url: `api/stories/${formStory.id}`,
  method: 'patch',
  data: { story }
});

export const deleteStory = id => dispatch => $.ajax({
  url: `api/stories${id}`,
  method: 'delete'
});

export const getStory = id => dispatch => $.ajax({
  url: `api/stories/${id}`,
  method: 'get'
});

export const getStories = () => dispatch => $.ajax({
  url: `api/stories`,
  method: 'get'
});
