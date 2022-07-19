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
    case playerSelection.toLowerCase() == "rock" && computerSelection == "rock":
      console.log("its a draw");
      break;

    case playerSelection.toLowerCase() == "rock" &&
      computerSelection == "paper":
      console.log("Paper wins");
      break;

    case playerSelection.toLowerCase() == "rock" &&
      computerSelection == "scissor":
      console.log("Rock wins");
      break;
  }
}

// Plays the game
function game() {
  let userInput = prompt("Whats your pick?");

  // Evaluate
  if (userInput.toLowerCase() != "rock") {
    alert("Type Rock, Paper or Scissor");
    return userInput.toLowerCase();
  }

  // Plays 5 round based on userInput
  for (let i = 0; i < 5; i++) {
    playRound(userInput, getComputerChoice("rock", "paper", "scissor"));
  }
}

game();
