class SessionsController < ApplicationController

    def create
        #if used omniauth
        if auth
            @user = User.find_or_create_by(email: auth['info']['email']) do |u|
                u.name = auth['info']['name']
                u.password = SecureRandom.hex
            end
        else

            @user = User.find_by(name: params[:name])
            @user = login_validation(@user)
            
            #if !@user.authenticate(params[:password]) #@user.id
            #    return render :new unless @user.authenticate(params[:password])
            #else 
            #    return render :new
            #end
        end
        #session[:user_id] = @user.id
        #byebug
        render json: {'token': @user.id}
    end
    
    def destroy
        #session.delete :user_id
    end

    private

    def login_validation(user)
        
        if !user
            user = User.new
            user.errors.add(:name, "not found")
        else 
            if !user.authenticate(params[:password])
                user.errors.add(:password, "is incorrect")
            end 
        end
        user
    end

    def auth
        request.env['omniauth.auth']
    end
end
