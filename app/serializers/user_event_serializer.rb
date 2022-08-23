class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :admin, :status
end
