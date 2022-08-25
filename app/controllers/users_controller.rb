class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def show
        render json: current_user, include: ["user_events", "user_events.event"]
    end

    def create
        user= User.create!(user_params)
        session[:user_id]= user.id
        render json: user, status: :created
    end

    def update
        current_user.update_attribute(:avatar, params[:avatar])
        render json: current_user
    end

    private

    def user_params
        params.permit(:email, :username, :password, :password_confirmation, :avatar)
    end

end
