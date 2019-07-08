class Playlist < ApplicationRecord
    has_many :playlistsongs, dependent: :destroy
    has_many :songs, through: :playlistsongs
end
