class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(user_params)
    if @user
      login!(@user)
      render 'user#show'
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    @user = User.find(params[:id])
    logout!(@user)
    render 'user#show'
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
