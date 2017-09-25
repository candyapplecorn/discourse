class Api::CommentsController < ApplicationController
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.story_id = params[:story_id]
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def index
    @comments = Story.find(params[:story_id]).comments
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
