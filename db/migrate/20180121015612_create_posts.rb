class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.integer :platforms
      t.integer :hours
      t.integer :weeks
      t.integer :skills
      t.string :email
      t.string :github
      t.timestamp :created_at
      t.integer :upvote_count
    end
  end
end
