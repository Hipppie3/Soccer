class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :position, :age, :country, :goals
end
