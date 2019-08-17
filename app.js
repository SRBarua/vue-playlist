//vue object
var app = new Vue ({
    el: '#app', //root instance
    //data as an object
    data: {
        songs: [
            { title: 'Katy Perry', artist: 'Roar'},
            { title: 'Leroy Brown', artist: 'Jim Croce' },
            { title: 'Leroy Brown', artist: 'Jim Croce' },
            { title: 'Celine Dion', artist: 'The Power of Love'},
            { title: 'Lady Gaga', artist: 'Shallow'},
            { title: 'Celine Dion', artist: 'I am Alive'},
            { title: 'Celine Dion', artist: 'My Heart Will Go On'},
            { title: 'Bryan Adams', artist: 'I Do It for You'},
            { title: 'Bryan Adams', artist: 'Please Forgive Me'},
            { title: 'Lionel Richie', artist: 'Hello'},
            { title: 'Michael Jackson', artist: 'they Donot Care About Us'},
            { title: 'Michael Jackson', artist: 'Black Or White'},
            { title: 'Madonna', artist: 'La Isla Bonita'},
            { title: 'Madonna', artist: 'Like a Prayer'}
        ],
        newSong: {
            title: '',
            artist: ''
        }
    },

    //define methods under methods object
    methods: {
        addSong () {
            this.songs.splice(0,0, { title: this.newSong.title, artist: this.newSong.artist });
            this.newSong = { title: '', artist: ''}
        },
        deleteSong(target) {
            this.songs.splice(target, 1)
        },
        toggleFavorite(target) {
            this.songs[target].favorite = !this.songs[target].favorite;
            console.log(this.songs[target].favorite);
        }
    }
})
