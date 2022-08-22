class UsersController < ApplicationController
    def create
        user= User.create!(user_params)
        session[:user_id]= user.id
        render json: user, status: :created
    end

    def user_params
        params.permit(:email, :username, :password, password_confirmation )
    end
end
