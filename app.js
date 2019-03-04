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
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI Min & Max Numbers

minNum.textContent = min;

maxNum.textContent = max;

// Button Event Listener

guessBtn.addEventListener('click', function(){
    //console.log(guessInput.value);

    let guess = parseInt(guessInput.value); //turn value from string to integer

    //console.log(guess);

    if( isNaN(guess) || guess < min || guess > max ){
        //message.textContent = `Please enter a number between ${min} and ${max}`)
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else if (guess === winningNum){
        // Disable input
        guessInput.disabled = true;
        //change border box to green
        guessInput.style.borderColor = 'green';
        //display winning message
        setMessage(`You have guessed the correct number!`, 'green');
    } else {

    }
})

function setMessage (msg, color){
    message.style.color = color;
    message.textContent = msg;
}

