require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "55c12b17da23491c82c85edd1c942d61", "190d444411b04417816ac4550e9115c4", scope: 'user-read-email playlist-modify-public user-library-read user-library-modify'
end