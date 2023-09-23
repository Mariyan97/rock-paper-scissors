const player = prompt("Please choose between Rock , Paper , Scissors");
//computer selection

let computer = Math.random();
if (computer <= 0.3333) {
  computer = "rock";
} else if (computer > 0.3333 && computer < 0.6666) {
  computer = "paper";
} else {
  computer = "scissors";
}

console.log(player + "  " + computer);
