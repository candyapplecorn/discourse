class Api::FollowsController < ApplicationController
  def create
    @follow = Following.new(follower_id: current_user.id, followee_id: params[:followee_id])
    if @follow.save
      @user = current_user
      render 'api/users/show'
    else
      render json: @follow.errors.full_message, status: 422
    end
  end

  def destroy
    @follow = Following.find_by(follower_id: current_user.id, followee_id: params[:followee_id])
    if @follow
      @follow.destroy
      @user = current_user
      render 'api/users/show'
    else
      render json: ["No follow found"], status: 404
    end
  end
end
