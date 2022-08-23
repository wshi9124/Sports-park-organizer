class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :avatar_url

  def avatar_url
    if object.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.avatar, host: "local")
    end
  end


end
