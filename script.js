function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

var audio = new Audio('sound.wav');

function playAudioWithLoop() {
  if (audio.paused) {
    audio.currentTime = 0; 
    audio.loop = true; 
    audio.play();
  }
}

document.addEventListener('click', function(event) {
  var menu = document.getElementById("menu-bar");
  var nav = document.getElementById("nav");

  if (!menu.contains(event.target) && !nav.contains(event.target)) {
    menu.classList.remove("change");
    nav.classList.remove("change");
    document.getElementById("menu-bg").classList.remove("change-bg");
  }

  playAudioWithLoop();
});
