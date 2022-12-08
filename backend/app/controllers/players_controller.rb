class PlayersController < ApplicationController
    
    def index
        player = Player.all
        render json: player,  status: :ok
    end

    def show
        player = Player.find(params[:id])
        render json: player,  status: :ok
    end

    def update
        player = Player.find_by!(id: params[:id])
        player.update!(players_params)
        render json: player, status: :accepted
    end

    def create
        player = Player.create!(players_params)
        render json: player, status: :created
    end

    def destroy 
        player = Player.find_by!(id: params[:id])
        player.destroy
        head :no_content
    end

    private

    def players_params
        params.permit(:name, :image, :position, :age, :country, :goals)
    end

end
