class EventMessage < ApplicationRecord
    belongs_to :event
    belongs_to :user

    validates :content, :event_id, :user_id, presence: true
end
