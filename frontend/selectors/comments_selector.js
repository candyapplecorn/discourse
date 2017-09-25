export const story_comments = (state, storyId) =>
  Object
  .values(state.comments)
  .filter(c => c.story_id == storyId)
  .sort((a, b) => {
    a = new Date(a.created_at)
    b = new Date(b.created_at)
    return a < b ? -1 : a > b ? +1 : 0;
  })
