
// Create an array with my list of words
var wordlist=["PULP FICTION", "BIG LEBOWSKI", "FIGHT CLUB", "PRETTY WOMAN","TITANIC","THE MATRIX", "FORREST GUMP", 
            "SCREAM", "AMERICAN BEAUTY", "MAGNOLIA","TRUE LIES","FARGO","THE SIXTH SENSE","THE MASK","KILL BILL"];
var letters=["A", "B", "C", "D", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];            

//Create a variable that picks the words randomly

var wordplay= wordlist[Math.floor(Math.random()* wordlist.length)];

// Create an array that lets the user know how many letters the word have and loop to go through the wordlist array
var wordspaces=[];
for (var i=0; i<wordlist.length;i++){
    wordspaces[i]="_";
}
