class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :image
      t.string :position
      t.integer :age
      t.string :country
      t.integer :goals

      t.timestamps
    end
  end
end
