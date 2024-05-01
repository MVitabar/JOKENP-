const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;


//ENUMS
const GAME_OPTION = {
  ROCK:"rock",
  PAPER: "paper",
  SCISSORS: "scissors"
}

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [GAME_OPTION.ROCK, GAME_OPTION.PAPER, GAME_OPTION.SCISSORS];
  const randomNumber = Math.floor(Math.random() * 3);

  console.log(randomNumber);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Draw";
  } else if (
    (human === GAME_OPTION.PAPER && machine === GAME_OPTION.ROCK) ||
    (human === GAME_OPTION.ROCK && machine === GAME_OPTION.SCISSORS) ||
    (human === GAME_OPTION.SCISSORS && machine === GAME_OPTION.PAPER)
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "You Won";
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Alexa Won";
  }
};
