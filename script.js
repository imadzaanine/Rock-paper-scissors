function playRound(playerSelection, computerSelection) {
    while(playerSelection === "rock"){
    if (computerSelection === "scissors") {
        return "You have won! the computer choosed scissors"
    } else {
        if (computerSelection === "paper") {
            return "You have lost! the computer choosed paper"
        } else {
            if ( computerSelection === "rock") {
                return "Its a draw! Both of you choosed rock"
            } else {
                
            }
            
        }
        
    }
    }
    while (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You have lost! the computer choosed scissors"
        } else {
            if (computerSelection === "paper") {
                return "Its a draw! Both of you choosed paper"
            } else {
                if ( computerSelection === "rock") {
                    return "You have won! the computer choosed rock"
                } else {
                    
                }
                
            }
    }
    while (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "Its a draw! Both of you choosed scissors"
        } else {
            if (computerSelection === "paper") {
                return "You have won! the computer choosed paper"
            } else {
                if ( computerSelection === "rock") {
                    return "You have lost! the computer choosed rock"
                } else {
                    
                }
                
            }
    }
}