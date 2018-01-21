class CreateRabbits < ActiveRecord::Migration[5.1]
  def change
    create_table :rabbits do |t|
      t.string :name
      t.integer :age

      t.timestamps
    end
  end
end
