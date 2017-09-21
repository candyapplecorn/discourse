json.partial! 'api/stories/story', story: @story

json.set! :comments do
  json.array! @story.comments
end
