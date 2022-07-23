const container = document.querySelector(".container");
const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissor = document.querySelector(".btnScissor");
const p = document.querySelector(".p");

container.appendChild(p);

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
      p.innerText = "Its a draw";
      break;

    // Rock win conditions
    case (playerSelection.toLowerCase() == "rock" &&
      computerSelection == "scissor") ||
      (playerSelection.toLowerCase() == "scissor" &&
        computerSelection == "rock"):
      p.innerText = "Rock wins";
      break;

    // Paper win conditions
    case (playerSelection.toLowerCase() == "rock" &&
      computerSelection == "paper") ||
      (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"):
      p.innerText = "Paper wins";
      break;

    // Scissor win conditions
    case (playerSelection.toLowerCase() == "paper" &&
      computerSelection == "scissor") ||
      (playerSelection.toLowerCase() == "scissor" &&
        computerSelection == "paper"):
      p.innerText = "Scissor wins";
  }
}

// Plays the game
btnRock.addEventListener("click", () => {
  let userInput = "rock";

  playRound(userInput, getComputerChoice("rock", "paper", "scissor"));
});

btnPaper.addEventListener("click", () => {
  let userInput = "paper";

  playRound(userInput, getComputerChoice("rock", "paper", "scissor"));
});

btnScissor.addEventListener("click", () => {
  let userInput = "scissor";

  playRound(userInput, getComputerChoice("rock", "paper", "scissor"));
});
