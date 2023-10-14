const repeatBtn = document.querySelector('.repeatBtn');
const prevBtn = document.querySelector('.prevBtn');
const playBtn = document.querySelector('.playBtn');
const nextBtn = document.querySelector('.nextBtn');
const favBtn = document.querySelector('.favBtn');
const audio = document.querySelector('audio');
const nameOfSong = document.getElementById('nameOfSong');
const nameOfArtist = document.getElementById('nameOfArtist');
const mainImg = document.querySelector('.mainImg');

const songs = [
    {
        id: 1,
        nameOfSong: 'Seasons Change',
        nameOfArtist: 'Quasimoto',
        path: './songs/song1.mp3',
        songCover: 'background-image:url(./assets/mainImg.svg)'
    },
    {
        id: 2,
        nameOfSong: 'Mosquito Song',
        nameOfArtist: 'Queens Of The Stone Age',
        path: './songs/song2.mp3',
        songCover: 'background-image:url(./assets/mainImg2.svg)'
    },
];
let flag = false;
let flagLike = false;
let currentIndexSong = 0;

playBtn.addEventListener('click', () => {
    audio.src = songs[currentIndexSong].path;
    nameOfArtist.textContent = songs[currentIndexSong].nameOfArtist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    mainImg.style = songs[currentIndexSong].songCover;
    if (flag == false) {
        audio.play();
        playBtn.style = 'background-image:url(./assets/pause.svg)';
        flag = true;
    } else {
        audio.pause();
        playBtn.style = 'background-image:url(./assets/playBtn.svg)';
        flag = false;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndexSong == 0) return
    currentIndexSong--
    audio.src = songs[currentIndexSong].path;
    nameOfArtist.textContent = songs[currentIndexSong].nameOfArtist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    mainImg.style = songs[currentIndexSong].songCover;
    audio.play();
    flag = true;
    playBtn.style = 'background-image:url(./assets/pause.svg)';
});

nextBtn.addEventListener('click', () => {
    if (currentIndexSong == songs.length - 1) return
    currentIndexSong++;
    audio.src = songs[currentIndexSong].path;
    nameOfArtist.textContent = songs[currentIndexSong].nameOfArtist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    mainImg.style = songs[currentIndexSong].songCover;
    audio.play();
    flag = true;
    playBtn.style = 'background-image:url(./assets/pause.svg)';
});

favBtn.addEventListener('click', () => {
    if (flagLike == false) {
        favBtn.style = 'background-image:url(./assets/favBtn2.svg)';
        flagLike=true;
    } else {
        favBtn.style = 'background-image:url(./assets/favBtn.svg)';
        flagLike=false;
    }
});
