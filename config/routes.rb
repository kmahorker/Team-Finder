Rails.application.routes.draw do
  resources :rabbits
  get 'posts/new'

  get 'posts/create'

  get 'main/index'

  resources :posts

  root 'main#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
