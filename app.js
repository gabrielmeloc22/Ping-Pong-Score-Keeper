const pOneScoreElement = document.querySelector("#playerOneScore");
const playerOneBtn = document.querySelector("#playerOneBtn");

const pTwoScoreElement = document.querySelector("#playerTwoScore");
const playerTwoBtn = document.querySelector("#playerTwoBtn");

const resetBtn = document.querySelector("#resetBtn");

const scoreSelector = document.querySelector("#scoreSelector");

const winnerHeading = document.querySelector("h2");

function scoreInterface(scoreElement, e) {
  const scoring = parseInt(
    scoreSelector.options[scoreSelector.options.selectedIndex].value
  );
  let pOneScore = parseInt(pOneScoreElement.innerText);
  let pTwoScore = parseInt(pTwoScoreElement.innerText);

  const winner = function (e) {
    if (pOneScore >= pTwoScore && e.target == playerOneBtn) {
      winnerHeading.innerText = "Player 1 won!";
      winnerHeading.classList.toggle("transition-1");
      console.log("hello");
    } else {
      winnerHeading.innerText = "Player 2 won!";
      winnerHeading.classList.toggle("transition-2");
    }
  };

  if (pOneScore + 1 === scoring || pTwoScore + 1 === scoring) {
    if (pOneScore === pTwoScore) {
      addScore(scoreElement);
      disableScoreBtn();
      winner(e);
    } else if (pOneScore > pTwoScore && e.target == playerOneBtn) {
      addScore(scoreElement);
      disableScoreBtn();
      winner(e);
    } else if (pOneScore < pTwoScore && e.target == playerTwoBtn) {
      addScore(scoreElement);
      disableScoreBtn();
      winner(e);
    } else {
      addScore(scoreElement);
    }
  } else if (pOneScore === 0 && pTwoScore === 0) {
    addScore(scoreElement);
    scoreSelector.setAttribute("disabled", true);
  } else {
    addScore(scoreElement);
  }
}

function addScore(scoreElement) {
  const currScore = parseInt(scoreElement.innerText);
  const newScore = currScore + 1;
  scoreElement.innerText = newScore;
}

function disableScoreBtn() {
  playerOneBtn.setAttribute("disabled", true);
  playerTwoBtn.setAttribute("disabled", true);
}

function reset() {
  playerOneBtn.removeAttribute("disabled");
  pOneScoreElement.innerText = "0";

  playerTwoBtn.removeAttribute("disabled");
  pTwoScoreElement.innerText = "0";

  scoreSelector.removeAttribute("disabled");
  winnerHeading.classList.remove("transition-1");
  winnerHeading.classList.remove("transition-2");
}

playerOneBtn.addEventListener("click", (e) => {
  scoreInterface(pOneScoreElement, e);
});

playerTwoBtn.addEventListener("click", (e) => {
  scoreInterface(pTwoScoreElement, e);
});

resetBtn.addEventListener("click", () => {
  reset();
});
