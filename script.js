const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const progress = document.querySelector('.progress');
const time = document.querySelector('.time');

playPauseBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

audio.addEventListener('timeupdate', function() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressWidth = (currentTime / duration) * 100;
  progress.style.width = progressWidth + '%';
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  time.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
});
