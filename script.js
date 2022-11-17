const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  // compare selections: rock > scissors, scissors > paper, paper > rock

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    console.log(
      `You win! ${capitalizeStr(playerSelection)} beats ${capitalizeStr(
        computerSelection
      )}!`
    );
  } else if (playerSelection === computerSelection) {
    console.log("It's a draw!");
  } else {
    console.log(
      `You lose! ${capitalizeStr(computerSelection)} beats ${capitalizeStr(
        playerSelection
      )}!`
    );
  }
}

function capitalizeStr(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const playerSelection = "RoCk";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
