class Story < ApplicationRecord
  validates :title, :body, :author, presence: true
  validates :title, length: { minimum: 3 }

  has_many :likes

  has_many :comments

  has_many :bookmarks

  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tag

  has_many :commenters,
    through: :comments,
    source: :author

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'user'
end
