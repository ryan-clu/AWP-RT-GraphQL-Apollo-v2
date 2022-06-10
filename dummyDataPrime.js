//
// ARTISTS
//
const ArtistList = [
    {
        id: 1,
        name: "The Carpenters",
        members: "Karen Carpenter, Richard Carpenter",
        genre: "Pop, Soft Rock",
        origin: "US",
        rating: 10,
        active: false,
        songs:[
            {
                id: 4,
                name: "Rainy Days and Mondays",
                releaseYear: 1971,
                artistId: 1,
                albumId: 1
            },
            {
                id: 5,
                name: "Let Me Be the One",
                releaseYear: 1971,
                artistId: 1,
                albumId: 1
            },
            {
                id: 6,
                name: "All You Get from Love Is A Love Song",
                releaseYear: 1977,
                artistId: 1,
                albumId: 3
            },
        ],
        albums: [
            {
                id: 2,
                name: "Carpenters",
                songs: [
                    {
                        id: 4,
                        name: "Rainy Days and Mondays",
                        releaseYear: 1971,
                        artistId: 1,
                        albumId: 1
                    },
                    {
                        id: 5,
                        name: "Let Me Be the One",
                        releaseYear: 1971,
                        artistId: 1,
                        albumId: 1
                    },
                ],
                releaseYear: 1971,
                artistId: 1
            },
            {
                id: 3,
                name: "Passage",
                songs: [
                    {
                        id: 6,
                        name: "All You Get from Love Is A Love Song",
                        releaseYear: 1977,
                        artistId: 1,
                        albumId: 3
                    },
                ],
                releaseYear: 1977,
                artistId: 1
            },
        ],
    },
    {
        id: 2,
        name: "Joni Mitchell",
        members: 'Roberta Joan "Joni" Mitchell',
        genre: "Pop, Soft Rock",
        origin: "CA",
        rating: 9,
        active: true,
        songs:[
            {
                id: 1,
                name: "Blue",
                releaseYear: 1971,
                artistId: 2,
                albumId: 1
            },
            {
                id: 2,
                name: "A Case of You",
                releaseYear: 1971,
                artistId: 2,
                albumId: 1
            },
            {
                id: 3,
                name: "California",
                releaseYear: 1971,
                artistId: 2,
                albumId: 1
            },
        ],
        albums: [
            {
                id: 1,
                name: "Blue",
                songs: [
                    {
                        id: 1,
                        name: "Blue",
                        releaseYear: 1971,
                        artistId: 2,
                        albumId: 1
                    },
                    {
                        id: 2,
                        name: "A Case of You",
                        releaseYear: 1971,
                        artistId: 2,
                        albumId: 1
                    },
                    {
                        id: 3,
                        name: "California",
                        releaseYear: 1971,
                        artistId: 2,
                        albumId: 1
                    },
                ],
                releaseYear: 1971,
                artistId: 2
            },
        ],
    },
    {
        id: 3,
        name: "Astrud Gilberto",
        members: "Astrud Evangelina Weinert",
        genre: "Bossa Nova, Brazilian Jazz",
        origin: "BR",
        rating: 8,
        active: true,
        songs:[
            {
                id: 7,
                name: "How Insensitive",
                releaseYear: 1977,
                artistId: 3,
                albumId: 4
            },
            {
                id: 8,
                name: "Só Finha de Ser Com Você",
                releaseYear: 1977,
                artistId: 3,
                albumId: 4
            },
        ],
        albums: [
            {
                id: 4,
                name: "The Astrud Gilberto Album",
                songs: [
                    {
                        id: 7,
                        name: "How Insensitive",
                        releaseYear: 1977,
                        artistId: 3,
                        albumId: 4
                    },
                    {
                        id: 8,
                        name: "Só Finha de Ser Com Você",
                        releaseYear: 1977,
                        artistId: 3,
                        albumId: 4
                    },
                ],
                releaseYear: 1965,
                artistId: 3
            },
        ],
    },
    {
        id: 4,
        name: "Creedence Clearwater Revival",
        members: "John Fogerty, Tom Fogerty, Stu Cook, Doug Clifford ",
        genre: "Roots Rock, Swamp Rock, Blues Rock, Southern Rock, Country Rock, Blue-eyed Soul",
        origin: "US",
        rating: 10,
        active: false,
        songs:[
            {
                id: 9,
                name: "Run Through the Jungle",
                releaseYear: 1970,
                artistId: 4,
                albumId: 5
            },
            {
                id: 10,
                name: "I Heard It Through The Grapevine",
                releaseYear: 1970,
                artistId: 4,
                albumId: 5
            },
        ],
        albums: [
            {
                id: 5,
                name: "Cosmo's Factory",
                songs: [
                    {
                        id: 9,
                        name: "Run Through the Jungle",
                        releaseYear: 1970,
                        artistId: 4,
                        albumId: 5
                    },
                    {
                        id: 10,
                        name: "I Heard It Through The Grapevine",
                        releaseYear: 1970,
                        artistId: 4,
                        albumId: 5
                    },
                ],
                releaseYear: 1970,
                artistId: 4
            },
            {
                id: 6,
                name: "Willy and The Poor Boys",
                songs: [
                    {
                        id: 11,
                        name: "Down On The Corner",
                        releaseYear: 1969,
                        artistId: 4,
                        albumId: 6
                    },
                    {
                        id: 12,
                        name: "Cotton Fields",
                        releaseYear: 1969,
                        artistId: 4,
                        albumId: 6
                    },
                    {
                        id: 13,
                        name: "Fortunate Son",
                        releaseYear: 1969,
                        artistId: 4,
                        albumId: 6
                    },
                ],
                releaseYear: 1969,
                artistId: 4
            },
        ],
    },
    {
        id: 5,
        name: "Kynsy",
        members: "Ciara Lindsey",
        genre: "Indie Pop, Rock",
        origin: "IE",
        rating: 8,
        active: true,
        songs:[
            {
                id: 14,
                name: "Mr. Nice Guy",
                releaseYear: 2021,
                artistId: 5,
                albumId: 7
            },
        ],
        albums: [
            {
                id: 7,
                name: "Mr. Nice Guy",
                songs: [
                    {
                        id: 14,
                        name: "Mr. Nice Guy",
                        releaseYear: 2021,
                        artistId: 5,
                        albumId: 7
                    },
                ],
                releaseYear: 2021,
                artistId: 5
            },
        ],
    },
    {
        id: 6,
        name: "Gotts Street Park",
        members: "Josh Crocker, Tom Henry, Joe Harris, Adam Nicolle",
        genre: "Alternative, Indie",
        origin: "UK",
        rating: 9,
        active: false,
        songs:[
            {
                id: 15,
                name: "Favourite Kind of Girl",
                releaseYear: 2020,
                artistId: 6,
                albumId: 8
            },
        ],
        albums: [
            {
                id: 8,
                name: "Favourite Kind of Girl",
                songs: [
                    {
                        id: 15,
                        name: "Favourite Kind of Girl",
                        releaseYear: 2020,
                        artistId: 6,
                        albumId: 8
                    },
                ],
                releaseYear: 2020,
                artistId: 6
            },
        ],
    },
];

//
// ALBUMS
//
const AlbumList = [
    {
        id: 1,
        name: "Blue",
        songs: [
            {
                id: 1,
                name: "Blue",
                releaseYear: 1971,
                artistId: 2,
                albumId: 1
            },
            {
                id: 2,
                name: "A Case of You",
                releaseYear: 1971,
                artistId: 2,
                albumId: 1
            },
            {
                id: 3,
                name: "California",
                releaseYear: 1971,
                artistId: 2,
                albumId: 1
            },
        ],
        releaseYear: 1971,
        artistId: 2
    },
    {
        id: 2,
        name: "Carpenters",
        songs: [
            {
                id: 4,
                name: "Rainy Days and Mondays",
                releaseYear: 1971,
                artistId: 1,
                albumId: 1
            },
            {
                id: 5,
                name: "Let Me Be the One",
                releaseYear: 1971,
                artistId: 1,
                albumId: 1
            },
        ],
        releaseYear: 1971,
        artistId: 1
    },
    {
        id: 3,
        name: "Passage",
        songs: [
            {
                id: 6,
                name: "All You Get from Love Is A Love Song",
                releaseYear: 1977,
                artistId: 1,
                albumId: 3
            },
        ],
        releaseYear: 1977,
        artistId: 1
    },
    {
        id: 4,
        name: "The Astrud Gilberto Album",
        songs: [
            {
                id: 7,
                name: "How Insensitive",
                releaseYear: 1977,
                artistId: 3,
                albumId: 4
            },
            {
                id: 8,
                name: "Só Finha de Ser Com Você",
                releaseYear: 1977,
                artistId: 3,
                albumId: 4
            },
        ],
        releaseYear: 1965,
        artistId: 3
    },
    {
        id: 5,
        name: "Cosmo's Factory",
        songs: [
            {
                id: 9,
                name: "Run Through the Jungle",
                releaseYear: 1970,
                artistId: 4,
                albumId: 5
            },
            {
                id: 10,
                name: "I Heard It Through The Grapevine",
                releaseYear: 1970,
                artistId: 4,
                albumId: 5
            },
        ],
        releaseYear: 1970,
        artistId: 4
    },
    {
        id: 6,
        name: "Willy and The Poor Boys",
        songs: [
            {
                id: 11,
                name: "Down On The Corner",
                releaseYear: 1969,
                artistId: 4,
                albumId: 6
            },
            {
                id: 12,
                name: "Cotton Fields",
                releaseYear: 1969,
                artistId: 4,
                albumId: 6
            },
            {
                id: 13,
                name: "Fortunate Son",
                releaseYear: 1969,
                artistId: 4,
                albumId: 6
            },
        ],
        releaseYear: 1969,
        artistId: 4
    },
    {
        id: 7,
        name: "Mr. Nice Guy",
        songs: [
            {
                id: 14,
                name: "Mr. Nice Guy",
                releaseYear: 2021,
                artistId: 5,
                albumId: 7
            },
        ],
        releaseYear: 2021,
        artistId: 5
    },
    {
        id: 8,
        name: "Favourite Kind of Girl",
        songs: [
            {
                id: 15,
                name: "Favourite Kind of Girl",
                releaseYear: 2020,
                artistId: 6,
                albumId: 8
            },
        ],
        releaseYear: 2020,
        artistId: 6
    },
];

//
// SONGS
//
const SongList = [
    {
        id: 1,
        name: "Blue",
        releaseYear: 1971,
        artistId: 2,
        albumId: 1
    },
    {
        id: 2,
        name: "A Case of You",
        releaseYear: 1971,
        artistId: 2,
        albumId: 1
    },
    {
        id: 3,
        name: "California",
        releaseYear: 1971,
        artistId: 2,
        albumId: 1
    },
    {
        id: 4,
        name: "Rainy Days and Mondays",
        releaseYear: 1971,
        artistId: 1,
        albumId: 2
    },
    {
        id: 5,
        name: "Let Me Be the One",
        releaseYear: 1971,
        artistId: 1,
        albumId: 2
    },
    {
        id: 6,
        name: "All You Get from Love Is A Love Song",
        releaseYear: 1977,
        artistId: 1,
        albumId: 3
    },
    {
        id: 7,
        name: "How Insensitive",
        releaseYear: 1965,
        artistId: 3,
        albumId: 4
    },
    {
        id: 8,
        name: "Só Finha de Ser Com Você",
        releaseYear: 1965,
        artistId: 3,
        albumId: 4
    },
    {
        id: 9,
        name: "Run Through the Jungle",
        releaseYear: 1970,
        artistId: 4,
        albumId: 5
    },
    {
        id: 10,
        name: "I Heard It Through The Grapevine",
        releaseYear: 1970,
        artistId: 4,
        albumId: 5
    },
    {
        id: 11,
        name: "Down On The Corner",
        releaseYear: 1969,
        artistId: 4,
        albumId: 6
    },
    {
        id: 12,
        name: "Cotton Fields",
        releaseYear: 1969,
        artistId: 4,
        albumId: 6
    },
    {
        id: 13,
        name: "Fortunate Son",
        releaseYear: 1969,
        artistId: 4,
        albumId: 6
    },
    {
        id: 14,
        name: "Mr. Nice Guy",
        releaseYear: 2021,
        artistId: 5,
        albumId: 7
    },
    {
        id: 15,
        name: "Favourite Kind of Girl",
        releaseYear: 2020,
        artistId: 6,
        albumId: 8
    },
];

module.exports = { ArtistList, AlbumList, SongList };