Rails.application.routes.draw do
  resources :products
  resources :carts
  resources :carts_products
  # TODO only routes used


  delete "/carts_products/:cart_id/:product_id", to: "carts_products#destroy"
end
