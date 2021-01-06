Rails.application.routes.draw do
  resources :products
  resources :carts
  resources :carts_products
  # TODO only routes used
end
