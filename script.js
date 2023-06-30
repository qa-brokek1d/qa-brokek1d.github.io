function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

  var audio = new Audio('sound.wav');
  audio.loop = true;
  var playAudioBtn = document.getElementById('play-audio');

  playAudioBtn.addEventListener('click', function() {
    audio.play();
  });
