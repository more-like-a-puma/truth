class AddSeenByToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :seen_by, :text, array:true, default: []
  end
end
