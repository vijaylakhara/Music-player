let prev=document.getElementById('prev')
let play=document.getElementById('play')
let artist=document.getElementById('artist')
let title=document.getElementById('title')
let img=document.querySelector('img')
let next=document.getElementById("forword")
let music=document.querySelector("audio")
let isPlay=false

let songs=[{
    name:"bone",
    titles:"Bones",
     artists:"Imagine Dragons",
     coverPath:"img/bone.jpg"
},
{
    name:"bloody",
    titles:"Bloody Mary",
    artists:"Lady Gaga",
    coverPath:"img/bloody.jpg"

},
{
    name:"fairy",
    titles:"Fairy Tale",
    artists:"Alexander Rybak",
    coverPath:"img/fairy.jpg"

},
{
    name:"fighter",
    titles:"Fighter",
    artists:"The Score",
    coverPath:"img/fighter.jpg"

}]
let playMusic=()=>{
    isPlay=true
    music.play()
    play.classList.replace('fa-play','fa-pause')
    img.classList.add('anime')
}

let pauseMusic=()=>{
    isPlay=false
    music.pause()
    play.classList.replace('fa-pause','fa-play')
    img.classList.remove('anime')
}

play.addEventListener('click',()=>{
    if(isPlay){
        pauseMusic();
    }
    else{
        playMusic();
    }
})
let loadSong=(songs)=>{
    console.log(songs.titles)
    title.textContent=songs.titles
    artist.textContent=songs.artists
    img.src="img/"+songs.name+".jpg"
    // img.scr=`img/${songs.name}.jpg`
    // music.scr=`music/${songs.name}.mp3`
    music.src="music/"+songs.name+".mp3"


}
let songIndex=0
const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length
loadSong(songs[songIndex]);
playMusic();
}
let prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length
    loadSong(songs[songIndex])
    playMusic();
    
    
}

next.addEventListener('click',nextSong);

prev.addEventListener('click',prevSong);
