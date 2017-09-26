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
    class_name: 'User'

  # Gets the first image in the post, or returns nil if no images
  def first_img
    matchData = self.body.match(
      /(http|www).*(png|jpg|jpeg|svg|gif)/
    );

    return nil unless matchData

    return matchData[0]
  end

  def get_time_to_read
    averageWPM = 200; # Thanks Google!
    averageLettersPerWord = 4.5; # Thanks Google!
    averageWPS = averageWPM / 60; # This is too slow
    averageWPS /= 2; # Will adjust as I see fit
    secondsPerLetter = averageWPS / averageLettersPerWord;
    withoutTags = self.body.gsub(/<.*?>/, "");
    timeToRead = (withoutTags.length * secondsPerLetter / 60).floor;

    timeToRead < 1 ? "< 1 min read" : "#{timeToRead} min read";
  end
end
