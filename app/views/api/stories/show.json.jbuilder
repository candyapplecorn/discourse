json.partial! 'api/stories/story', story: @story

json.set! :comments do
  json.array! @story.comments do |comment|
    json.body = comment.body

    json.set! :author do
      json.extract! comment.author, :username, :img_url, :id
    end
  end
end
