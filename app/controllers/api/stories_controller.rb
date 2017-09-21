class Api::StoriesController < ApplicationController
  def index
    @stories = Story.includes(:author, :comments, :likes).all
  end

  def show
    @story = Story.includes(:author, :likes, comments: [:author]).find(params[:id])
    return ["Story not found"], status: 404 unless @story
  end

  def update
    @story = Story.find(params[:id])
    return ["Story not found"], status: 404 unless @story
    if @story.update_attributes
      render :show
    else
      render json: @story.errors.full_messages
    end
  end

  def create
    @story = Story.new(story_params])
    @story.author_id = current_user.id
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages
    end
  end

  def destroy
    @story = Story.find(params[:id])
    return ["Story not found"], status: 404 unless @story
    @story.destroy
    render :show
  end

  private
  def story_params
    require(:story).permit(:title, :body)
  end
end
