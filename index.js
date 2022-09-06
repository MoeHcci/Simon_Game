// SECTION 1 (var introduction)
// Var introduction
// The level var for keeping track of the game's levels
// var level = 0;
// This var is to keep track the button user clicks on
var selectedColorByUser;
// The colors var contains all the colors we are working with
var colors = ["green", "red", "yellow", "blue"];

// SECTION 2 (randomness)
// // Numbers generation (random)
// var randomNumber = Math.floor(Math.random() * (4 - 0));
// // Secting a color based on the generated number
// var randomColor = colors[randomNumber];
// // adding # because we was to manipulate an ID
// var idPattern = ('#' + randomColor);


// SECTION 3 (lists)
// introduce an empty list, which will keep track of the clicked buttons
var clickedPattern = [];
// introduce an empty list, which will keep track of the levels buttons
var clickedPatternLevels = [];
// introduce an empty list, which will keep track of the patterns suggested buttons
var randomPatterns = [];

var random_1Pattern = [];

// SECTION 4 (Sounds Playing )
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
// Listen for a "keydown" & Play the keyClicked function
$(document).keydown(keyClicked);
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
// Listen for a "click" & Play the buttonClicked function
$(document).click(buttonClicked);




// Need to figure out how a second button can be iniated after level becomes 1 and a third on and so on.
// function takes level as an imput
// generates a random number
// and produceds a random # button click



// SECTION 5 (Game Logic)
// Starting the game
function gameStartLvlIncrease() {
  level = 0;
  $("#title_1").text("LVL " + level);
  clickedPatternLevels.push(level);

  // while the level is 0 or above
  while (level < 3) {


    // console.log('The level is ' + level);
    random_1 = ('#' + ["green", "red", "yellow", "blue"][Math.floor(Math.random() * (4 - 0))]);
    // console.log(random_1);
    random_1Pattern.push(random_1)
    // console.log(random_1Pattern);

    for (i = 0; i < clickedPatternLevels.length; i = i + 1) {
      $(random_1Pattern[i]).fadeOut(100).fadeIn(100);
      // console.log(random_1Pattern[i] + " Has been faded");
    };


// if statement. if true move to the next step if nit exit.

    level = level + 1;
    // console.log("The following level has been added, level: " + level);
    clickedPatternLevels.push(level);
    $("#title_1").text("LVL " + level);

  };


};

$(document).click(gameStartLvlIncrease);

$(".game_buttons").click(function() {
  selectedColorByUser = this.id
  clickedPattern.push(this.id)
});
