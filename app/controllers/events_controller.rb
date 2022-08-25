class EventsController < ApplicationController

    def index
        render json: Event.all
    end

    def create
        event= Event.create!(event_params)
        userEvent= UserEvent.create!(user_id: current_user.id, event_id: event.id, admin: true, status: "accepted")
        render json: event, status: 201
    end

    private

    def event_params
        params.permit(:name, :location, :sport, :description, :image)
    end

end
