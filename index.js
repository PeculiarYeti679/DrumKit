
//Detecting Button Press

//var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML)
    animateButton(buttonInnerHTML)

  });
}

addEventListener("keydown", function(event) {
  playSound(event.key)
  animateButton(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-2.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-2.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/tom-2.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/tom-2.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML)

  }
}

function animateButton(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed")

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
