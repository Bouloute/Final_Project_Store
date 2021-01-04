class ProductsController < ApplicationController
    
    #GET /products
    def index
        @products = check_query()

        render json: @products
    end

    def check_query()
        
        results = Product.where(category: params[:cat])
        
        #TODO error message
        results.length != 0 ? results : Product.all
    end
end
