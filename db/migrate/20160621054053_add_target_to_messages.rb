class AddTargetToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :target, :integer
  end
end
