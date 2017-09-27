class Following < ApplicationRecord
  validates :follower, :followee, presence: true

  belongs_to :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: 'User'

  belongs_to :followee,
  primary_key: :id,
  foreign_key: :followee_id,
  class_name: 'User'

  has_many :followee_stories,
    through: :followee,
    source: :stories
end
