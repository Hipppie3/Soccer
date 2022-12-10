class DivisionSerializer < ActiveModel::Serializer
  attributes :id, :logo, :mp, :won, :draw, :lost, :last5, :name, :points
  has_one :player
  has_one :team
end
