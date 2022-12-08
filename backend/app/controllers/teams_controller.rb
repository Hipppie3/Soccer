class TeamsController < ApplicationController
    
    def index
        team = Team.all
        render json: team,  status: :ok
    end

    def show
        team = Team.find(params[:id])
        render json: team,  status: :ok
    end

    def update
        team = Team.find_by!(id: params[:id])
        team.update!(teams_params)
        render json: team, status: :accepted
    end

    def create
        team = Team.create!(teams_params)
        render json: team, status: :created
    end

    def destroy 
        team = Team.find_by!(id: params[:id])
        team.destroy
        head :no_content
    end

    private
    def teams_params
        params.permit(:name, :mascot, :top_scorer, :team_captin, :standing)
    end

end
