function computerPlay(array) {
    let myArray = ['paper', 'rock', 'scissors'];
    let rand = Math.floor(Math.random()*myArray.length);
    let rValue = myArray[rand];
    return rValue    ;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats scissors!";
      } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "Loser! Paper beats rock";
      } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "It's a draw";
      }
      //paper Choice
      else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats rock";
      } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats paper";
      } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "It's a draw";
      }
      //scissors Choice
      else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat paper";
      } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats scissors";
      } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return "It's a draw";
      } else {
        return "Something went wrong";
      }
    }


function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Paper, rock, or scissors?');
        const computerSelection = computerPlay() ;
    console.log (playRound(playerSelection, computerSelection)) ;
          } 
     }

game();