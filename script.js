const container = document.querySelector(".container");
const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissor = document.querySelector(".btnScissor");
const player = document.querySelector(".player-score");
const cpu = document.querySelector(".cpu-score");
const p = document.querySelector(".p");
const endGame = document.querySelector(".endGame");

container.appendChild(p);
container.appendChild(player);
container.appendChild(cpu);
container.appendChild(endGame);

let playerScore = 0;
let cpuScore = 0;
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
      p.innerText = `PLAYER CHOICE: ${playerSelection}\n CPU CHOICE: ${computerSelection}\n IT'S A DRAW`;
      player.innerText = `YOU: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    // Rock win conditions
    case playerSelection.toLowerCase() == "rock" &&
      computerSelection == "scissor":
      p.innerText = `PLAYER CHOICE: ${playerSelection}\n CPU CHOICE: ${computerSelection}\n ROCK WINS!`;
      playerScore++;
      player.innerText = `YOU: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    case playerSelection.toLowerCase() == "scissor" &&
      computerSelection == "rock":
      p.innerText = `PLAYER CHOICE: ${playerSelection}\n CPU CHOICE: ${computerSelection}\n ROCK WINS!`;
      cpuScore++;
      player.innerText = `YOU: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    // Paper win conditions
    case playerSelection.toLowerCase() == "paper" &&
      computerSelection == "rock":
      p.innerText = `PLAYER CHOICE: ${playerSelection}\n CPU CHOICE: ${computerSelection}\n PAPER WINS`;
      playerScore++;
      player.innerText = `YOU: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    case playerSelection.toLowerCase() == "rock" &&
      computerSelection == "paper":
      p.innerText = `PLAYER CHOICE: ${playerSelection}\n CPU CHOICE: ${computerSelection}\n PAPER WINS`;
      cpuScore++;
      player.innerText = `YOU: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    // Scissor win conditions
    case playerSelection.toLowerCase() == "scissor" &&
      computerSelection == "paper":
      p.innerText = `PLAYER CHOICE: ${playerSelection}\n CPU CHOICE: ${computerSelection}\n SCISSOR WINS`;
      playerScore++;
      player.innerText = `YOU: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    case playerSelection.toLowerCase() == "paper" &&
      computerSelection == "scissor":
      p.innerText = `PLAYER CHOICE: ${playerSelection}\n CPU CHOICE: ${computerSelection}\n SCISSOR WINS`;
      cpuScore++;
      player.innerText = `YOU: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;
  }

  if (playerScore === 5) {
    playerScore = 0;
    cpuScore = 0;
    endGame.innerText = "GAME OVER PLAYER WINS";
  } else if (cpuScore === 5) {
    playerScore = 0;
    cpuScore = 0;
    endGame.innerText = "GAME OVER CPU WINS";
  } else if (
    (playerScore === 0 && cpuScore === 0) ||
    (playerScore === 1 && cpuScore === 0) ||
    (playerScore === 0 && cpuScore === 1)
  ) {
    endGame.innerText = "";
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
