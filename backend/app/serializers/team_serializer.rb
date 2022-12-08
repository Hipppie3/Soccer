class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :mascot, :top_scorer, :team_captin, :standing
end
