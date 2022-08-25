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
  var audio = new Audio("fastSmallSweepTransitionSound.mp3");
  audio.play();
}

// The jQuery code inside the ready keyword. this is helpful, because it will
// execute the code once jQuery has been loaded properly The .ready() method offers a way to run
// JavaScript code as soon as the page's Document Object Model (DOM) becomes safe to manipulate.
// We can use $ or jQuery to call out jQuery instead of the lengthy Villa JS
$(document).ready(function() {

  // A button is animated once the page is loaded based on whatever idPattern value is
  $(idPattern).fadeOut(100).fadeIn(100);
  // A Sound is made for whatever idPattern the value is
  $(idPattern).click(soundClicked);


  // The ID of the pushed button is added to the empty list each time putting is pressed
  $(".game_buttons").click(function() {
    selectedColorByUser = this.id
    clickedPattern.push(this.id)
    // var audio_1 = new Audio("fastSmallSweepTransitionSound.mp3")
    // audio_1.play()
  });

});
