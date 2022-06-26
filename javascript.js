// Global variables for playRound() and game()
let playerButton;
let computerButton;
let guiUserScoreChange = document.querySelector('.player .score');
let guiCompScoreChange = document.querySelector('.computer .score');
let finalMessage = document.querySelector('.rules');
let playerScore = 0;
let computerScore = 0;

// Adds the eventListener for the user click
const playerChoices = document.querySelectorAll('.choice');
playerChoices.forEach(choice => {
    choice.addEventListener('click', playRound);
});

// Returns value of player's selection
function playerPlay(event) {
    if (playerButton !== undefined) { // If not first time selecting
        playerButton.classList.remove('clicked');
    }

    playerButton = event.target;
    playerButton.classList.add('clicked');
    if (playerButton.getAttribute("id") === 'user-paper') {
        return "paper";
    } else if (playerButton.getAttribute("id") === 'user-rock') {
        return "rock";
    } else if (playerButton.getAttribute("id") === 'user-scissors') {
        return "scissors";
    }
}

// Returns value of computer's selection
function computerPlay() {
    if (computerButton !== undefined) { // If not first time selecting
        computerButton.classList.remove('clicked');
    }

    let numberCode = Math.floor((Math.random() * 3) + 1)
    if (numberCode === 1) {
        computerButton = document.querySelector('#ai-scissors');
        computerButton.classList.add('clicked');
        return "scissors";
    } else if (numberCode === 2) {
        computerButton = document.querySelector('#ai-paper');
        computerButton.classList.add('clicked');
        return "paper";
    } else {
        computerButton = document.querySelector('#ai-rock');
        computerButton.classList.add('clicked');
        return "rock";
    }
}

// Determines winner of the round
function selectWinner(player, computer) {
    // If player chooses paper
    if (player === "paper") {
        if (computer === "paper") {
            return "tie";
        } else if (computer === "rock") {
            return "player";
        } else if (computer === "scissors") {
            return "computer";
        }
    }
    // If player chooses scissors
    if (player === "scissors") {
        if (computer === "paper") {
            return "player";
        } else if (computer === "rock") {
            return "computer";
        } else if (computer === "scissors") {
            return "tie";
        }
    }
    // If player chooses rock
    if (player === "rock") {
        if (computer === "paper") {
            return "computer";
        } else if (computer === "rock") {
            return "tie";
        } else if (computer === "scissors") {
            return "player";
        }
    }
}

function keepScore (roundResult) {
    if (playerScore === 4 && roundResult === "player") { // If player is going to win
        ++playerScore;
        guiUserScoreChange.textContent = `${playerScore}`;
        return true;
    } else if (computerScore === 4 && roundResult === "computer") { // If computer is going to win
        ++computerScore;
        guiCompScoreChange.textContent = `${computerScore}`;
        return true;
    } else {
        if (roundResult === "player") {
            ++playerScore;
            guiUserScoreChange.textContent = `${playerScore}`;
            return false;
        } else if (roundResult === "computer") {
            ++computerScore;
            guiCompScoreChange.textContent = `${computerScore}`;
            return false;    
        }
    }
}

// Plays a single round
function playRound(event) {
    let playerChoice = playerPlay(event);
    let computerChoice = computerPlay();
    let result = selectWinner(playerChoice, computerChoice); // Calls winner() to determine who won the round
    let isOver = keepScore(result); // Calls keepScore() to determine score adjustments and if game-over boolean is true
    if (isOver === true) { // If game is over
        game();
    }
}

function game() {
    if (playerScore === 5) {
        finalMessage.textContent = "Congratulations! You Win!";
    } else if (computerScore === 5) {
        finalMessage.textContent = "Sorry, the Computer Won. Better Luck Next Time.";
    }
    playerChoices.forEach(choice => {
        choice.removeEventListener('click', playRound);
    });
    const playAgain = document.createElement('p');
    const playAgainParent = document.querySelector('header');
    playAgain.classList.add('rules');
    playAgain.textContent = 'Refresh Page to Play Again';
    playAgainParent.appendChild(playAgain);
}