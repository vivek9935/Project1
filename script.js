const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const PrevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
// Song title 
const songs =['hey','summer','ukulele']
// keep track of song 
let songIndex = 2
// Intially load song  into DOM
loadSong(songs[songIndex])
//Update song 
function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}
function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}
function prevSong(){
songIndex--
if(songIndex<0){
    songIndex = songs.length-1

}
loadSong(songs[songIndex])
playSong()
}
function nextSong(){
    songIndex++
    if(songIndex>songs.length-1){
        songIndex = 0
    
    }
    loadSong(songs[songIndex])
    playSong()
    }
    // for progress container to move
function updateProgress(e){
    const {duration,currentTime}=e.target
    const progressPercent=(currentTime/duration)*100
    progress.getElementsByClassName.width=`${progressPercent}%`
}
//change the length of progress by clicking
function setProgress(e){
const width = this.clientWidth
const clickX=e.offsetX
console.log(clickX)
const duration = audio.duration
}
//event listeners
playBtn.addEventListener('click',() =>
{
    const isPlaying = musicContainer.classList.contains('play')
    
    if(isPlaying){
        pauseSong()

    }else{
        playSong()
    }
})
PrevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)
audio.addEventListener('timeupdate',updateProgress)
progressContainer.addEventListener('click'.setProgress)
audio.addEventListener('ended',nextSong)