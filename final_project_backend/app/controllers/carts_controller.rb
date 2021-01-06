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
    
    #myJson = 0
    #byebug

    #@cart.products.each { |p| myJson += 1 }
    #byebug
    render json: @cart.products
    #render :json => @cart, :include => {:carts_products => {:only => [:count, :product_id]}, :products => {:except => :created_at}}
  end

  def destroy
    @cart = Cart.find(params[:id])
    @cart.destroy

  end
end
