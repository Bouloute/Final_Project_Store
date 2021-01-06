class CartsProductsController < ApplicationController

    def index
        @carts_product = CartsProduct.all
        
        render json: @carts_product
    end
    
    def create
        #CartsProduct.create(carts_product_params)
        @carts_product = CartsProduct.new(carts_product_params)
        #byebug
    
        if CartsProduct.where(cart_id: params[:cart_id], product_id: params[:product_id]).exists?
            redirect_to update
        else @carts_product.save
            render json: @carts_product
        end
    end

    def show
        @carts_product = CartsProduct.find(params[:id])

        render json: @carts_product
    end

    def update
        @carts_product = CartsProduct.find_by(cart_id: params[:cart_id], product_id: params[:product_id])

        #byebug
        if !!@carts_product
            @carts_product.update(carts_product_params)
            render json: @carts_product
        else
            redirect_to create
            #TODO error message
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
