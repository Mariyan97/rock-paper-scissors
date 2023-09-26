let playerPoints = 0;
let computerPoints = 0;
for (let round = 1; round <= 5; round++) {
  let playerSelection = prompt("Please choose between Rock , Paper , Scissors");
  let toLowerCase = playerSelection.toLowerCase();

  let computerSelection = Math.random();
  if (computerSelection <= 0.3333) {
    computerSelection = "rock";
  } else if (computerSelection > 0.3333 && computerSelection < 0.6666) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  function compare(player, computer) {
    if (player === computer) {
      return "Draw!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      playerPoints++;
      return "Player wins!";
    } else {
      computerPoints++;
      return "Computer wins!";
    }
  }
  let result = compare(toLowerCase, computerSelection);
  console.log(`${toLowerCase} vs ${computerSelection}: ${result}`);
}

console.log("Game Over!");
console.log(
  `Final Score - Player: ${playerPoints} - Computer: ${computerPoints}`
);
