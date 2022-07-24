const container = document.querySelector(".container");
const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissor = document.querySelector(".btnScissor");
const btnRestart = document.querySelector(".btnRestart");
const player = document.querySelector(".player-score");
const cpu = document.querySelector(".cpu-score");
const playerChoice = document.querySelector(".player-choice");
const cpuChoice = document.querySelector(".cpu-choice");
const result = document.querySelector(".result");
const endGame = document.querySelector(".endGame");
const start = document.querySelector(".start");

container.appendChild(playerChoice);
container.appendChild(cpuChoice);
container.appendChild(result);
container.appendChild(player);
container.appendChild(cpu);
container.appendChild(endGame);
container.appendChild(start);

start.innerText = "Click one of the buttons to start playing!";
playerChoice.style.cssText = "none";
cpuChoice.style.cssText = "none";
result.style.cssText = "none";
player.style.cssText = "none";
cpu.style.cssText = "none";

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
    case playerSelection == "rock" && computerSelection == "rock":
      start.innerText = "";
      start.style.cssText = "background: none";
      playerChoice.style.cssText = "background-color: aqua";
      playerChoice.innerText = `PLAYER CHOICE: 💎`;
      cpuChoice.style.cssText = "background-color: aquamarine";
      cpuChoice.innerText = `CPU CHOICE: 💎`;
      result.style.cssText = "background-color: chartreuse";
      result.innerText = `ITS A DRAW`;
      player.innerText = `PLAYER: ${playerScore}`;
      player.style.cssText = "background-color: cyan";
      cpu.innerText = `CPU: ${cpuScore}`;
      cpu.style.cssText = "background-color: violet";
      break;

    case playerSelection == "paper" && computerSelection == "paper":
      start.innerText = "";
      start.style.cssText = "background: none";
      playerChoice.style.cssText = "background-color: aqua";
      playerChoice.innerText = `PLAYER CHOICE: 🧻`;
      cpuChoice.innerText = `CPU CHOICE: 🧻`;
      cpuChoice.style.cssText = "background-color: aquamarine";
      result.style.cssText = "background-color: chartreuse";
      result.innerText = `ITS A DRAW`;
      player.innerText = `PLAYER: ${playerScore}`;
      player.style.cssText = "background-color: cyan";
      cpu.innerText = `CPU: ${cpuScore}`;
      cpu.style.cssText = "background-color: violet";
      break;

    case playerSelection == "scissor" && computerSelection == "scissor":
      start.innerText = "";
      start.style.cssText = "background: none";
      playerChoice.style.cssText = "background-color: aqua";
      playerChoice.innerText = `PLAYER CHOICE: ✂`;
      cpuChoice.innerText = `CPU CHOICE: ✂`;
      cpuChoice.style.cssText = "background-color: aquamarine";
      result.innerText = `ITS A DRAW`;
      result.style.cssText = "background-color: chartreuse";
      player.innerText = `PLAYER: ${playerScore}`;
      player.style.cssText = "background-color: cyan";
      cpu.innerText = `CPU: ${cpuScore}`;
      cpu.style.cssText = "background-color: violet";
      break;

    // Rock win conditions
    case playerSelection == "rock" && computerSelection == "scissor":
      start.innerText = "";
      start.style.cssText = "background: none";
      playerChoice.style.cssText = "background-color: aqua";
      playerChoice.innerText = `PLAYER CHOICE: 💎`;
      cpuChoice.innerText = `CPU CHOICE: ✂`;
      cpuChoice.style.cssText = "background-color: aquamarine";
      result.innerText = `💎 WINS`;
      result.style.cssText = "background-color: chartreuse";
      playerScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      player.style.cssText = "background-color: cyan";
      cpu.innerText = `CPU: ${cpuScore}`;
      cpu.style.cssText = "background-color: violet";
      break;

    case playerSelection == "scissor" && computerSelection == "rock":
      start.innerText = "";
      start.style.cssText = "background: none";
      playerChoice.style.cssText = "background-color: aqua";
      playerChoice.innerText = `PLAYER CHOICE: ✂`;
      cpuChoice.innerText = `CPU CHOICE: 💎`;
      cpuChoice.style.cssText = "background-color: aquamarine";
      result.innerText = `ROCK WINS`;
      result.style.cssText = "background-color: chartreuse";
      cpuScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      player.style.cssText = "background-color: cyan";
      cpu.innerText = `CPU: ${cpuScore}`;
      cpu.style.cssText = "background-color: violet";
      break;

    // Paper win conditions
    case playerSelection == "paper" && computerSelection == "rock":
      start.innerText = "";
      start.style.cssText = "background: none";
      playerChoice.style.cssText = "background-color: aqua";
      playerChoice.innerText = `PLAYER CHOICE: 🧻`;
      cpuChoice.innerText = `CPU CHOICE: 💎`;
      cpuChoice.style.cssText = "background-color: aquamarine";
      result.innerText = `🧻 WINS`;
      result.style.cssText = "background-color: chartreuse";
      playerScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      player.style.cssText = "background-color: cyan";
      cpu.innerText = `CPU: ${cpuScore}`;
      cpu.style.cssText = "background-color: violet";
      break;

    case playerSelection == "rock" && computerSelection == "paper":
      start.innerText = "";
      start.style.cssText = "background: none";
      playerChoice.style.cssText = "background-color: aqua";
      playerChoice.innerText = `PLAYER CHOICE: 💎`;
      cpuChoice.innerText = `CPU CHOICE: 🧻`;
      cpuChoice.style.cssText = "background-color: aquamarine";
      result.innerText = `🧻 WINS`;
      result.style.cssText = "background-color: chartreuse";
      cpuScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      player.style.cssText = "background-color: cyan";
      cpu.innerText = `CPU: ${cpuScore}`;
      cpu.style.cssText = "background-color: violet";
      break;

    // Scissor win conditions
    case playerSelection == "scissor" && computerSelection == "paper":
      start.innerText = "";
      start.style.cssText = "background: none";
      playerChoice.style.cssText = "background-color: aqua";
      playerChoice.innerText = `PLAYER CHOICE: ✂`;
      cpuChoice.innerText = `CPU CHOICE: 🧻`;
      cpuChoice.style.cssText = "background-color: aquamarine";
      result.innerText = `✂ WINS`;
      result.style.cssText = "background-color: chartreuse";
      playerScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      player.style.cssText = "background-color: cyan";
      cpu.innerText = `CPU: ${cpuScore}`;
      cpu.style.cssText = "background-color: violet";
      break;

    case playerSelection == "paper" && computerSelection == "scissor":
      start.innerText = "";
      start.style.cssText = "background: none";
      start.style.cssText = "background: none";
      playerChoice.style.cssText = "background-color: aqua";
      playerChoice.innerText = `PLAYER CHOICE: 🧻`;
      cpuChoice.innerText = `CPU CHOICE: ✂`;
      cpuChoice.style.cssText = "background-color: aquamarine";
      result.innerText = `✂ WINS`;
      result.style.cssText = "background-color: chartreuse";
      cpuScore++;
      player.innerText = `PLAYER: ${playerScore}`;
      player.style.cssText = "background-color: cyan";
      cpu.innerText = `CPU: ${cpuScore}`;
      cpu.style.cssText = "background-color: violet";
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

btnRestart.addEventListener("click", () => {
  window.location.reload();
});
