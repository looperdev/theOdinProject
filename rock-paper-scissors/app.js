let choices = ["Rock", "Paper", "Scissors"];

const COMPUTER_WINS = "Computer wins.";
const TIE = "It's a tie.";
const HUMAN_WINS = "Human wins.";

function computerPlay() {
  let result = choices[Math.floor(Math.random() * choices.length)];
  console.log("Computer plays " + result);
  return result;
}

function game() {
  let playerSelection;
  let computerSelection;
  let results;
  let playerWins = 0;
  let computerWins = 0;
  let output = "";

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    test = playerSelection + "_" + computerSelection;
    //console.log(test);

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

    results = combos[test];

    if (results === COMPUTER_WINS) {
      output =
        COMPUTER_WINS +
        " " +
        computerSelection +
        " beats " +
        playerSelection +
        ".";

      computerWins++;
    } else if (results === HUMAN_WINS) {
      output =
        HUMAN_WINS +
        " " +
        playerSelection +
        " beats " +
        computerSelection +
        ".";
      playerWins++;
    } else {
      output =
        TIE + " " + playerSelection + " is equal to " + computerSelection + ".";
    }

    console.log(output);

    // return [
    //   playerSelection,
    //   computerSelection,
    //   results,
    //   playerWins,
    //   computerWins,
    //   output,
    // ];
  }

  function updateScore() {
    //console.log("Made it inside update score");
    let humanScore = document.querySelector("#humanScore");
    humanScore.textContent = playerWins;

    let computerScore = document.querySelector("#computerScore");
    computerScore.textContent = computerWins;

    let scoreResult = document.querySelector("#scoreResult");
    scoreResult.textContent = output;
    console.log(output);
  }

  function humanScissorsPlay() {
    playRound("Scissors", computerPlay());
    //playerSelection = output[0];
    //computerSelection = output[1];
    //results = output[2];
    updateScore();
    //console.log(results);
  }
  function humanRockPlay() {
    playRound("Rock", computerPlay());
    //playerSelection = output[0];
    //computerSelection = output[1];
    //results = output[2];
    updateScore();
    //console.log(results);
  }

  function humanPaperPlay() {
    playRound("Paper", computerPlay());
    //playerSelection = output[0];
    //computerSelection = output[1];
    //results = output[2];
    updateScore();
    //console.log(results);
  }

  let rockButton = document.querySelector("#rock");
  rockButton.onclick = humanRockPlay;

  let paperButton = document.querySelector("#paper");
  paperButton.onclick = humanPaperPlay;

  let scissorsButton = document.querySelector("#scissors");
  scissorsButton.onclick = humanScissorsPlay;
}

game();

// while (playerWins < 5 && computerWins < 5) {
//   // let playerSelection = prompt(
//   //   "Enter your selection: Rock or Paper or Scissors: ",
//   //   "Rock"
//   // );
//   // computerSelection = computerPlay();

//   //let results = playRound(playerSelection, computerSelection);
//   console.log(results);

//   if (results === COMPUTER_WINS) {
//     console.log(
//       COMPUTER_WINS +
//         " " +
//         computerSelection +
//         " beats " +
//         playerSelection +
//         "."
//     );

//     computerWins++;
//   } else if (results === HUMAN_WINS) {
//     console.log(
//       HUMAN_WINS + " " + playerSelection + " beats " + computerSelection + "."
//     );
//     playerWins++;
//   } else {
//     console.log(
//       TIE + " " + playerSelection + " is equal to " + computerSelection + "."
//     );
//   }
//   console.log("Score is Human:" + playerWins + " Computer:" + computerWins);
// }
// if (playerWins > computerWins) {
//   console.log("The winner of the match is HUMAN!!!");
// } else {
//   console.log("The winner of the match is COMPUTER!!!");
// }
// }

// game();
