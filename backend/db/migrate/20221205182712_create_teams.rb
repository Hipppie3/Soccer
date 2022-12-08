class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :mascot
      t.integer :standing
      t.string :top_scorer
      t.string :team_captin
      
      

      t.timestamps
    end
  end
end
