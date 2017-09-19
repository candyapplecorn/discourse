Rails.application.routes.draw do
  root to: "static_page#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:new, :create, :show]
  end
end
