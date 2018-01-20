class CreateModels < ActiveRecord::Migration[5.1]
  def change
    create_table :models do |t|
      t.string :Post
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
