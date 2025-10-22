let ruleClose = document.querySelector('.rules__close');
let overlay = document.querySelector('.overlay');
let choiceContainer = document.querySelector('.choice-container');
let subPick = document.querySelectorAll('.sub-pick');
let pickedContainer = document.querySelector('.picked-container');
let choices = choiceContainer.querySelectorAll('.choice-wrapper');
let resultMessage = document.querySelector('.result');
let playAgain = document.querySelector('.btn');
let rulesOpen = document.querySelector('.one__rules');
let score = document.querySelector('.score--value');

ruleClose.addEventListener('click', function () {
  overlay.style.display = 'none';
});

rulesOpen.addEventListener('click', function () {
  overlay.style.display = 'block';
});

choices.forEach(function (choice) {
  choice.addEventListener('click', initialChoice);
});

playAgain.addEventListener('click', function () {
  choiceContainer.style.display = 'grid';
  pickedContainer.style.display = 'none';
  resultMessage.innerHTML = "";
});

function initialChoice() {
  let randomNumber = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomNumber];
  let userChoice = this;

  choiceContainer.style.display = 'none';
  pickedContainer.style.display = 'flex';

  subPick[0].innerHTML = "<p class='user-picked-text'>YOU PICKED</p>";
  subPick[0].appendChild(userChoice.cloneNode(true));

  subPick[1].innerHTML = "<p class='computer-picked-text'>THE HOUSE PICKED</p>";
  subPick[1].appendChild(computerChoice.cloneNode(true));

  getWinner(computerChoice, userChoice);
}

let userScore = '0';
function getWinner(computerChoice, userChoice) {
  const user = userChoice.dataset.value;
  const computer = computerChoice.dataset.value;

  if (user === computer) {
    resultMessage.innerHTML = "It's a draw!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    resultMessage.innerHTML = "YOU WIN";
    userScore++;
    score.innerHTML = userScore;
    subPick[0].querySelector('.choice-wrapper').classList.add('winner-effect');
  } else {
    resultMessage.innerHTML = "YOU LOSE";
    if(userScore>0) score--;
    score.innerHTML = userScore;
    subPick[1].querySelector('.choice-wrapper').classList.add('winner-effect');
  }
}
