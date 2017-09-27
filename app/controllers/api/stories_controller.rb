class Api::StoriesController < ApplicationController
  def index
    if params[:author_id]
      @stories = Story.includes(:author, :comments, :likes)
      .where("author_id = ?", params[:author_id])
      .all
    else
      @stories = Story.includes(:author, :comments, :likes).all
    end
  end

  def show
    @story = Story.includes(:author, :likes, comments: [:author]).find(params[:id])
    render json: ["Story not found"], status: 404 unless @story
  end

  def update
    @story = Story.find(params[:id])
    render json: ["Story not found"], status: 404 unless @story
    if @story.update_attributes(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def destroy
    @story = Story.find(params[:id])
    render(json: ["Story not found"], status: 404) unless @story
    @story.destroy
    render :show
  end

  private
  def story_params
    params.require(:story).permit(:title, :body)
  end
end
