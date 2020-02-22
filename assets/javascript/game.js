// *********SETTING UP THE GAME*************

// Create an array with my list of words
var wordlist=["PULP FICTION", "BIG LEBOWSKI", "FIGHT CLUB", "PRETTY WOMAN","TITANIC","THE MATRIX", "FORREST GUMP", 
            "SCREAM", "AMERICAN BEAUTY", "MAGNOLIA","TRUE LIES","FARGO","THE SIXTH SENSE","THE MASK","KILL BILL"];

//create an array with the alphabet letters and variables to generate buttons
var letters=["A", "B", "C", "D", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];            
var letterbuttons=false;
var gamewon =true;
//create variables that will be used in the game

var underscore;[]
var dashes;
var guessesleft;
var wins=0;
var losses=0;
var lettersguessed;
var letterbuttons;
var chooseletter;
var clickeditem;

//variables for the game about to be played
var randomword;
var randomgame;
var gameletters;

//variable toc check on the result (win or loose)

var result;

//******************************** THE MAIN HANGMAN GAME ****************************************


document.getElementById("guessesleft")


//Create a variable that picks the words randomly

var randomword= wordlist[Math.floor(Math.random()* wordlist.length)];