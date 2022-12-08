class DivisionSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo, :mp, :won, :draw, :lost, :last5, :points
  has_one :player
  has_one :team
end
