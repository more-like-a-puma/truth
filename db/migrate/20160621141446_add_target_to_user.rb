class AddTargetToUser < ActiveRecord::Migration
  def change
    add_column :users, :target, :integer
  end
end
