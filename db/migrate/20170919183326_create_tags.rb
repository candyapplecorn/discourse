class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :description, null: false
      t.timestamps
    end
    add_index :tags, :description
  end
end
