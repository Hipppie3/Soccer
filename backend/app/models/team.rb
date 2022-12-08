class Team < ApplicationRecord
    has_many :players, dependent: :destroy
    has_many :divisions, through: :players

    validates :name, presence: true 
    validates :standing, uniqueness: true
end
