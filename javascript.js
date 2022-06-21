function computerPlay() {
    let numberCode = Math.floor((Math.random() * 3) + 1)
    if (numberCode == 1) {
        return "scissors";
    } else if (numberCode == 2) {
        return "paper";
    } else {
        return "rock";
    }
}

function playerSelection() {
    let stringCode = prompt("Choose your weapon: ");
    stringCode = stringCode.toLowerCase();
    if (stringCode === "paper") {
        return "paper";
    } else if (stringCode === "scissors") {
        return "scissors";
    } else if (stringCode === "rock") {
        return "rock";
    } else {
        return playerSelection();
    }
}

function playRound() {
    let computerChoice = computerPlay();
    let playerChoice = playerSelection();
    console.log(`Player chose: ${playerChoice} | Computer chose: ${computerChoice}`);
    // If player chooses paper
    if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            return "tie";
        } else if (computerChoice === "rock") {
            return "player";
        } else if (computerChoice === "scissors") {
            return "computer";
        }
    }
    // If player chooses scissors
    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            return "player";
        } else if (computerChoice === "rock") {
            return "computer";
        } else if (computerChoice === "scissors") {
            return "tie";
        }
    }
    // If player chooses rock
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "computer";
        } else if (computerChoice === "rock") {
            return "tie";
        } else if (computerChoice === "scissors") {
            return "player";
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let result = playRound();
        if (result === "player") { // If player won
            playerScore++;
            console.log(`Player Wins! Score: User: ${playerScore} Computer: ${computerScore}`);
        } else if (result === "computer") { // If computer won
            computerScore++;
            console.log(`Computer Wins! Score: User: ${playerScore} Computer: ${computerScore}`);        
        } else if (result === "tie") { // If tied 
            console.log(`Tie! Score: User: ${playerScore} Computer: ${computerScore}`);
        }
        console.log(""); // Logs a space for aesthetics
    }
    if (playerScore === 5) {
        console.log(`Player Wins The Game! Final Score: User: ${playerScore} Computer: ${computerScore}`)
    } else if (computerScore === 5) {
        console.log(`Computer Wins The Game! Final Score: User: ${playerScore} Computer: ${computerScore}`)
    }
    return;
}

game();