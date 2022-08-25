class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :sport, :description, :image_url, :created_at
  has_many :user_events

  def image_url
    if object.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.image, host: "local")
    end
  end

end
