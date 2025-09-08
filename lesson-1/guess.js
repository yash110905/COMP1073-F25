// STEP 1: Initialize game variables
let randomNumber = Math.floor(Math.random() * 100) + 1; // integer between 1 and 100

// STEP 1b: Grab elements for user feedback
let guesses = document.querySelector('p#guesses');
let lastResult = document.querySelector('p#lastResult');
let lowOrHi = document.querySelector('p#lowOrHi');

// STEP 1c: Grab guessing form elements
let guessField = document.querySelector('input#guessField');
let guessSubmit = document.querySelector('button');

// STEP 1d: Counter for number of guesses
let guessCount = 1;
guessField.focus();

// STEP 3: Function to check the guess
function checkGuess() {
    let userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userGuess + ' ';

    // Correct guess
    if (userGuess === randomNumber) {
        lastResult.textContent = 'You guessed it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        gameOver();
    } 
    // Out of guesses
    else if (guessCount === 10) {
        lastResult.textContent = 'X! GAME OVER! X - out of guesses';
        lowOrHi.textContent = '';
        gameOver();
    } 
    // Wrong guess
    else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

// Function to end the game
function gameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    lowOrHi.textContent += ' The game is over. Refresh to play again.';
}

// Add event listener to the button
guessSubmit.addEventListener('click', checkGuess);
