// *********SETTING UP THE GAME*************

// Create an array with my list of words
var wordlist = ["PULP FICTION", "BIG LEBOWSKI", "FIGHT CLUB", "PRETTY WOMAN", "TITANIC", "THE MATRIX", "FORREST GUMP",
    "SCREAM", "AMERICAN BEAUTY", "MAGNOLIA", "TRUE LIES", "FARGO", "THE SIXTH SENSE", "THE MASK", "KILL BILL"];


// Hints to be used in each guess attemp for the specific word. 
//still missing this part

var hints = [{

    picture: "a"
}

]
//create variables that will get the Id's from html
var startGame = document.querySelector("#startgame");

//create an array with the alphabet letters and variables to generate buttons
var letters = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var gamewon = true;

//create variables that will be used in the game

var underscore = []
var dashes; //variable to work with the underscore
var guessesleft; // to keep count of how many guesses is there left
var wins = 0; // keep track of score
var losses = 0; // keep track of score
var lettersguessed; // keep track of letters that user gor right
var chooseletter=[] // for when the user chooses a particular letter
var clickeditem; // for when the user clicks an item;

//variables for the game about to be played
var randomword; //whatever word is picked to be guesses
var gameletters; // the specific letters that need to be guessed.

//variable to check on the result (win or loose)

var result;

//******************************** THE MAIN HANGMAN GAME ****************************************

//create a function that runs the game:

function gameStart() {
    console.log("click")
    // get a random word from the wordlist array
    randomword = wordlist[Math.floor(Math.random() * wordlist.length)];
    console.log(randomword);
    //iterate through the randowm word to define how many underscores we need to display on page
    for (var i = 0; i < randomword.length; i++) {
        // push methd to put that number of underscore in the array
        underscore.push("_")
    }
    // get the id so we can display it on html
    document.getElementById('wordspaces').textContent = underscore.join(' ');

    // the number of guesses is the same as the word being played
    guessesleft = randomword.length;
    console.log(guessesleft)
    // display that number of guesses on html
    document.getElementById('guesses-left').textContent = `Guesses Left: ${guessesleft}`

    //display the letters the user can use
    for (var i = 0; i < letters.length; i++) {
        var button = document.createElement("button");
        button.setAttribute("data-letter", letters[i]);
        button.setAttribute("id", "letterbutton");
        button.classList.add("button", "buttonspace");
        button.textContent = letters[i];
        document.getElementById("letterbuttons").append(button)
       
        
    }






    // wins and losses     

    document.getElementById("wins").textContent = `wins: ${wins}`;
    document.getElementById("losses").textContent = `losses: ${losses}`;

    //to put the pictures and the hints up in this document and link them to the right word.
    //still missing this part!
    
};


//create a function that allows wrong letters to appear in another area
// function pickedletter() {

//     var btnClick=document.getElementById("letterbuttons").getAttribute("data-letter")

//     console.log(randomword, "from pickedletter funct")
//     for(var i=0; randomword.length; i++){
//     if (btnClick!==randomword.length) {
//         chooseletter.push(btnClick);
           
//         }
       
//     }
// };

//create function that allows to track the letter choices and make the underscores change accorddingly
// function choice(letter) {
//     var lettersguessed = false;

//     for (let i = 0; i < randomword.length; i++) {
//         if (randomword[i] === letter) {
//             lettersguessed = true;
//         }
//     }
//     if (lettersguessed) {

//         for (let i = 0; i < dashes; i++) {
//             if (underscores[i] === " ") {
//                 underscores[i] = letters;
//             } else {
//                 underscores[i] = underscores[i];
//             }
//         }

//         for (let i = 0; i < dashes; i++) {
//             if (gameLetters[i] === letters) {
//                 underscores[i] = letters;
//                 document.getElementById("wordspaces").innerHTML = underscores.join(' ');
//                 clickeditem.style.visibility = "hidden";
//             }
//         }
//     }
//     else {
//         guessesleft--;
//         document.getElementById("guessesleft").textContent = `Guesses Left: ${guessesleft}`;
//     }
//     gamecheck();

// };

// //create function that moderates the results - win or lose with alerts for each case

// function gamecheck() {

//     result = underscores;
//     for (let i = 0; i < blanks; i++) {
//         if (underscores[i] === letters) {
//             result[i] = " ";
//         } else {
//             result[i] = underscores[i];
//         }
//     }

//     if (result.toString() === gameLetters.toString()) {
//         wins++;
//         document.getElementById('wins').textContent = `Wins: ${wins}`;
//         alert("Hooray, Movie Buff!");
//     } else if (guessesLeft === 0) {
//         losses++;
//         document.getElementById('lose').textContent = `Losses: ${losses}`;
//         wonGame = true;
//         alert("Boo...you need to watch more 90's movies!");
//     }
// };

//to start the game

startGame.addEventListener("click", gameStart)

document.addEventListener('click', function (e) {
    console.log("click")
    if (e.target && e.target.id == 'letterbutton') {
        var letter= document.getElementById("letterbutton").getAttribute("data-letter", letters)
        // var letter = letterbutton.getAttribute("data-letter")
      
        chooseletter.push(letter);
        // console.log(this.letters)
        console.log(chooseletter)
        console.log(letter);
        
    
       
        
    }
});





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

