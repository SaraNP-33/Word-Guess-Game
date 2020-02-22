// *********SETTING UP THE GAME*************

// Create an array with my list of words
var wordlist=["PULP FICTION", "BIG LEBOWSKI", "FIGHT CLUB", "PRETTY WOMAN","TITANIC","THE MATRIX", "FORREST GUMP", 
            "SCREAM", "AMERICAN BEAUTY", "MAGNOLIA","TRUE LIES","FARGO","THE SIXTH SENSE","THE MASK","KILL BILL"];
            
            
// Hints to be used in each guess attemp for the specific word. 

var hints =[{

    picture:"a"
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

    else {
        underscore.push("_");
    }
}
//console.log the info of the game:
console.log(gameletters);
console.log (underscore);


// Now I connect  the variables to the HTML file

//allows for spaces between the underscore
document.getElementById("wordspaces").textContent=underscore.join(' ');

//keep the number of guesses left
document.getElementById("guessesleft").textContent = guessesleft;

//the wins and losses

document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent =losses;

//to put the pictures and the hints up in this docuemnt and link them to the right word.


letterbuttons=true;
document.getElementById("letterbuttons")=letterbuttons;
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
    var letterFound=false;

    for(let i = 0; i < blanks; i++){
        if(gameletters[i] === letter){
            letterFound = true;
        }
    }
    if(letterFound){

        for (let i = 0; i < blanks; i++){
            if (underscores[i] === " "){
                underscores[i] = letters;
            } else {
                underscores[i] = underscores[i];
            }
        }

        for(let i = 0; i < blanks; i ++) {
            if(gameLetters[i] === letter){
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

//create function that moderates the results - win or lose:

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

document.addEventListener("click", function() {
    gameStart();
   document.getElementById("#Startgame")= gameStart; 
    
    document.addEventListener("click", choice);
    
    
});

//when click the reset button it will bring the game back to the original position. 
document.addEventListener("click", function reset() {
    guessesLeft = 0;
    wins = 0;
    losses = 0;
    gamewon = false;
    letterbuttons = false;
    document.querySelector("#letterbuttons").innerHTML = "";
    document.querySelector("#wrongletters").innerHTML = "";
    document.getElementById("wordspaces").textContent = '_ _ _ _ _ _'; 
    document.getElementById("guessesleft").textContent = `Guesses Left: ${guessesLeft}`;
    document.getElementById("movie-image").src = "";
    document.getElementById("hints").innerHTML = "";
    
    
})};