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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
