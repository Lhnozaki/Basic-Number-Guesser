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
    winningNum = Math.floor(Math.random() * max),
    guessesLeft = 3;

console.log(winningNum);

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
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green';
        // setMessage(`You have guessed the correct number!`, 'green');

        gameOver(true, `You have guessed the correct number!`, 'green')

        guessBtn.value = 'Play Again';
        guessBtn.style.color = 'green';
        guessBtn.className += 'play-again';
        document.querySelector('.play-again').addEventListener('mousedown', playAgain);
    } else {
        if (guess !== winningNum){
            guessesLeft--; 
            setMessage(`${guess} is incorrect. You have ${guessesLeft} guesses left`, 'red');
                if(guessesLeft === 0){
                    guessInput.disabled = true;
                    guessInput.style.backgroundColor = 'lightgray';
                    setMessage(`You have reached the maximum guesses. The correct number was ${winningNum}. Please try again`, "red");
                    guessBtn.value = 'Play Again';
                    guessBtn.style.color = 'green';
                    guessBtn.className += 'play-again';
                    document.querySelector('.play-again').addEventListener('mousedown', playAgain);
                }
        }
    }
})

function setMessage (msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg){
    let color;
    won === true ? color = "green" : color = "red";
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);
}

function playAgain(){
    window.location.reload();
}
