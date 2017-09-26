class Api::LikesController < ApplicationController
  def create
    @like = Like.new(story_id: params[:story_id])
    @like.user_id = current_user.id
    if @like.save
      render json: {
        story_id: params[:story_id], current_user_likes: true,
        num_likes: Story.find(params[:story_id]).likes.count
      }, status: 200
    else
      render json: @like.errors.full_messages, status: 422
    end
  end
  def destroy
    @like = Like.find_by(user_id: current_user.id, story_id: params[:story_id])
    
    if @like
      @like.destroy
      render json: {
          story_id: params[:story_id], current_user_likes: false,
          num_likes: Story.find(params[:story_id]).likes.count
      }, status: 200
    end
  end
end
