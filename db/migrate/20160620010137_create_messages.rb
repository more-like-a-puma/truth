class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :user_id
      t.integer :group_id
      t.text :content
      t.text :image
      t.text :typing

      t.timestamps null: false
    end
  end
end
