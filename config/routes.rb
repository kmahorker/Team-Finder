Rails.application.routes.draw do
  get 'main/index'

  get 'posts/search' =>'posts#search'

  resources :posts

  root 'main#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
