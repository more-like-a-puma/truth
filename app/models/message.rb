# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  group_id   :integer
#  content    :text
#  image      :text
#  typing     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  seen       :boolean          default(FALSE)
#

class Message < ActiveRecord::Base
  belongs_to :group
  belongs_to :user
end
