json.extract! user, :username, :img_url, :id

json.set! :followee_ids, user.followee_ids
