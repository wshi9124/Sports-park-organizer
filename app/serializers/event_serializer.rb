class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :sport, :description
end
