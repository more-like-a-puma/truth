Rails.application.routes.draw do
  root :to => 'messages#home'

  resources :groups
  resources :messages
  resources :users

  get '/login' => 'session#new', :as => 'login'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy', :as => 'logout'
  # post '/groups/:id/assign' => 'groups#assign'

  end
