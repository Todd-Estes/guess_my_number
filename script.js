'use strict';
let secretNumber;
let highScore = 0;
let score = 20;

let message = document.querySelector(".message");

function getSecretNumber() {
  secretNumber = Math.ceil(Math.random() * 20);
}

function checkHighScore(score, highScore) {
  if (score > highScore) {
    return score;
  } else {
    return highScore;
  }
}

getSecretNumber();

console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  getSecretNumber();
  document.querySelector(".guess").value = '';
  message.textContent = "Start guessing...";
  document.querySelector(".number").textContent = '?';
  console.log(secretNumber);
})

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number((document.querySelector('.guess').value));
  console.log(guess);


  if (!guess) {
    message.textContent = "No number!";
  } else if (guess === secretNumber) {
    message.textContent = "🍾 Correct!!";
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highScore = checkHighScore(score, highScore);
    document.querySelector('.highscore').textContent = highScore;
  } if (score > 1) {
    if (guess > secretNumber) {
    message.textContent = "📈 Too high!"
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low!"
    score--;
    document.querySelector(".score").textContent = score;

  }
 } else {
  message.textContent = "💩 YOU LOSE!";
 }
})