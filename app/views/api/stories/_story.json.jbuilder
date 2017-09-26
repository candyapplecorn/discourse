json.extract! story, :created_at, :title, :id

json.set! :first_img, story.first_img
json.set! :time_to_read, story.get_time_to_read

if params[:action] == "show"
  json.extract! story, :body
end

json.set! :likes, story.likes.count
json.set! :num_comments, story.comments.count

json.set! :author do
  json.extract! story.author, :username, :img_url, :id
end

# Does the current user like this story?
if !logged_in?
  json.set! :current_user_likes, false
  json.set! :current_user_commented, false
else
  json.set! :current_user_likes,
  !!Like.find_by("user_id = ? AND story_id = ?", current_user.id, story.id)


  json.set! :current_user_commented,
  Comment
    .where("user_id = ? AND story_id = ?", current_user.id, story.id)
    .count > 0
end
