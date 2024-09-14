const wrapper = document.querySelector(".wrapper"),
    musicImg = document.querySelector("img"),
    musicName = document.querySelector(".name"),
    musicArtist = document.querySelector(".artist"),
    playPauseBtn = document.querySelector(".play-pause"),
    prevBtn = document.querySelector("#prev"),
    nextBtn = document.querySelector("#next"),
    mainAudio = document.querySelector("#main-audio"),
    progressArea = document.querySelector(".progress-area"),
    progressBar = document.querySelector(".progress-bar");

let allMusic = [
    {
        name: "Brief",
        artist: "Zehr Vibe",
        img: "0.png",
        src: "0"
    },
    {
        name: "295",
        artist: "Sidhu Moosewala",
        img: "1.jpg",
        src: "1"
    },
    {
        name: "Gall Khas",
        artist: "Zehr Vibe",
        img: "2.png",
        src: "2"
    },
    {
        name: "52 Bars",
        artist: "Karan Aujla",
        img: "3.png",
        src: "3"
    },
    {
        name: "W",
        artist: "Emiway Bantai",
        img: "4.png",
        src: "4"
    },
];

let musicIndex = 1;
isMusicPaused = true;
window.addEventListener('load', () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `Images/${allMusic[indexNumb - 1].img}`;
    mainAudio.src = `Audio/${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic() {
    wrapper.classList.add("paused");
    musicImg.classList.add("rotate");
    playPauseBtn.innerHTML = '<ion-icon name="pause"></ion-icon>';
    mainAudio.play();
}

function pauseMusic() {
    wrapper.classList.remove("paused");
    musicImg.classList.remove("rotate");
    playPauseBtn.innerHTML = '<ion-icon name="play"></ion-icon>';
    mainAudio.pause();
}

function prevMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

playPauseBtn.addEventListener('click', () => {
    const isMusicplay = wrapper.classList.contains("paused");
    isMusicplay ? pauseMusic() : playMusic();
});
prevBtn.addEventListener('click', () => {
    prevMusic();
});
nextBtn.addEventListener('click', () => {
    nextMusic();
});

mainAudio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuration = wrapper.querySelector('.max-duration');
    mainAudio.addEventListener('loadeddata', () => {
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;
    });
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressArea.addEventListener('click', (e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = mainAudio.duration;
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
});
mainAudio.addEventListener('ended', () => {
    nextMusic();
});