export const story_comments = (state, storyId) =>
  Object
  .values(state.comments)
  .filter(c => c.story_id == storyId)
  .sort((a, b) => {
    a = new Date(a.created_at)
    b = new Date(b.created_at)

    // Sort in reverse chronological order - newest first
    return a < b ? +1 : a > b ? -1 : 0;
  }).map(comment => {
    // Can the current user perform Edit and Delete on this comment?
    comment.currentIsAuthor = state.session.currentUser &&
                              state.session.currentUser.id == comment.author.id
    return comment;
  })
