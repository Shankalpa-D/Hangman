var POSSIBLE_WORDS = [
  "obdurate",
  "verisimilitude",
  "defenstrate",
  "obsequious",
  "dissonate",
  "toady",
  "idempotent",
];

var word = "";
var guesses = "";
var MAX_GUESSES = 6;
var guess_count = 0;
var gameActive = false;

function newGame() {
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  guesses = "";
  guess_count = MAX_GUESSES;
  updatepage();
}

function guessLetter() {
  // Don't allow guesses before a word is chosen.
  if (!gameActive) {
    alert("Game hasnt started");
    return;
  }
  
  var input = document.getElementById("guess");
  var letter = input.value.toLowerCase();
  
  //Add a clear to the input field on a guess
  input.value = "";
  
  
  //Don't let it guess previously guessed letters 2x
  if (guesses.indexOf(letter) >= 0) {
    alert("You already guessed that letter!");
    return;
  }
  
  if (word.indexOf(letter) < 0) {
    guess_count--;
  }
  guesses += letter;
  updatepage();
  
  //Dialog for winning and losing -> guesses area. 
 if (clueString.indexOf("_") < 0) {
  gameActive = false;
  guessArea.innerHTML = "You won!";
  return;
}
  
  // Check for loss
  if (guess_count <= 0) {
    gameActive = false;
    guessArea.innerHTML = "You lost!";
  }
}

function updatepage() {
  var clueString = "";
  for (var i = 0; i < word.length; i++) {
    var currentLetter = word.charAt(i);
    if (guesses.indexOf(currentLetter) >= 0) {
      clueString += currentLetter + " ";
    } else clueString += "_ ";
  }
  var clue = document.getElementById("clue");
  clue.innerHTML = clueString;

  var guessArea = document.getElementById("guesses");
  //Make sure to not allow guesses when the game is finished.
  if (gameActive) {
    guessArea.innerHTML = "Guessed Letters: " + guesses.split('').join(', ');
  }

  var image = document.getElementById("hangmanImage");
  image.src = "images/hangman" + guess_count + ".gif";
}