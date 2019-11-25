$(document).ready(function(){
    const underel = $("#underscores")
    const words = commonWords.filter(w => w.lenghth > 3)
    const answer = words[Math.floor(Math.random() * words.lenthgh)].split("")
    let under = answer.map(l => "_")
    underel.html(under.join(" "))

    const deck = 'abcdefghiabcdefghi'
    let buttons = ""
    deck.split("").forEach(l => {
       buttons += <button>${l.toUpperCase()}</button>
    })
    $("#buttons").html(buttons)


})



Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 4;
Main.NumInWordBank = Words.length;

Main.Word = "test";
Main.Word = ""; /* Gets displayed to the screen */

// Functions Start Here

Main.PullWord = function() {
    Main.Word = Words.List[(Math.floor(Math.random() * Main.NumInWordBank))];
}  /* Gives random number between 0 and 40 */

Main.SetUnderline = function() {
    Main.PullWord();
    for(i=0; i < Main.Word.length; i++) {
        Main.WordArray[i] = Main.Word.charAt(i);
        Main.WordUArray[i] = "_";
    }
    Main.WordU = Main.WordUArray.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;
    document.getElementById("numLetters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter) {
    Main.Changes = 0;
    for (i = 0; i < Main.Word.length; i++) {
        Main.WordArray[i] = Main.Word.charAt(i);
        if (Main.Word.charAt(i) == letter) {
            Main.WordUArray[i] = letter;
            Main.Changes += 1;
        }
    }

    if (Main.Changes < 1) {
        Main.Lives -= 1;
        document.getElementById("Lives").innerHTML = Main.Lives;
    }

    Main.WordU = main.WordUArray.join();
    document.getElementById("WORD").innerHTML = Main.WordU

    Main.Word1 = Main.WordArray.join();
    Main.Word2 = Main.WordUArray.join("");

    if(Main.Word1 == Main.Word2) {
        alert("You Won!  Loading a new word");
        window.location.reload();
    }

    if(Main.Lives < 1) {
        document.getElementById("WORD").innerHTML = Main.Word1;
        alert("You have Run Out Of Lives, Please Try Again.")
        window.location.reload();
    }
}

Main.PullWord();
Main.SetUnderline();































/* Choose a random word */
/*
var commonWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
  ];

// Find out how many words are in the list
var lengthOfWordsList = commonWords.length
console.log(lengthOfWordsList)
// Select a random "wordToBeGuessed"
var indexOfWordToBeGuessed = Math.floor((Math.random() * lengthOfWordsList) + 1);
console.log(indexOfWordToBeGuessed)
var wordToBeGuessed = commonWords[indexOfWordToBeGuessed - 1]
console.log(wordToBeGuessed)
// Determine how many letters are in the "wordToBeGuessed"
var lengthOfWordToBeGuessed = wordToBeGuessed.length
console.log(lengthOfWordToBeGuessed)
*/



// Syntax of .map: array.map(function(currentValue, index, arr), thisValue)
// Example #1 of .map
var numbers1 = [4, 9, 16, 25];
function myFunction1() {
    x = document.getElementById("demo1")
    x.innerHTML = numbers1.map(Math.sqrt);
}
// Example #2 of .map
var numbers2 = [65, 44, 12, 4];
var newarray2 = numbers2.map(myFunction2)
function myFunction(num2) {
  return num2 * 10;
}
document.getElementById("demo2").innerHTML = newarray2;






/* Player guesses a single letter at a time */

/* The player has a fixed number of turns in which to guess all of the letters in the word */

/* The app should indicate when the player has won or lost */