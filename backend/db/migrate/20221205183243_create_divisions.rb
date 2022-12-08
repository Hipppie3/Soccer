class CreateDivisions < ActiveRecord::Migration[7.0]
  def change
    create_table :divisions do |t|
      t.string :name
      t.string :logo 
      t.string :mp
      t.integer :won
      t.integer :draw
      t.integer :lost
      t.string :last5
      t.integer :points
      t.references :player, null: false, foreign_key: true
      t.references :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
