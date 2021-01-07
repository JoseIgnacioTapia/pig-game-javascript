'use strict';
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const score1 = document.getElementById('score--1');
const score2 = document.getElementById('score--2');
const btnNew = document.querySelector('.btn--new');

let number;
let currentScore = 0;
let activePlayer = 1;
let holdScore = 0;

// Switch Player
const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

// Show dice
function showDice() {
  number = Math.floor(Math.random() * 6) + 1;
  dice.setAttribute('src', `./img/dice-${number}.png`);
  dice.style.display = 'block';
  if (number === 1) {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    switchPlayer();
  } else {
    currentScore += number;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }
}

// Save the Score 
const saveScore = function() {
  holdScore = +document.getElementById(`score--${activePlayer}`).textContent;
  holdScore += +document.getElementById(`current--${activePlayer}`).textContent;
  document.getElementById(`score--${activePlayer}`).textContent = holdScore;
  if (holdScore >= 50) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  }
  switchPlayer();
  currentScore = 0;
}

// Play Again
const resetAll = function() {
  player1.classList.add('player--active');
  if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
  }
  dice.style.display = 'none';
  score1.textContent = 0;
  score2.textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('current--2').textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
}

// Event Listeners
btnRoll.addEventListener('click', showDice);
btnHold.addEventListener('click', saveScore);
btnNew.addEventListener('click', resetAll);
