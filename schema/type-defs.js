const { gql } = require('apollo-server');

const typeDefs = gql`
    type Artist {
        id: ID!
        name: String!
        members: String!
        genre: String!
        origin: Origin!
        rating: Int!
        active: Boolean!
        songs: [Song!]
        albums: [Album!]
    }

    enum Origin {
        US
        CA
        BR
        IE
        UK
        DE 
        FR 
        HK
    }

    type Album {
		id: ID!
		name: String!
        songs: [Song!]
        artist: Artist!
        releaseYear: Int!
        artistId: Int!
	}

    type Song {
		id: ID!
		name: String!
        artist: Artist!
        releaseYear: Int!
        artistId: Int!
        albumId: Int! 
	}

    type Query {
        artists: [Artist!]!
        artist(name: String!): Artist

        albums: [Album!]!
        albumById(id: ID!): Album
        albumsByArtist(name: String!): [Album!]

        songs: [Song!]!
        songById(id: ID!): Song
        songsByArtist(name: String!): [Song!]
    }

    input NewArtistInput {
        name: String!
        members: String!
        genre: String!
        origin: Origin = US
        rating: Int = 0
        active: Boolean = true
    }

    input UpdateRating {
        id: Int!
        rating: Int!
    }

    input updateActivity {
        id: Int!
        active: Boolean!
    }

    input NewSongInput {
        name: String!
        releaseYear: Int!
        artistId: Int!
        albumId: Int!
    }
    
    type Mutation {
        addNewArtist(input: NewArtistInput!): Artist
        addNewSong(input: NewSongInput!): Song
        updateRating (input: UpdateRating!): Artist
        updateActivity (input: updateActivity!): Artist
        deleteArtist(id: ID!): Artist
    }
`;

module.exports = { typeDefs };