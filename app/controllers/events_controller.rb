class EventsController < ApplicationController

    def index
        render json: Event.all
    end
    
    # def create
    #     event= Event.create!(event_params)
    # end

    private

    def event_params
        params.permit(:name, :location, :sport, :description, :image, :user_id )
    end
end
