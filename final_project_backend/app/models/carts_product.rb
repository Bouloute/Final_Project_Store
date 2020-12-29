class CartsProduct < ApplicationRecord
    belongs_to :carts
    belongs_to :product 
end
