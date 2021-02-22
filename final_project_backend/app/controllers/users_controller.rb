class UsersController < ApplicationController
    def index 
        @users = User.all

        render json: @users
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user
    end

    #def new 
    #    @user = User.new
    #end

    def create
        @user = User.create(user_params)
        byebug
        if @user.valid?
            session[:user_id] = @user.id
            render json: @user
        else 
            render :new
        end
    end

    private

    def user_params
        params.permit(
        :name,
        :password,
        :email
        )
    end
end