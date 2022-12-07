// Different choices
const arrChoices = ["ROCK", "PAPER", "SCISSORS"];

game();

// Returns one of the three choices from arrChoices
function getComputerChoice() {
    return arrChoices[Math.floor(Math.random() * 3)];
}

// Plays a round of RPS
function playOneRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection)
    {
        return "It ends in a stalemate!";
    }
    else if(playerSelection === "ROCK"){
        if(computerSelection === "PAPER") {
            return "You lose! Paper covers Rock.";
        } 
        else {
            return "You win! Rock smashes Scissors.";
        }
    }
    else if(playerSelection === "PAPER") {
        if(computerSelection === "SCISSORS") {
            return "You lose! Scissors cuts Paper.";
        }
        else {
            return "You win!. Paper covers Rock";
        }
    }
    else if(playerSelection === "SCISSORS") {
        if(computerSelection === "ROCK") {
            return "You lose! Rock smashes Scissors.";
        }
        else {
            return "You win!. Scissors cuts Paper";
        }
    }
}

function game(plSelect, cpSelect) {
    for(let i = 0; i < 5; i++) {

        // Prompt user choice and generate computer choice
        let playerChoice = prompt("Enter a choice [Rock, Paper, Scissors]:").toUpperCase();
        let computerChoice = getComputerChoice().toUpperCase();

        // Display choices
        console.log("Player Selection: " + playerChoice);
        console.log("\nComputer Selection: " + computerChoice);
        console.log("\n");

        // Check if input is valid
        if(playerChoice != null && (arrChoices.includes(playerChoice))){
            console.log(playOneRound(playerChoice, computerChoice));
        }
        else{
            console.log("Please enter a valid choice.[Rock, Paper, Scissors]");      
        }
    }
}