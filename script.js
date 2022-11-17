let playerScore = 0;
let computerScore = 0;

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
    console.log("Player wins!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins!");
  } else {
    console.log("Tie game!");
  }
}

function isValidChoice(choice) {
  return choice === "rock" || choice === "paper" || choice === "scissors";
}

function capitalizeStr(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
  // compare selections: rock > scissors, scissors > paper, paper > rock

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    updateScore("player");
    return `You win! ${capitalizeStr(playerSelection)} beats ${capitalizeStr(
      computerSelection
    )}!`;
  } else if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else {
    updateScore("computer");
    return `You lose! ${capitalizeStr(computerSelection)} beats ${capitalizeStr(
      playerSelection
    )}!`;
  }
}

function game() {
  const choices = ["rock", "paper", "scissors"];

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");

    while (!isValidChoice(playerSelection.toLowerCase())) {
      playerSelection = prompt("Rock, Paper, or Scissors?");
    }

    const computerSelection = getComputerChoice(choices);

    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
  }

  displayWinner();
}

game();
