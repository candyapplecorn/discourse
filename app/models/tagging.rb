class Tagging < ApplicationRecord
  validates :tag, presence: true, uniqueness: { scope: :story }
  validates :story, presence: true

  belongs_to :story
  belongs_to :tag
end
