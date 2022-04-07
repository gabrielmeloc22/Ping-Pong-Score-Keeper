const pOneScoreElement = document.querySelector("#playerOneScore");
const playerOneBtn = document.querySelector("#playerOneBtn");

const pTwoScoreElement = document.querySelector("#playerTwoScore");
const playerTwoBtn = document.querySelector("#playerTwoBtn");

const resetBtn = document.querySelector("#resetBtn");

const scoreSelector = document.querySelector("#scoreSelector");

const winnerHeading = document.querySelector("h2");

function scoreInterface(scoreElement, e) {
  const scoring = parseInt(scoreSelector.value);

  let pOneScore = parseInt(pOneScoreElement.innerText);
  let pTwoScore = parseInt(pTwoScoreElement.innerText);

  if (e.target === playerOneBtn) {
    addScore(scoreElement, pOneScore, scoring, e);
  } else {
    addScore(scoreElement, pTwoScore, scoring, e);
  }
}

function addScore(scoreElement, playerScore, scoring, e) {
  playerScore++;
  if (playerScore === scoring) {
    disableScoreBtn(true);
    displayWinner(e);
  }
  scoreElement.innerText = playerScore;
}

function reset() {
  pOneScoreElement.innerText = 0;
  pTwoScoreElement.innerText = 0;
  disableScoreBtn(false);

  scoreSelector.removeAttribute("disabled");
  winnerHeading.classList.remove("transition-1");
  winnerHeading.classList.remove("transition-2");
}

function disableScoreBtn(value) {
  if (value === true) {
    playerTwoBtn.setAttribute("disabled", true);
    playerOneBtn.setAttribute("disabled", true);
  } else {
    playerTwoBtn.removeAttribute("disabled");
    playerOneBtn.removeAttribute("disabled");
  }
}

function displayWinner(e) {
  if (e.target == playerOneBtn) {
    winnerHeading.innerText = "Player 1 won!";
    winnerHeading.classList.toggle("transition-1");
  } else {
    winnerHeading.innerText = "Player 2 won!";
    winnerHeading.classList.toggle("transition-2");
  }
}

playerOneBtn.addEventListener("click", (e) => {
  scoreInterface(pOneScoreElement, e);
  scoreSelector.setAttribute("disabled", true);
});

playerTwoBtn.addEventListener("click", (e) => {
  scoreInterface(pTwoScoreElement, e);
  scoreSelector.setAttribute("disabled", true);
});

resetBtn.addEventListener("click", () => {
  reset();
});
