function getComputerChoice() {
    //Generates a random choice for the computer    
    const choices = ['rock','paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return 'It is a tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `Player wins! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
        computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if (result.startsWith("Player wins!")) {
            playerScore++;
        } else if (result.startsWith("Computer wins!")) {
            computerScore++;
        }

        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It is a tie!");
    }
}

playGame();