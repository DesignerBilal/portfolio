//Audio
const audio = document.getElementById('background-audio');
audio.volume = 0.4; // Set volume (0.0 to 1.0)

const controlButton = document.getElementById('audio-control');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    controlButton.innerHTML = '⏸'; // Change to pause symbol when audio is playing
  } else {
    audio.pause();
    controlButton.innerHTML = '▶'; // Change to play symbol when audio is paused
  }
}