class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :username, uniqueness: true, on: :create ## usermodel reset! save! breaks. says can't have duplicate usernames when trying to login!
    after_initialize :ensure_session_token
    after_initialize :ensure_img_url
    attr_reader :password

    has_many :comments, dependent: :destroy
    has_many :likes
    has_many :bookmarks

    has_many :stories,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: 'Story'

    has_many :followees,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'Following'

    has_many :followers,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: 'Following'

    has_many :followed_users,
      through: :followees,
      source: :followee

    has_many :followed_stories,
      through: :followees,
      source: :followee_stories


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

    def ensure_img_url
      self.img_url = self.class.createTinyGraphURL(self) unless self.img_url
    end

    def self.createTinyGraphURL(user)
     "https://images.weserv.nl/?url=tinygraphs.com/labs/isogrids/hexa/#{user.username.html_safe}?theme=seascape&numcolors=4&size=40&fmt=svg"
    end

    def followee_stories
      self.followed_users.map(&:stories)
    end

    def followee_ids
      self.followed_users.map(&:id).inject({}) { |acc, id|
        acc[id] = true
        acc
      }
    end
end
