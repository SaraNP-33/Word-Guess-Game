// *********SETTING UP THE GAME*************

// Create an array with my list of words
var wordlist=["PULP FICTION", "BIG LEBOWSKI", "FIGHT CLUB", "PRETTY WOMAN","TITANIC","THE MATRIX", "FORREST GUMP", 
            "SCREAM", "AMERICAN BEAUTY", "MAGNOLIA","TRUE LIES","FARGO","THE SIXTH SENSE","THE MASK","KILL BILL"];
            
            
// Hints to be used in each guess attemp for the specific word. 
//still missing this part

var hints =[{

    picture:"a"
}

]
//create variables that will get the Id's from html
var startGame = document.querySelector("#startgame");

//create an array with the alphabet letters and variables to generate buttons
var letters=["A", "B", "C", "D", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];            
var letterbuttons=false;
var gamewon =true;
//create variables that will be used in the game

var underscore=[] 
var dashes= document.querySelector("#wordspaces") //variable to work with the underscore
var guessesleft; // to keep count of how many guesses is there left
var wins=0; // keep track of score
var losses=0; // keep track of score
var lettersguessed; // keep track of letters that user gor right
var letterbuttons= document.getElementById("letterbuttons"); // to set up the alphabet buttons
var chooseletter; // for when the user chooses a particular letter
var clickeditem; // for when the user clicks an item;

//variables for the game about to be played
var randomword; //whatever word is picked to be guesses
var randomgame; // whatever game is set up;
var gameletters; // the specific letters that need to be gueesed.

//variable toc check on the result (win or loose)

var result;

//******************************** THE MAIN HANGMAN GAME ****************************************

//create a function that runs the game:

function gameStart() {
    console.log("click")
   
    randomword= wordlist[Math.floor(Math.random()* wordlist.length)];
    console.log (randomword);
for(var i=0; i<randomword.length; i++){
    underscore.push("_")
}
document.getElementById('wordspaces').textContent = underscore.join(' ');
    // // randomgame=wordlist[randomword];
    // gameletters= randomword.split(' ');
    // console.log(gameletters);
    
    guessesleft=randomword.length;
    console.log(guessesleft)
    document.getElementById('guesses-left').textContent= `Guesses Left: ${guessesleft}`
    // dashes= randomword.length;

    if(guessesleft<10){
        guessesleft=9;
    }
    for(let i=0; i<dashes; i++){
        if(gameletters[i]===" "){
        underscore.push(letters);
        console.log(letters)
    }
    else {
        underscore.push("_");
    }
    console.log(gameletters);
console.log (underscore);
    abc();
}
//console.log the info of the game:



// Now I connect  the variables to the HTML file

//allows for spaces between the underscore
// document.getElementById("wordspaces").textContent=underscore.join(' ');

//keep the number of guesses left
document.getElementById("guessesleft").textContent = guessesleft;

//the wins and losses

document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent =losses;

//to put the pictures and the hints up in this docuemnt and link them to the right word.
//still missing this part!
};
letterbuttons=true;

// create function to see the letter buttons with attributes that allow me to
//modify yhe button in css and appent it to my card-body in html. 
function abc(){

    for(let i=0; i<letters.length; i++){
        var button = document.createElement("button");
        button.setAttribute("data-letter", letters[i]);
        button.setAttribute("id", "letterbutton");
        button.classList.add("button","buttonspace");
        button.textContent=letters[i];
        letterbuttons.appendChild(button);
        console.log(button);
        return button
    }
};

//create a function that allows wrong letters to appear in another area
function pickedletter (a){
if(!gamewon){
    clickeditem = a.target;
    
    chooseletter = clickeditem.dataset.letter;
    if(clickeditem.nodeName !== 'DIV'){
        choice(chooseletter);
        document.getElementById("wrongletters").appendChild(clickeditem);
    }
}
};

//create function that allows to track the letter choices and make the underscores change accorddingly
function choice(letter) {
    var lettersguessed =false; 

    for(let i = 0; i < dashes; i++){
        if(gameletters[i] === letter){
            lettersguessed = true;
        }
    }
    if(lettersguessed){

        for (let i = 0; i < dashes; i++){
            if (underscores[i] === " "){
                underscores[i] = letters;
            } else {
                underscores[i] = underscores[i];
            }
        }

        for(let i = 0; i < dashes; i ++) {
            if(gameLetters[i] === letters){
                underscores[i] = letters;
                document.getElementById("wordspaces").innerHTML = underscores.join(' ');
                clickeditem.style.visibility = "hidden";
            }
        }
    }
        else {
            guessesLeft--;
            document.getElementById("guessesleft").textContent = `Guesses Left: ${guessesLeft}`;
        }
        gamecheck();
    
};

//create function that moderates the results - win or lose with alerts for each case

function gamecheck(){

    result = underscores;
    for (let i = 0; i < blanks; i++){
        if (underscores[i] === letters) {
            result[i] = " ";
        } else {
            result[i] = underscores[i];
        }
    }
   
    if(result.toString() === gameLetters.toString()){
        wins++;
        document.getElementById('wins').textContent = `Wins: ${wins}`;
        alert("Hooray, Movie Buff!"); 
    } else if (guessesLeft === 0){
        losses++;
        document.getElementById('lose').textContent = `Losses: ${losses}`;
        wonGame = true;
        alert("Boo...you need to watch more 90's movies!");
    }
};

//to start the game

startGame.addEventListener("click", gameStart)


document.addEventListener("click", choice);

//when click the reset button it will bring the game back to the original position. 
// document.addEventListener("click", function reset() {
//     guessesLeft = 0;
//     wins = 0;
//     losses = 0;
//     gamewon = false;
//     letterbuttons = false;
//     document.getElementById("#resetgame")= reset;
//     document.querySelector("letterbuttons").innerHTML = [];
//     document.querySelector("wrongletters").innerHTML = [];
//     document.getElementById("wordspaces").textContent = '_ _ _ _ _ _'; 
//     document.getElementById("guessesleft").textContent = `Guesses Left: ${guessesLeft}`;
//     document.getElementById("movie-image").src = [];
//     document.getElementById("hints").innerHTML = [];
    
    
// })