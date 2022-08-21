class UsersController < ApplicationController
    def create
        user= User.create!(user_params)
        render json: {message: "Account successfully made"}, status: :created
    end

    def user_params
        params.permit(:email, :username, :password )
    end
end
