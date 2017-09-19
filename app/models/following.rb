class Following < ApplicationRecord
  validates :follower, :followee, presence: true

  belongs_to: :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  className: 'user'

  belongs_to: :followee,
  primary_key: :id,
  foreign_key: :followee_id,
  className: 'user'
end
