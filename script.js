// Gets computers choice
function getComputerChoice(rock, paper, scissor) {
  let arrayOfChoices = [rock, paper, scissor];

  let randomChoice = Math.floor(Math.random() * arrayOfChoices.length);

  let computerChoice = arrayOfChoices[randomChoice];

  return computerChoice;
}

// Plays a single round
function playRound(playerSelection, computerSelection) {
  switch (true) {
    // Draw Conditions
    case (playerSelection.toLowerCase() == "rock" &&
      computerSelection == "rock") ||
      (playerSelection.toLowerCase() == "paper" &&
        computerSelection == "paper") ||
      (playerSelection.toLowerCase() == "scissor" &&
        computerSelection == "scissor"):
      console.log("Its a draw");
      break;

    // Rock win conditions
    case (playerSelection.toLowerCase() == "rock" &&
      computerSelection == "scissor") ||
      (playerSelection.toLowerCase() == "scissor" &&
        computerSelection == "rock"):
      console.log("Rock wins");
      break;

    // Paper win conditions
    case (playerSelection.toLowerCase() == "rock" &&
      computerSelection == "paper") ||
      (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"):
      console.log("Paper wins");
      break;

    // Scissor win conditions
    case (playerSelection.toLowerCase() == "paper" &&
      computerSelection == "scissor") ||
      (playerSelection.toLowerCase() == "scissor" &&
        computerSelection == "paper"):
      console.log("Scissor wins");
  }
}

// Plays the game
function game() {
  let userInput = prompt("Rock, Paper, Scissor ?");

  // Evaluate
  if (
    userInput.toLowerCase() != "rock" &&
    userInput.toLowerCase() != "paper" &&
    userInput.toLowerCase() != "scissor"
  ) {
    alert("Type Rock, Paper or Scissor");
    return game();
  }

  // Plays 5 round based on userInput
  for (let i = 0; i < 5; i++) {
    playRound(userInput, getComputerChoice("rock", "paper", "scissor"));
  }
}

game();
