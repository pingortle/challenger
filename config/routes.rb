Rails.application.routes.draw do
  root "challenges#new"
  resources :challenges
end
