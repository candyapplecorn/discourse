export const post_story = story => $.ajax({
  url: 'api/stories',
  method: 'post',
  data: { story }
});

export const patch_story = story => $.ajax({
  url: `api/stories/${story.id}`,
  method: 'patch',
  data: { story }
});

export const delete_story = id => $.ajax({
  url: `api/stories/${id}`,
  method: 'delete'
});

export const get_story = id => $.ajax({
  url: `api/stories/${id}`,
  method: 'get'
});

export const get_stories = (authorQuery) => $.ajax({
  url: `api/stories${authorQuery}`,
  method: 'get'
});
