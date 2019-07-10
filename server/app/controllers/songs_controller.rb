class SongsController < ApplicationController
    def index
        # @artists = RSpotify::Artist.search(input)
        begin
            response = RestClient.post 'https://accounts.spotify.com/api/token', {redirect_uri: 'http://localhost:3000/callback',
                    grant_type: 'authorization_code',
                    code: params[:code],
                    client_id: '55c12b17da23491c82c85edd1c942d61',
                    client_secret: '190d444411b04417816ac4550e9115c4'}, {'Content-Type': 'application/x-www-form-urlencoded'}
            rescue Exception => e 
                byebug
            end
        result = JSON.parse(response.body)
        access_token =result["access_token"]
        refresh_token = result["refresh_token"]
        redirect_to "http://10.185.4.208:8080/#access_token=#{access_token}" #&refresh_token=#{refresh_token}"
    end
    def show
        input = params[:input]
        # @artists = RSpotify::Artist.search(input)
        # song = Song.find(params[:id])
        render json: @artist
    end


end