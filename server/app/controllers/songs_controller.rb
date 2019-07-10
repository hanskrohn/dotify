class SongsController < ApplicationController
    def index
        # @artists = RSpotify::Artist.search(input)

        
    end
    def show

        input = params[:input]
        # @artists = RSpotify::Artist.search(input)
        # song = Song.find(params[:id])
        render json: @artist
    end
  


end