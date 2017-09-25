json.extract! comment, :id, :story_id, :body

json.set! :author do
  json.extract! comment.author,  :id, :img_url, :username
end
