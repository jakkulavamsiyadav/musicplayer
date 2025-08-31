const songs = [
  { title: "Song 1", artist: "Artist 1", src: "songs/song1.mp3", cover: "covers/cover1.jpg" },
  { title: "Song 2", artist: "Artist 2", src: "songs/song2.mp3", cover: "covers/cover2.jpg" },
  { title: "Song 3", artist: "Artist 3", src: "songs/song3.mp3", cover: "covers/cover3.jpg" }
];



let currentSong = 0;

const playlistPage = document.getElementById("playlist-page");
const playerPage = document.getElementById("player-page");

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("playBtn");
const imgEl = document.getElementById("cover");

// Build Playlist
const playlistDiv = document.getElementById("playlist");
songs.forEach((song, index) => {
  const div = document.createElement("div");
  div.textContent = `${song.title} - ${song.artist}`;
  div.onclick = () => loadSong(index);
  playlistDiv.appendChild(div);
});

// Show Playlist
function showPlaylist() {
  playerPage.style.display = "none";
  playlistPage.style.display = "block";
  audio.pause();
  playBtn.textContent = "▶️";
}

// Load Song
function loadSong(index) {
  currentSong = index;
  title.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
  imgEl.src=songs[index].cover
  audio.src = songs[index].src;

  playlistPage.style.display = "none";
  playerPage.style.display = "block";

  playSong();
}

// Play / Pause
function playSong() {
  audio.play();
  playBtn.textContent = "⏸️";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
}

function togglePlay() {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

// Next / Previous
function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
}