# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all

u1 = User.create :name => 'Small Jess', :email => 'jess@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u2 = User.create :name =>  'boz', :email => 'boz@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u3 = User.create :name =>  'Simone', :email => 'simone@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u4 = User.create :name =>  'Tall Jess', :email => 'simone@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

Group.destroy_all

g1 = Group.create :title => 'Truth Patrol'

Message.destroy_all

m1 = Message.create :content => "Hellow World"
m2 = Message.create :content => "Sup"
m3 = Message.create :content => "Hello World*"
m4 = Message.create :content => "This is a message"
m5 = Message.create :content => "SEEEEEEEEEEDS"

g1.users << u1 << u2 << u3 << u4
puts "Group one user count: #{g1.users.count}"
g1.messages << m1 << m2 << m3 << m4 << m5
puts "Group one messages count: #{g1.messages.count}"

u1.messages << m1
u1.messages << m5
puts "User one message count: #{u1.messages.count}"
u2.messages << m2
puts "User two message count: #{u2.messages.count}"
u3.messages << m3
puts "User three message count: #{u3.messages.count}"
u4.messages << m4
puts "User four message count: #{u4.messages.count}"
