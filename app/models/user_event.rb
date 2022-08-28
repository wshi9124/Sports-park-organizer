class UserEvent < ApplicationRecord
    belongs_to :user
    belongs_to :event

    validates_inclusion_of :status, :in => ['accepted', 'pending', 'declined']
end
