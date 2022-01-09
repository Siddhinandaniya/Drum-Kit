// we will use FOR loop to get all the buttons clicked and get EventListener to it. 

//Detecting Button press
let numberofButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberofButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
 

    // console.log(u);
    let letterInsideScreenButton = this.innerHTML;   //check value inside screen button
    soundPlay(letterInsideScreenButton);

    buttonAnimation(letterInsideScreenButton);
 
  });
}


// EventListener added to check which key was pressed on keyboard // Detecting keyboard press
document.addEventListener("keydown", function(allKeyInfo){         //allKeyInfo = all information of key pressed

let KeyLetter = allKeyInfo.key;            //value of key button which pressed on keyboard
soundPlay(KeyLetter);
buttonAnimation(KeyLetter);


});


// simple function soundplay
function soundPlay(letter){

  switch (letter) {

      case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
  
     default:                                   //else
     // alert("there's no sound");
      break;
  }
}


function buttonAnimation(currentKey){
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");


  setTimeout(function(){
    activeButton.classList.remove("pressed")
    
  }, 100);
}






