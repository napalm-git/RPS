const container = document.querySelector(".container");
const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissor = document.querySelector(".btnScissor");
const player = document.querySelector(".player-score");
const cpu = document.querySelector(".cpu-score");
const playerChoice = document.querySelector(".player-choice");
const cpuChoice = document.querySelector(".cpu-choice");
const result = document.querySelector(".result");
const endGame = document.querySelector(".endGame");

container.appendChild(playerChoice);
container.appendChild(cpuChoice);
container.appendChild(result);
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
    case playerSelection.toLowerCase() == "rock" && computerSelection == "rock":
      playerChoice.innerText = `PLAYER CHOICE: 💎`;
      cpuChoice.innerText = `CPU CHOICE: 💎`;
      result.innerText = `ITS A DRAW`;
      player.innerText = `PLAYER: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    case playerSelection.toLowerCase() == "paper" &&
      computerSelection == "paper":
      playerChoice.innerText = `PLAYER CHOICE: 🧻`;
      cpuChoice.innerText = `CPU CHOICE: 🧻`;
      result.innerText = `ITS A DRAW`;
      player.innerText = `PLAYER: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    case playerSelection.toLowerCase() == "scissor" &&
      computerSelection == "scissor":
      playerChoice.innerText = `PLAYER CHOICE: ✂`;
      cpuChoice.innerText = `CPU CHOICE: ✂`;
      result.innerText = `ITS A DRAW`;
      player.innerText = `PLAYER: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    // Rock win conditions
    case playerSelection.toLowerCase() == "rock" &&
      computerSelection == "scissor":
      playerChoice.innerText = `PLAYER CHOICE: 💎`;
      cpuChoice.innerText = `CPU CHOICE: ✂`;
      result.innerText = `💎 WINS`;
      playerScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    case playerSelection.toLowerCase() == "scissor" &&
      computerSelection == "rock":
      playerChoice.innerText = `PLAYER CHOICE: ✂`;
      cpuChoice.innerText = `CPU CHOICE: 💎`;
      result.innerText = `ROCK WINS`;
      cpuScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    // Paper win conditions
    case playerSelection.toLowerCase() == "paper" &&
      computerSelection == "rock":
      playerChoice.innerText = `PLAYER CHOICE: 🧻`;
      cpuChoice.innerText = `CPU CHOICE: 💎`;
      result.innerText = `🧻 WINS`;
      playerScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    case playerSelection.toLowerCase() == "rock" &&
      computerSelection == "paper":
      playerChoice.innerText = `PLAYER CHOICE: 💎`;
      cpuChoice.innerText = `CPU CHOICE: 🧻`;
      result.innerText = `🧻 WINS`;
      cpuScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    // Scissor win conditions
    case playerSelection.toLowerCase() == "scissor" &&
      computerSelection == "paper":
      playerChoice.innerText = `PLAYER CHOICE: ✂`;
      cpuChoice.innerText = `CPU CHOICE: 🧻`;
      result.innerText = `✂ WINS`;
      playerScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;

    case playerSelection.toLowerCase() == "paper" &&
      computerSelection == "scissor":
      playerChoice.innerText = `PLAYER CHOICE: 🧻`;
      cpuChoice.innerText = `CPU CHOICE: ✂`;
      result.innerText = `✂ WINS`;
      cpuScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      cpu.innerText = `CPU: ${cpuScore}`;
      break;
  }

  if (playerScore === 5) {
    playerScore = 0;
    cpuScore = 0;
    endGame.innerText = "GAME OVER PLAYER WINS";
    endGame.style.cssText = "background-color: rgb(103, 212, 216)";
  } else if (cpuScore === 5) {
    playerScore = 0;
    cpuScore = 0;
    endGame.innerText = "GAME OVER CPU WINS";
    endGame.style.cssText = "background-color: rgb(103, 212, 216)";
  } else if (
    (playerScore === 0 && cpuScore === 0) ||
    (playerScore === 1 && cpuScore === 0) ||
    (playerScore === 0 && cpuScore === 1)
  ) {
    endGame.innerText = "";
    endGame.style.cssText = "background-color:none";
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
