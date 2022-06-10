const { ArtistList, AlbumList, SongList } = require("../dummyData");
const _ = require('lodash');

const resolvers = {
    Artist: {
        songs: (Artist, args) => {
            return SongList.filter((song) => {
                return song.artistId === Artist.id
            })
        },
        albums: (Artist, args) => {
            return AlbumList.filter((album) => {
                return album.artistId === Artist.id
            })
        },
    },

    Album: {
        songs: (Album, args) => {
            return SongList.filter((song) => {
                return song.albumId === Album.id
            })
        },
        artist: (Album, args) => {
            return ArtistList.find((artist) => {
                return artist.id === Album.artistId});
        }
    },

    Song: {
        artist: (Song, args) => {
            return ArtistList.find(artist => artist.id === Song.artistId);
        }
    },
    
    Query: {
        // ARTIST RESOLVERS
        artists: (parent, args) => {
            return ArtistList;
        },
        artist: (parent, args) => {
            const artistName = args.name;
            const artist = ArtistList.find((artist) => artist.name === artistName);
            return artist;
        },
        // ALBUM RESOLVERS
        albums: (parent, args) => {
            return AlbumList;
        },
        albumById: (parent, args) => {
            const albumId = args.id;
            const album = AlbumList.find(album => album.id === Number(albumId))
            return album;            
        },
        albumsByArtist: (parent, args) => {
            const artistName = args.name;
            const artist = ArtistList.find((artist) => artist.name === artistName);
            const queryArtistId = artist.id;
            const albums = AlbumList.filter(album => album.artistId === queryArtistId);
            return albums;
        },
        // SONG RESOLVERS
        songs: (parent, args) => {
            return SongList;
        },
        songById: (parent, args) => {
            const songId = args.id;
            const song = SongList.find(album => album.id === Number(songId))
            return song;            
        },
        songsByArtist: (parent, args) => {
            const artistName = args.name;
            const artist = ArtistList.find((artist) => artist.name === artistName);
            const queryArtistId = artist.id;
            const songs = SongList.filter(song => song.artistId === queryArtistId);
            return songs;
        },
    },

    Mutation: {
        addNewArtist: (parent, args) => {
            const newArtist = args.input;
            newArtist.id = ArtistList.length + 1;
            ArtistList.push(newArtist);
            return newArtist;
        },
        addNewSong: (parent, args) => {
            const newSong = args.input;
            newSong.id = SongList.length + 1;
            SongList.push(newSong);
            return newSong;
        },
        deleteArtist: (parent, args) => {
            const artistId = args.id;
            ArtistList.splice((artistId-1),1);
            return null;
        },
        updateRating: (parent, args) => {
            const { id, rating } = args.input;
            let updArtist;
            ArtistList.map((artist) => {
                if(artist.id === id){
                    artist.rating = rating;
                    updArtist = artist;
                }
            });
            return updArtist;
        },
        updateActivity: (parent, args) => {
            const { id, active } = args.input;
            let updArtist;
            ArtistList.map((artist) => {
                if(artist.id === id){
                    artist.active = active;
                    updArtist = artist;
                }
            });
            return updArtist;
        },
    }
};

module.exports = { resolvers };