function getComputerChoice(rock, paper, scissor) {
  // let x = rock;
  // let y = paper;
  // let z = scissor;

  let arrayOfChoices = [rock, paper, scissor];

  let randomChoice = Math.floor(Math.random() * arrayOfChoices.length);

  let computerChoice = arrayOfChoices[randomChoice];

  // if (choice[0]) {
  //   console.log("Rock");
  // } else if (choice[1]) {
  //   console.log("Paper");
  // } else if (choice[2]) {
  //   console.log("Scissor");
  // }

  return computerChoice;
}

console.log(getComputerChoice("rock", "paper", "scissor"));
