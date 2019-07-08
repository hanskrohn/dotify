class Song < ApplicationRecord
    has_many :playlistsongs, dependent: :destroy
    has_many :playlists, through: :playlistsongs
end
