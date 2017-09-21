json.extract! story, :created_at, :title, :body

json.set! :likes, story.likes.count
json.set! :num_comments, story.comments.count

json.set! :author do
  json.extract! story.author, :username, :img_url, :id
end
