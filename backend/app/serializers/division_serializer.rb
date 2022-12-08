class DivisionSerializer < ActiveModel::Serializer
  attributes :id, :name, :won, :draw, :lost, :points
  has_one :player
  has_one :team
end
