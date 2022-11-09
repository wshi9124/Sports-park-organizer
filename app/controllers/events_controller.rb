class EventsController < ApplicationController

    def index
        render json: Event.all, include: ["user_events", "user_events.user"]
    end

    def show
        event= Event.find(params[:id])
        render json: event, include: ["user_events.user", "event_messages"]
    end

    def create
        event= Event.create!(event_params)
        userEvent= UserEvent.create!(user_id: current_user.id, event_id: event.id, admin: true, status: "accepted")
        render json: event, status: 201
    end

    def destroy
        event= Event.find(params[:id])
        event.destroy
        render json: {}, status: :accepted
    end

    private

    def event_params
        params.permit(:name, :location, :sport, :description, :image)
    end

end
