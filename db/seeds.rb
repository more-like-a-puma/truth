# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all

u1 = User.create :name => 'Small Jess', :email => 'jess@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true, :target => 1

u2 = User.create :name => 'Boz Black', :email => 'boz@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u3 = User.create :name => 'Simone Pan', :email => 'simone@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u4 = User.create :name => 'Tall Jess', :email => 'tjess@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u5 = User.create :name => 'Wolf', :email => 'wolf@ga.co', :password => 'chicken', :password_confirmation => 'chicken',
:admin => false

Group.destroy_all

g1 = Group.create :title => 'Truth Patrol'

g1.users << u1 << u2 << u3 << u4 << u5


puts "Group one user count: #{g1.users.count}"
