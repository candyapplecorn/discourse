class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :story_id, null: false

      t.timestamps
    end
    add_index :taggings, :story_id
  end
end
