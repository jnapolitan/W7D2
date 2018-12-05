Rails.application.routes.draw do
  namespace :api, format: { default: :json } do
    resources :todos, except: [:new, :edit]
  end

  root to: 'static_pages#root'
end
