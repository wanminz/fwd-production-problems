function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

button.addEventListener("click", ringDoorbell());
