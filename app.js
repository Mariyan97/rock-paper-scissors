let playerPoints = 0;
let computerPoints = 0;
for (let round = 1; round <= 5; round++) {
  function playRound(playerSelection) {
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
    document.getElementById("result").textContent = `${result}`;
    document.getElementById(
      "score"
    ).textContent = `${playerPoints} : ${computerPoints}`;
  }
}

let btn = document
  .getElementById("rock")
  .addEventListener("click", () => playRound("Rock"));
btn = document
  .getElementById("paper")
  .addEventListener("click", () => playRound("Paper"));
btn = document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("Scissors"));

btn.addEventListener("click", function onClick() {});
