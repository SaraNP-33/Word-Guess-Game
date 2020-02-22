// *********SETTING UP THE GAME*************

// Create an array with my list of words
var wordlist=["PULP FICTION", "BIG LEBOWSKI", "FIGHT CLUB", "PRETTY WOMAN","TITANIC","THE MATRIX", "FORREST GUMP", 
            "SCREAM", "AMERICAN BEAUTY", "MAGNOLIA","TRUE LIES","FARGO","THE SIXTH SENSE","THE MASK","KILL BILL"];
            
            
// Hints to be used in each guess attemp for the specific word. 

var hints =[{

}

]

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

//create a function that runs the game:

function gameStart() {
    randomword= wordlist[Math.floor(Math.random()* wordlist.length)];
    console.log (randomword);

    randomgame=wordlist[randomword];
    gameletters= randomgame.split(' ');
    guessesleft=randomgame.length;
    dashes= randomgame.length;

    if(guessesleft>10){
        guessesleft=9;
    }
    for(let i=0; i<dashes; i++){
        if(gameletters[i]===" ")
        underscore.push(letters);

    }else{
        underscore.push("_");
    }
}
//console.log the info of the game:
console.log(gameletters);
console.log (underscore);


// Now i connect all the variables to the HTML file

//allows for spaces between the underscore
document.getElementById("wordspaces").textContent=underscore.join(' ');

//keep the number of guesses left
document.getElementById("guessesleft").textContent = guessesleft;

//the wins and losses

document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent =losses;

//to put the pictures and the hints up:


letterbuttons=true;


