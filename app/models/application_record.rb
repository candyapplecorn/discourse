class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  helper_method :current_user
  helper_method :logged_in

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end
  def logout!(user)
    user.reset_session_token!
    session[:session_token] = nil
  end
  def logged_in
    !!current_user
  end
  def current_user
    User.find_by(session_token: session[:session_token])
  end
end
