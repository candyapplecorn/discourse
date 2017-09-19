json.partial! 'api/users/user', user: @user

if params[:bio] == "true"
  json.extract! @user, :bio, :email
end
