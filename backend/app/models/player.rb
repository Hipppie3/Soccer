class Player < ApplicationRecord
    has_many :teams
    has_many :divisions, through: :teams 

    validates :name, presence: true
    
end
