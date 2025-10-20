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
var guess = "";

function newGame() {
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  guesses = "";

  updatepage();
}

function guessLetter() {
  var input = document.getElementById("guess");
  var letter = input.value;
  guesses += letter;

  updatepage();
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
}
