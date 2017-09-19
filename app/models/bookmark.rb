class Bookmark < ApplicationRecord
  validates :user, :story, presence: true
  validates :user, uniqueness: { scope: :story }

  belongs_to :user
  belongs_to :story
end
