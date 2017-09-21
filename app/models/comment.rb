class Comment < ApplicationRecord
  validates :story, :body, :author, presence: true
  validates :body, length: { minimum: 3 }

  belongs_to :story

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'user'
end
