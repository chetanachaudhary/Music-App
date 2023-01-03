const play = document.getElementById('play');
const music = document.querySelector('audio');
const img = document.querySelector("img");
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [{
    name: "Music1",
    title: "Sunideu",
    artist: "Apurva Tamang"
},
{
    name: "Music2",
    title: "Nature",
    artist: "The Nature"
},
{
    name: "Music3",
    title: "Sunshine",
    artist: "The shining"
}
]

let playing = false; //condition 

//for play
const playMusic = () => {
    playing = true;
    music.play();
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add('anime');
};

//for pause
const pauseMusic = () => {
    playing = false;
    music.pause();
    play.classList.replace('fa-pause', "fa-play");
    img.classList.remove('anime');
};

play.addEventListener('click', () => {

    playing ? pauseMusic() : playMusic();
});

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src="music/"+songs.name+".mp3";
    // img.src="images/"+songs.name+".png";
}

songIndex = 0;
const nextSong = () => {
    // songIndex++;
    songIndex = (songIndex + 1) % songs.length; //to repeate song 
    loadSong(songs[songIndex]);
    playMusic();
}
// loadSong(songs[0]);

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);