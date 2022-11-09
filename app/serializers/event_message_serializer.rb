class EventMessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :event_id, :created_at

  belongs_to :event
  belongs_to :user
end
