class PlaylistsController < ApplicationController
    def index
        render json: Playlist.all
    end
    def new
        Playlist.create(name: playlist_params["name"], my_playlist_id: playlist_params["my_playlist_id"])
    end
    def playlist_params
        params.permit(
            :my_playlist_id,
            :name
        )
    end
end