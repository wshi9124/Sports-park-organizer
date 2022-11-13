class EventMessagesController < ApplicationController
    def create
        message = EventMessage.create!(message_params) 
        render json: message
    end

    private

    def message_params
        params.permit(:user_id, :event_id, :content)
    end

end
