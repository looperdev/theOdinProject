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
  let bestNumGames = 3;

  let bestNumGamesInput = document.getElementById("numGames");
  bestNumGamesInput.textContent = bestNumGames;

  let rockButton = document.querySelector("#rock");
  rockButton.onclick = humanRockPlay;

  let paperButton = document.querySelector("#paper");
  paperButton.onclick = humanPaperPlay;

  let scissorsButton = document.querySelector("#scissors");
  scissorsButton.onclick = humanScissorsPlay;

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

  function validateInput() {
    let numGames = +document.getElementById("numGames").value;

    if (numGames < 1) {
      alert("Number of Games must be 1 or more");
      return false;
    }

    return true;
  }

  function updateInterface() {
    if (validateInput()) {
      document.querySelector("#numGames").disabled = true;
      bestNumGames = document.getElementById("numGames").value;

      let humanScore = document.querySelector("#humanScore");
      humanScore.textContent = playerWins;

      let computerScore = document.querySelector("#computerScore");
      computerScore.textContent = computerWins;

      let scoreResult = document.querySelector("#scoreResult");
      scoreResult.textContent = output;
    }
  }

  function checkForEndGame() {
    //console.log("bestNum " + bestNumGames);
    if (playerWins >= bestNumGames || computerWins >= bestNumGames) {
      //alert("inside the end of game");
      // Disable buttons
      document.querySelector("#rock").disabled = true;
      document.querySelector("#paper").disabled = true;
      document.querySelector("#scissors").disabled = true;
      // Declare the winner
      let divWinner = document.createElement("div");
      divWinner.setAttribute("id", "winner");

      if (playerWins > computerWins) {
        divWinner.textContent = "Human wins!!!";
      } else if (computerWins > playerWins) {
        divWinner.textContent = "Computer wins!!!";
      } else {
        divWinner.textContent = "It's a tie";
      }
      let scoreResult = document.querySelector("#scoreResult");
      scoreResult.appendChild(divWinner);

      // Show reset button
      let resetButton = document.createElement("button");
      resetButton.textContent = "Play Again?";
      resetButton.setAttribute("id", "reset");
      divWinner.appendChild(resetButton);

      resetButton.onclick = function () {
        //Unlock best of
        document.querySelector("#numGames").disabled = false;
        document.querySelector("#rock").disabled = false;
        document.querySelector("#paper").disabled = false;
        document.querySelector("#scissors").disabled = false;
        playerWins = 0;
        computerWins = 0;

        document.querySelector("#humanScore").textContent = playerWins;
        document.querySelector("#computerScore").textContent = computerWins;

        document.querySelector("#scoreResult").textContent = "";
      };
    }
  }

  function humanScissorsPlay() {
    playRound("Scissors", computerPlay());
    updateInterface();
    checkForEndGame();
  }
  function humanRockPlay() {
    playRound("Rock", computerPlay());
    updateInterface();
    checkForEndGame();
  }

  function humanPaperPlay() {
    playRound("Paper", computerPlay());
    updateInterface();
    checkForEndGame();
  }
}

game();
