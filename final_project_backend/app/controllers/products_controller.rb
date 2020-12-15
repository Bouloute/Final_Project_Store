class ProductsController < ApplicationController
    
    #GET /products
    def index
        @products = Product.all
    
        render json: @products
    end
end
