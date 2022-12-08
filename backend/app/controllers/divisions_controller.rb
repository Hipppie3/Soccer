class DivisionsController < ApplicationController

    def index
        division = Division.all
        render json: division,  status: :ok
    end

end
