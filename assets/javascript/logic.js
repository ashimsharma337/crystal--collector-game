//GLOBAL VARIABLES
// ==================================================

// Crystal Variables
var crystal = {
    blue:
 {
     name: "Blue",
     value: 0
 },
 green:
 {
     name: "Green",
     value: 0

 },
 red:{
     name: "Red",
     value: 0
 },
 yellow:{
     name: "Yellow",
     value: 0
 },
};

//Scores (current and Target)
var currentScore = 0;
var targetScore = 0;

//Wins and losses
var winCount = 0;
var lossCount = 0;



//FUNCTIONS
//===================================================


// Helper Function for getting random numbers.
var getRandom = function(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

// Starts the Game (and restarts the Game)
var startGame = function(){

    // Reset the Current Score
    currentScore = 0;

    //Set a new Target score (between 19 and 120)
    targetScore = getRandom(19, 120);
    //set different values for each of the crystal (between 1 and 12)
    crystal.blue.value              = getRandom(1, 12);
    crystal.red.value               = getRandom(1, 12);
    crystal.green.value             = getRandom(1, 12);
    crystal.yellow.value            = getRandom(1, 12);

    //Change the HTML to reflect all of these  changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    //Testing Console
    console.log("-----------------")
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
    console.log("------------")

}

// Respond to clicks on the crystal
var addValues = function(crystal){
    // Change currentScore
           currentScore = currentScore + crystal.value;

    // Change the HTML to reflect changes in currentScore
    $("#yourScore").html(currentScore);


    //Call the checkWin Function
     checkWin();

    //Testing Console
    console.log("Your Score: " + currentScore);

}

//Check if User Won or Lost and Reset the Game
var checkWin = function(){

 // Check if currentScore is larger than targetScore
 if(currentScore > targetScore){
     alert("Sorry. You lost!");
     console.log("You Lost");

     //Add to loss Counter
     lossCount++;

     //Change Loss Count HTML
     $("#lossCount").html(lossCount);

     // Restart the game
     startGame();

 }
 else if (currentScore == targetScore){
     alert("Congratulation! you Won");
     console.log("You Won!");

     //Add to the Win Counter
     winCount++;

     //Change Win Count HTML
     $("#winCount").html(winCount); 

     //Restart the game
     startGame();

 }



}

//MAIN PROCESS
// ==================================================

//Starts the Game the first time
startGame();

$("#blue").click(function(){
    addValues(crystal.blue);
});

$("#green").click(function(){
    addValues(crystal.green);
});

$("#red").click(function(){
    addValues(crystal.red);
});

$("#yellow").click(function(){
    addValues(crystal.yellow);
});