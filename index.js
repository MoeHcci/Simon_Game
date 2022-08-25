// Added this here so we do not get an error at the begining
var selectedColorByUser;


var colors = ["green", "red", "yellow", "blue"];

// The random # generator
function nextIteration() {
  var randomNumber = Math.floor(Math.random() * (4 - 0));
  return randomNumber;
};
// Breakdown of codes to produce an ID of one of the colors
var randomColor = colors[nextIteration()];
var pattern = [randomColor][0];
var idPattern = ('#' + pattern);

// introduce an empty list
var clickedPattern = [];

// Function that plays sounds
function soundClicked() {
  var audio = new Audio("green.mp3");
  audio.play();
}

// Function that plays sounds baseds on the key clicked
function keyClicked(x) {
  if (x.keyCode == "38") {
    new Audio('green.mp3').play();
  } else if (x.keyCode == "37") {
    new Audio('red.mp3').play();
  } else if (x.keyCode == "40") {
    new Audio('yellow.mp3').play();
  } else if (x.keyCode == "39") {
    new Audio('blue.mp3').play();
  }
};

// Function that plays sounds baseds on the clicking the button
function buttonClicked(x) {
  if (selectedColorByUser == "green") {
    new Audio('green.mp3').play();
  } else if (selectedColorByUser == "red") {
    new Audio('red.mp3').play();
  } else if (selectedColorByUser == "yellow") {
    new Audio('yellow.mp3').play();
  } else if (selectedColorByUser == "blue") {
    new Audio('blue.mp3').play();
  }
};



// Start of $(document).ready(function()
$(document).ready(function() {

  // A button is animated once the page is loaded based on whatever idPattern value is, which is controlled randomly
  $(idPattern).fadeOut(100).fadeIn(100);


  // The ID of the pushed button is added to the empty list each time putting is pressed
  $(".game_buttons").click(function() {
    selectedColorByUser = this.id
    clickedPattern.push(this.id)
  });

  // Play the keyClicked function
  $(document).keydown(keyClicked);

  // Play the buttonClicked function
  $(document).click(buttonClicked);

  // End of $(document).ready(function()
});
