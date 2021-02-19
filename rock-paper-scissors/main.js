let choices = ["rock", "paper", "scissors"];

// Computer plays Game

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const COMPUTER_WINS = "Computer wins.";
  const TIE = "It's a tie.";
  const HUMAN_WINS = "Human wins.";

  test = playerSelection + "_" + computerSelection;

  combos = {
    rock_rock: TIE,
    rock_paper: COMPUTER_WINS,
    rock_scissors: HUMAN_WINS,
    paper_rock: HUMAN_WINS,
    paper_paper: TIE,
    paper_scissors: COMPUTER_WINS,
    scissors_rock: COMPUTER_WINS,
    scissors_paper: HUMAN_WINS,
    scissors_scissors: TIE,
  };

  return combos[test];
}
