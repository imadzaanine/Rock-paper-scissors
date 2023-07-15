function playRound(playerSelection, computerSelection) {
  while (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You have won! the computer choosed scissors";
    } else {
      if (computerSelection === "paper") {
        return "You have lost! the computer choosed paper";
      } else {
        if (computerSelection === "rock") {
          return "Its a draw! Both of you choosed rock";
        }
      }
    }
  }
  while (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You have lost! the computer choosed scissors";
    } else {
      if (computerSelection === "paper") {
        return "Its a draw! Both of you choosed paper";
      } else {
        if (computerSelection === "rock") {
          return "You have won! the computer choosed rock";
        }
      }
    }
    while (playerSelection === "scissors") {
      if (computerSelection === "scissors") {
        return "Its a draw! Both of you choosed scissors";
      } else {
        if (computerSelection === "paper") {
          return "You have won! the computer choosed paper";
        } else {
          if (computerSelection === "rock") {
            return "You have lost! the computer choosed rock";
          }
        }
      }
    }
  }
}
function getComputerChoice() {
    let Selection = Math.floor(Math.random() * 3);
    if (Selection === 0) {
        return "rock";
    } else {
        if (Selection === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
