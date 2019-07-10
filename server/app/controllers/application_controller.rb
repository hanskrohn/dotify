# RSpotify::authenticate("55c12b17da23491c82c85edd1c942d61", "190d444411b04417816ac4550e9115c4")

class ApplicationController < ActionController::API
    def refresh
        begin
            #Rest client search. This asks spotify to give us an access_token and a refresh_token
            #This where the param requirements they asked for (available in there documentation)
            response = RestClient.post 'https://accounts.spotify.com/api/token', {redirect_uri: 'http://localhost:3000/callback',
                    grant_type: 'authorization_code',
                    #params[:code] was the long url sent from the if(!_token)
                    code: params[:code],
                    client_id: '55c12b17da23491c82c85edd1c942d61',
                    client_secret: '190d444411b04417816ac4550e9115c4'}, {'Content-Type': 'application/x-www-form-urlencoded'}
            rescue Exception => e 
                byebug
            end
        #They return a stringified version of the code
        #we needed to parse over the info and make it appear like an object ({})
        result = JSON.parse(response.body)
        access_token =result["access_token"]
        refresh_token = result["refresh_token"]
        #From here we reply only using the access_token as the refresh_token is not required nir ever used in the front end
        redirect_to "http://10.185.4.208:8080/#access_token=#{access_token}" #&refresh_token=#{refresh_token}"
    end
end
