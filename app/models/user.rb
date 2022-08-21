class User < ApplicationRecord
    has_secure_password
    validates :email, email: true
    validates :email, :username, :password, :password_confirmation, presence: true
    validates :email, :username, uniqueness: true
    validates :username, :password, length: { in: 4..20 }
end
