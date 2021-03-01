Rails.application.routes.draw do
  resources :products
  resources :carts
  resources :carts_products
  resources :users
  resources :sessions
  # TODO only routes used

  post "/login", to: "sessions#create"
  delete "/carts_products/:cart_id/:product_id", to: "carts_products#destroy"
end
