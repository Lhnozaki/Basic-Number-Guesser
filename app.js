//console.log('Number Guesser Game');

// GAME FUNCTIONS:
// - Player must guess a number between a min & max number
// - Player gets a certain amount of guesses
// - Notify Player of number of remaining guesses
// - Notify Player if the number inputed was incorrect/correct
// - Display correct number 
// - Let Player choose to play again


// Number Values

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('.guess-btn'),
      guessInput = document.querySelector('.guess-input'),
      message = document.querySelector('.message');


