class UserEventsController < ApplicationController
    def create
        userEvent= UserEvent.create!(user_id:current_user.id, event_id: params[:event_id], admin:false, status:"pending")
        render json: current_user, status: 201
    end

    def update 
        userEvent= UserEvent.find(params[:id])
        userEvent.update!(user_event_params)
        render json: userEvent, status: 202
    end 

    private

    def user_event_params
        params.permit(:status)
    end
    
end
