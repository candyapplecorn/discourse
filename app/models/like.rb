class Like < ApplicationRecord
  validates :user, :story, presence: true
  validates :user, uniqueness: { scope: :story }

  belongs_to :story
  belongs_to :user
end
