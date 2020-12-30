class CartsController < ApplicationController
  
  def index
    @carts = Cart.all
    
    render json: @carts
  end

  #POST . PUT /carts
  def create
    @cart = Cart.new()
    
    if @cart.save
      render json: @cart
    end
  end

  def show
    @cart = Cart.find(params[:id])
    
    render json: @cart.products
  end
end
