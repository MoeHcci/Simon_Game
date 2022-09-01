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


var wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://thewebdev.info/2022/02/09/how-to-create-pause-or-delay-in-a-javascript-for-loop/#:~:text=JavaScript%20for%20loop%3F-,To%20create%20pause%20or%20delay%20in%20a%20JavaScript%20for%20loop,with%20a%20for%2Dof%20loop.&text=to%20define%20the%20wait%20function,the%20promise%20in%20ms%20milliseconds.

// SECTION 5 (Game Logic)
// Starting the game
async function gameStartLvlIncrease() {
  level = 0;
  $("#title_1").text("LVL " + level);
  clickedPatternLevels.push(level);
  random_0 = ('#' + ["green", "red", "yellow", "blue"][Math.floor(Math.random() * (4 - 0))]);
  $(random_0).fadeOut(100).fadeIn(100);


while (level < 10) {


  console.log('The level is ' + level);
  random_1 = ('#' + ["green", "red", "yellow", "blue"][Math.floor(Math.random() * (4 - 0))]);
  console.log(random_1);
  random_1Pattern.push(random_1)
  console.log(random_1Pattern);


  level = level + 1
  console.log ("The following level has been added, level: " + level)
  clickedPatternLevels.push(level);
  await wait(1000);
  $("#title_1").text("LVL " + level);



};


  // while (level => 0) {
  //
    // random_1 = ('#' + ["green", "red", "yellow", "blue"][Math.floor(Math.random() * (4 - 0))]);
    // random_1Pattern.push(random_1)
  //
    // for (i = 0; i < clickedPatternLevels.length; i = i + 1) {
    //
    //   $(random_1Pattern[i]).fadeOut(100).fadeIn(100);
    //   await wait(100);
    //
    // };
  //
  //   if (clickedPatternLevels.length === clickedPattern.length) {
  //     $("#title_1").text("LVL " + level);
  //     clickedPatternLevels.push(level);
  //     level = 1 + level;
  //   } else {
  //     break;
  //   };
  //
  //
  // };
};

$(document).click(gameStartLvlIncrease);

$(".game_buttons").click(function() {
  selectedColorByUser = this.id
  clickedPattern.push(this.id)
});
