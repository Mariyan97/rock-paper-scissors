let playerSelection = prompt("Please choose between Rock , Paper , Scissors");
let toLowerCase = playerSelection.toLowerCase();

//computer selection
let computerSelection = Math.random();
if (computerSelection <= 0.3333) {
  computerSelection = "rock";
} else if (computerSelection > 0.3333 && computerSelection < 0.6666) {
  computerSelection = "paper";
} else {
  computerSelection = "scissors";
}
//compare function;

function compare(player, computer) {
  if (player === computer) {
    return "Draw !";
  } else if (player === "rock" && computer === "paper") {
    return "Computer wins!";
  } else if (player === "rock" && computer === "scissors") {
    return "Player wins!";
  } else if (player === "paper" && computer === "rock") {
    return "Player wins!";
  } else if (player === "paper" && computer === "scissors") {
    return "Computer wins!";
  } else if (player === "scissors" && computer === "paper") {
    return "Player wins!";
  } else if (player === "scissors" && computer === "rock") {
    return "Computer wins!";
  } else {
    return "Something is not right!";
  }
}

let result = compare(toLowerCase, computerSelection);

console.log(toLowerCase + " vs " + computerSelection, result);
