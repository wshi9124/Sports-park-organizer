class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :admin, :status

  belongs_to :event
  belongs_to :user
end
