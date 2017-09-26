# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
SEED_STORIES = %W{
  ApplesSpecialty.txt
  DoctorsAndVirtualReality.txt
  GetBetterAtOneThingInOneMonth.txt
  HowToRefreshYourBrain.txt
  HowToWriteSatireLikeMarkTwain.txt
  MyFirstUnicycle.txt
  PocketGuideToAGoodEnoughLife.txt
  RoboticRetirementAdvisors.txt
  WhatToSayAboutGameOfThrones.txt
  WhyYouShouldRideAbike.txt
}

PASSWORD = SecureRandom::urlsafe_base64(24)

SEED_USERS = [
  {username: "Angie", password: PASSWORD, bio: "An enthusiastic writer" },
  {username: "Garrison", password: PASSWORD, bio: "Professional writer for Write it Up" },
  {username: "Kumar", password: PASSWORD, bio: "Editor in Chief at Write it Up" },
  {username: "Chris Jr.", password: PASSWORD, bio: "Full-time clerk at Home Depot, and an aspiring writer" },
  {username: "Matz", password: PASSWORD, bio: "English professor at Yale" }
]

SEED_USERS.each do |u|
  User.create(u)
end

SEED_STORIES.each do |filename|
  story = File.read(Rails.root.join('db', 'seed_stories', filename))
  u = User.find_by(username: SEED_USERS.first[:username])

  Story.create(author_id: u.id, body: story, title: filename.gsub(/([A-Z])/, ' \1').strip.slice(0, -3))

  # u.stories.create(body: story, title: filename.gsub(/([A-Z])/, ' \1').strip)

  SEED_USERS.rotate!
end
