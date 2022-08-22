class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :show, :destroy]
    
    #To Log In
    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { error: "Invalid username or password" }, status: 401
        end
    end

    # /me
    def show
        if current_user
            render json: current_user
        else
            render json: { message: "Not logged in" }, status: 401
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
