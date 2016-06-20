Rails.application.routes.draw do
  get 'pages/home'

  resources :groups
  resources :messages
  resources :users

  get '/login' => 'session#new', :as => 'login'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy', :as => 'logout'

  end
