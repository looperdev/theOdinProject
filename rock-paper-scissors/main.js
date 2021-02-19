let choices = ["Rock", "Paper", "Scissors"];

const COMPUTER_WINS = "Computer wins.";
const TIE = "It's a tie.";
const HUMAN_WINS = "Human wins.";

// Computer plays Game

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

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

function game() {
  let playerWins = 0;
  let computerWins = 0;

  while (playerWins < 5 && computerWins < 5) {
    let playerSelection = prompt(
      "Enter your selection: Rock or Paper or Scissors: ",
      "Rock"
    );
    computerSelection = computerPlay();
    let results = playRound(playerSelection, computerSelection);

    if (results === COMPUTER_WINS) {
      console.log(
        COMPUTER_WINS +
          " " +
          computerSelection +
          " beats " +
          playerSelection +
          "."
      );

      computerWins++;
    } else if (results === HUMAN_WINS) {
      console.log(
        HUMAN_WINS + " " + playerSelection + " beats " + computerSelection + "."
      );
      playerWins++;
    } else {
      console.log(
        TIE + " " + playerSelection + " is equal to " + computerSelection + "."
      );
    }
    console.log("Score is Human:" + playerWins + " Computer:" + computerWins);
  }

  if (playerWins > computerWins) {
    console.log("The winner of the match is HUMAN!!!");
  } else {
    console.log("The winner of the match is COMPUTER!!!");
  }
}
