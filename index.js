// Added this here so we do not get an error at the begining
var selectedColorByUser;


var colors = ["green", "red", "yellow", "blue"];

function nextIteration() {
  var randomNumber = Math.floor(Math.random() * (4 - 0));
  return randomNumber;
};

var randomColor = colors[nextIteration()];

var pattern = [randomColor][0];

var idPattern = ('#' + pattern);

var clickedPattern = [];


// The jQuery code inside the ready keyword. this is helpful, because it will
// execute the code once jQuery has been loaded properly The .ready() method offers a way to run
// JavaScript code as soon as the page's Document Object Model (DOM) becomes safe to manipulate.
// We can use $ or jQuery to call out jQuery instead of the lengthy Villa JS
$(document).ready(function() {

  $(idPattern).fadeOut(100).fadeIn(100);
  $(idPattern).click(function() {
    var audio = new Audio("fastSmallSweepTransitionSound.mp3");
    audio.play();
  });


  $(".game_buttons").click(function() {
     selectedColorByUser = this.id;

  })
;











});
