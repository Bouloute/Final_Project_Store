class CartsProductsController < ApplicationController

    def index
        @carts_product = CartsProduct.all
        
        render json: @carts_product
    end
    
    def create
        #CartsProduct.create(carts_product_params)
        @carts_product = CartsProduct.new(carts_product_params)
    
        if @carts_product.save
            render json: @carts_product
        end
    end


    private


    def carts_product_params
        params.require(:carts_product).permit(
            :cart_id,
            :product_id,
            :count
        )
    end
    
end
