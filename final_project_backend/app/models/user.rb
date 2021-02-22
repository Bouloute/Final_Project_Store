class User < ApplicationRecord 
    #bcrypt
    has_secure_password

    #relations
    has_many :carts
    has_many :carts_products
    has_many :products, through: :carts_products
end