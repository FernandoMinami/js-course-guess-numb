'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value);
*/

let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highscore').textContent;
let secretNumber;

const randonSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
const editMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};
const editNumber = function (numb) {
  document.querySelector('.number').textContent = numb;
};
const editScore = function (scr) {
  document.querySelector('.score').textContent = scr;
};
const editBodyBackground = function (clr) {
  document.querySelector('body').style.backgroundColor = clr;
};
const editNumberSize = function (numberSize) {
  document.querySelector('.number').style.fontSize = numberSize;
};

editNumber('?');
randonSecretNumber();
// With document.querySelector('') we got the interaction with the button "<button class="btn check">Check!</button>" and put a avent on 'click' to that button that run a function
document.querySelector('.check').addEventListener('click', function () {
  //here we got the '.value' of the class '.guess' and printed on console
  const guess = Number(document.querySelector('.guess').value);

  // Check if score is higher than 1
  // Guessed no number
  if (!guess) {
    editMessage('no number');
  }

  // Guessed the Right number
  else if (guess === secretNumber) {
    if (score > 1) {
      editNumber(secretNumber);
      editMessage('correct number!');
      editNumberSize('8rem');
      editBodyBackground('#60b347');

      // changes the high score
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }
    } else {
      editMessage('you lost the game!');
      editScore(0);
      editBodyBackground('#000');
    }
  }
  //if guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      editMessage(guess > secretNumber ? 'too high!' : 'too low!');

      score--;
      editScore(score);
    } else {
      editBodyBackground('#000');
      editMessage('you lost the game!');
      editScore(0);
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  randonSecretNumber();
  score = 20;

  editScore(score);
  editNumber('?');
  editMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  editBodyBackground('#222');
  editNumberSize('6rem');
});
