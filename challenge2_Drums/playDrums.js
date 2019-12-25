function crash() {
  let audio = document.getElementById("crash");
  audio.play();
  shake("crashMove");
}
function ride() {
  let audio = document.getElementById("ride");
  audio.play();
}
function floorTom() {
  let audio = document.getElementById("floorTom");
  audio.play();
}
function midTom() {
  let audio = document.getElementById("midTom");
  audio.play();
}
function highTom() {
  let audio = document.getElementById("highTom");
  audio.play();
}
function kick() {
  let audio = document.getElementById("kick");
  audio.play();
}
function snare() {
  let audio = document.getElementById("snare");
  audio.play();
}
function hitHatOpen() {
  let audio = document.getElementById("hitHatOpen");
  audio.play();
  shake("hatMove");
}
function hitHatClosed() {
  let audio = document.getElementById("hitHatClosed");
  audio.play();
  shake("hatMove");
}
//link keyboard to actions
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 69:
      crash();
      break;
    case 82:
      ride();
      break;
    case 70:
      floorTom();
      break;
    case 71:
      midTom();
      break;
    case 72:
      highTom();
      break;
    case 86:
    case 66:
      kick();
      break;
    case 74:
      snare();
      break;
    case 73:
      hitHatOpen();
      break;
    case 75:
      hitHatClosed();
      break;
  }
};
//shake
function shake(id) {
  document
    .getElementById(id)
    .setAttribute(
      "style",
      "animation: shake 0.5s; animation-iteration-count: 1;"
    );
}
