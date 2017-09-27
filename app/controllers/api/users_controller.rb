class Api::UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    @user.img_url = User.createTinyGraphURL(@user)
    # @user.img_url = createTinyGraphURL(@user)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    logout!(@user)
    @user.destroy
    render :show
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

  # def createTinyGraphURL(user)
  #   "http://tinygraphs.com/labs/isogrids/hexa/#{user.username.html_safe}?theme=seascape&numcolors=4&size=40&fmt=svg"
  # end
end
