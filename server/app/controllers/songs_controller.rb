RSpotify::authenticate("55c12b17da23491c82c85edd1c942d61", "190d444411b04417816ac4550e9115c4")


class SongsController < ApplicationController
    def index
        
        artist = $artists
        render json: artist
    end
    def show
        artists = RSpotify::Artist.search(input)
        song = Song.find(params[:id])
        render json: song
        
    end
end