Rails.application.routes.draw do
  resources :user_events
  resources :events
  resources :users, only:[:create]

  #To log in
  post "/login", to: "sessions#create"
  get '/me', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
