//vue object
var app = new Vue ({
    el: '#app', //root instance
    //data as an object
    data: {
        songs: [
            { title: 'Leroy Brown', artist: 'Jim Croce' },
            { title: 'Leroy Brown', artist: 'Jim Croce' },
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
        }
    }
})
