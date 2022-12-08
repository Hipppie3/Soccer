class DivisionsController < ApplicationController

    def index
        division = Division.all
        render json: division,  status: :ok
    end

    def show
        division = Division.find(params[:id])
        render json: division,  status: :ok
    end

    def update
        division = Division.find_by!(id: params[:id])
        player.update!(division_params)
        render json: division, status: :accepted
    end

    def create
        division = Division.create!(division_params)
        render json: division, status: :created
    end

    def destroy 
        division = Division.find_by!(id: params[:id])
        division.destroy
        head :no_content
    end

    private

    def division_params
        params.permit(:name, :logo, :mp, :won, :draw, :lost, :last5, :points, :player_id, :team_id)
    end

end



