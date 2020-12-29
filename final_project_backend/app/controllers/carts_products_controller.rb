class CartsProductsController < ApplicationController

    def index
        @cartsProduct = CartsProduct.all
        
        render json: @cartsProduct
    end
    
    def create
        #CartsProduct.create(carts_product_params)
        @cartsProduct = CartsProduct.new(carts_product_params)
    
        if @cartsProduct.save
            render json: @cartsProduct
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
