export const toList = stories => Object.values(stories);

export const byAuthor = (stories,  authorId) =>
  toList(stories)
  .filter(({ author: { id }}) => id == authorId)
;
