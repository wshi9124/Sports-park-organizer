class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :avatar_url
  has_many :user_events
  has_many :events

  def avatar_url
    if object.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.avatar, host: "local")
    end
  end

end
