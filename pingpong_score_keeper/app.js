const player1 = document.querySelector('.p1b');
const player2 = document.querySelector('.p2b');
const player1Score = document.querySelector('.p1');
const player2Score = document.querySelector('.p2');
const reset = document.querySelector('.reset');
const selectInput = document.querySelector('.game');

selectInput.addEventListener('change', (e) => {
  number = Number(e.target.value);
});

player1.addEventListener('click', () => {
  if (player1Score.innerHTML < number - 1) {
    player1Score.innerHTML++;
  } else {
    player1Score.style.color = 'green';
    player1Score.innerHTML = number;
  }
});

player2.addEventListener('click', () => {
  if (player2Score.innerHTML < number - 1) {
    player2Score.innerHTML++;
  } else {
    player2Score.style.color = 'green';
    player2Score.innerHTML = number;
  }
});

reset.addEventListener('click', () => {
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;
  player1Score.style.color = 'black';
  player2Score.style.color = 'black';
  number = 0;
});
