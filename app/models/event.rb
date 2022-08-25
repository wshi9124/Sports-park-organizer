class Event < ApplicationRecord
    has_many :user_events
    has_many :users, through: :user_events
    has_one_attached :image
    validates :name, :location, :sport, :description, presence: true
    validates :description, length: { minimum: 10 }
end
