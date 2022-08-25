class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :sport, :description
  has_many :user_events
end
