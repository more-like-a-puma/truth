# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  title      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Group < ActiveRecord::Base
  has_many :messages
  has_and_belongs_to_many :users
end
