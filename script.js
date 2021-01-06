'use strict';
const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');

let number;
let currentScore = 0;
let activePlayer = 1;

// Switch Player
const switchPlayer = function() {

}

// Show dice
function showDice() {
  number = Math.floor(Math.random() * 6) + 1;
  dice.setAttribute('src', `./img/dice-${number}.png`);
  dice.style.display = 'block';
  if (number === 1) {
    switchPlayer();
  } else {
    currentScore += number;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }
}

// Event Listeners
btnRoll.addEventListener('click', showDice);
