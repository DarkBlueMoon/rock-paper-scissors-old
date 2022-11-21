let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const buttonsDiv = document.querySelector(".buttons");
const MAX_ROUNDS = 5;
let currentRound = 1;
const resultsDiv = document.querySelector(".results");
let running = true;

buttonsDiv.addEventListener("click", (e) => {
  const clickedTarget = e.target;
  if (clickedTarget.tagName === "BUTTON" && running) {
    playRound(
      clickedTarget.textContent.toLowerCase(),
      getComputerChoice(choices)
    );
  }
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;
  running = true;

  while (resultsDiv.hasChildNodes()) {
    resultsDiv.removeChild(resultsDiv.firstChild);
  }
}

function getComputerChoice(choices) {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function updateScore(winner) {
  if (winner === "player") playerScore++;
  else computerScore++;
}

function displayWinner() {
  if (playerScore > computerScore) {
    createResult("Player wins!");
  } else if (computerScore > playerScore) {
    createResult("Computer wins!");
  } else {
    createResult("Tie game!");
  }

  createButton("Reset Game");
}

function isValidChoice(choice) {
  return choice === "rock" || choice === "paper" || choice === "scissors";
}

function capitalizeStr(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function createResult(text) {
  const result = document.createElement("p");
  result.textContent = text;
  appendResult(resultsDiv, result);
}

function createButton(text) {
  const btn = document.createElement("button");
  btn.textContent = text;
  createResetListener(btn);
  appendResult(resultsDiv, btn);
}

function createResetListener(btn) {
  btn.addEventListener("click", resetGame);
}

function appendResult(container, result) {
  container.appendChild(result);
}

function checkForGameOver() {
  if (currentRound < MAX_ROUNDS) {
    currentRound++;
    return;
  }

  running = false;
  displayWinner();
}

function playRound(playerSelection, computerSelection) {
  // compare selections: rock > scissors, scissors > paper, paper > rock
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    updateScore("player");
    createResult(
      `You win! ${capitalizeStr(playerSelection)} beats ${capitalizeStr(
        computerSelection
      )}!`
    );
  } else if (playerSelection === computerSelection) {
    createResult("It's a draw!");
  } else {
    updateScore("computer");
    createResult(
      `You lose! ${capitalizeStr(computerSelection)} beats ${capitalizeStr(
        playerSelection
      )}!`
    );
  }

  checkForGameOver();
}
