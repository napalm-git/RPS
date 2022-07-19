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
    case playerSelection == "Rock" && computerSelection == "Rock":
      console.log("its a draw");
      break;

    case playerSelection == "Rock" && computerSelection == "Paper":
      console.log("Paper wins");
      break;

    case playerSelection == "Rock" && computerSelection == "Scissor":
      console.log("Rock wins");
      break;

    default:
      console.log("No one wins");
      break;
  }
}

// Plays the game
function game() {
  for (let i = 0; i < 5; i++) {
    playRound("Rock", getComputerChoice("Rock", "Paper", "Scissor"));
  }
}

game();
