class UserEventsController < ApplicationController
    def create
        userEvent= UserEvent.create!(user_id:current_user.id, event_id: params[:event_id], admin:false, status:"pending")
        render json: current_user, status: 201
    end

end
