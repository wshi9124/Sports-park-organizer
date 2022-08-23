class User < ApplicationRecord
    has_many :user_events
    has_many :events, through: :user_events
    has_secure_password
    validates :email, email: true
    validates :email, :username, :password, :password_confirmation, presence: true
    validates :email, :username, uniqueness: true
    validates :username, :password, length: { in: 4..20 }
end
