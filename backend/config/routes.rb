Rails.application.routes.draw do

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :team_with_player_serializers
  resources :divisions
  resources :players
  resources :teams

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
end
