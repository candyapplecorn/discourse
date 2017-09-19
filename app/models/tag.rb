class Tag < ApplicationRecord
  validates :description, length: { minimum: 3 },
                          allow_nil: false,
                          uniqueness: true

  has_many :taggings
  has_many :stories,
    through: :taggings,
    source: :story
end
