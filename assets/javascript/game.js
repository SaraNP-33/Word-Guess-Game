
// Create an array with my list of words
var wordlist=["Pulp Fiction", "Big Lebowski", "Fight Club", "Pretty Woman","Titanic","The Matrix", "Forrest Gump", 
            "Scream", "American Beauty", "Magnolia","True Lies","Fargo","The Sixth Sense","The Mask","Braveheart"];

//Create a variable that picks the words randomly

var wordlist= wordlist[Math.floor(Math.random()* wordlist.length)];

// Create an array that lets the user know how many letters the word have and loop to go through the wordlist array
var wordspaces=[];
for (var i=0; i<wordlist.length;i++){
    wordspaces[i]="_";
}