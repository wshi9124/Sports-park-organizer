class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        user= User.create!(user_params)
        session[:user_id]= user.id
        render json: user, status: :created
    end

    def update
        user= current_user.update_attribute(:avatar, params[:avatar])
        render json: find_user
    end

    private

    def user_params
        params.permit(:email, :username, :password, :password_confirmation, :avatar)
    end

    def find_user
        User.find(params[:id])
    end
    
end
