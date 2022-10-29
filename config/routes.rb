Rails.application.routes.draw do
  resources :users, only:[:create, :update, :show]
  resources :events
  resources :user_events, only: [:create]
  
  

  #To log in
  post "/login", to: "sessions#create" 
  #To stay logged in
  get '/me', to: 'sessions#show'
  #To Logout
  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
