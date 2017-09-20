class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :username, uniqueness: true, on: :create ## usermodel reset! save! breaks. says can't have duplicate usernames when trying to login!
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :comments
    has_many :stories
    has_many :likes
    has_many :bookmarks

    has_many :liked_stories,
      through: :likes,
      source: :story

    has_many :bookmarked_stories,
      through: :bookmarks,
      source: :story

    def reset_session_token!
      self.session_token = SecureRandom::urlsafe_base64(12)
      self.save
      self.session_token
    end
    def ensure_session_token
      self.session_token ||= self.reset_session_token!
    end
    def password=(pass)
      @password = pass
      self.password_digest = BCrypt::Password.create(pass)
    end
    def is_password?(pass)
      BCrypt::Password.new(self.password_digest).is_password?(pass)
    end
    def self.find_by_credentials(credentials)
      user = User.find_by(username: credentials[:username])
      return user if user && user.is_password?(credentials[:password])
    end
end
