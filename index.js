// SECTION 1 (var introduction)
// Var introduction
// The level var for keeping track of the game's levels
var level = 0;
// This var is to keep track the button user clicks on
var selectedColorByUser;
// The colors var contains all the colors we are working with
var colors = ["green", "red", "yellow", "blue"];

// SECTION 2 (randomness)
// // Numbers generation (random)
var randomNumber = Math.floor(Math.random() * (4 - 0));
// Secting a color based on the generated number
var randomColor = colors[randomNumber];
// adding # because we was to manipulate an ID
var idPattern = ('#' + randomColor);



// SECTION 3 (lists)
// introduce an empty list, which will keep track of the clicked buttons
var clickedPattern = [];
// introduce an empty list, which will keep track of the levels buttons
var clickedPatternLevels = [];


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




// SECTION 5 (Game Logic)
// Starting the game
  // Any click on the screen starts the game (Game logic)
  $(document).click(function() {
    $("#title_1").text("LVL " + level)
    // Fill the clickedPatternLevels list
    clickedPatternLevels.push(level)
    // Once the above condition is satisfied (page has been clicked). The below is activated
    $(idPattern).fadeOut(100).fadeIn(100)
    // Going into the next level
    level = level + 1
  });



  // The ID of the pushed button is added to the empty list each time putting is pressed
  $(".game_buttons").click(function() {
    selectedColorByUser = this.id
    clickedPattern.push(this.id)
  });
