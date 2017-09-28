Rails.application.routes.draw do
  root to: "static_page#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:new, :create, :show]

    resources :stories, except: [:new, :edit] do
      resources :comments, only: [:index, :create]
      resources :likes, only: [:destroy, :create]
    end

    resources :comments, only: [:destroy, :update]

    resources :follows, only: [:destroy, :create]
  end
end
