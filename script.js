let secretNumber = Math.trunc(Math.random() * 20) + 1;

let check = document.querySelector('.check');
let score = 20;
let highscore = document.querySelector('.highscore').textContent;
console.log(highscore);
check.addEventListener('click', function () {
  guessBox = Number(document.querySelector('.guess').value);
  console.log(guessBox);
  if (!guessBox) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guessBox > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessBox < secretNumber) {
    document.querySelector('.message').textContent = ' 📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessBox === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number! ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore <= document.querySelector('.score').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});

let again = document.querySelector('.again');
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
});
