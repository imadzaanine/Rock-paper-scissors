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
function game() {
    
for (let i = 0; i < 5; i++) {
    

const playerSelection = prompt("Rock..paper..scissors..shoot")
const computerSelection = getComputerChoice();
const resault = playRound(playerSelection, computerSelection);
console.log(resault);
let playerWins = 0;
let computerWins = 0;
if (resault.includes("won")) {
    playerWins++;
    
}else{
    if (resault.includes("lost")) {
        computerWins++;
    }
}
console.log(`player: ${playerWins}`+`Computer: ${computerWins}`);

}
}

