function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

var audio = new Audio('sound.wav');

function playAudioWithLoop() {
  audio.currentTime = 0; 
  audio.loop = true; 
  audio.play(); 
}

document.addEventListener('click', function() {
  playAudioWithLoop();
});
