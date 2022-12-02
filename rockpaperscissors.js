// Different choices
const arrChoices = ["ROCK", "PAPER", "SCISSORS"];

// Prompt user choice and generate computer choice
const playerChoice = prompt("Enter a choice [Rock, Paper, Scissors]:").toUpperCase();
const computerChoice = getComputerChoice().toUpperCase();

// Display choices
console.log("Player Selection: " + playerChoice);
console.log("\nComputer Selection: " + computerChoice);
console.log("\n");

// Check if input is valid
if(playerChoice != null && (arrChoices.includes(playerChoice))){
    playOneRound(playerChoice, computerChoice);
}
else{
    console.log("Please enter a valid choice.[Rock, Paper, Scissors]");      
}


// Returns one of the three choices from arrChoices
function getComputerChoice() {
    return arrChoices[Math.floor(Math.random() * 3)];
}

// Plays a round of RPS
function playOneRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection)
    {
        console.log("It ends in a stalemate!");
    }
    else if(playerSelection === "ROCK"){
        if(computerChoice === "PAPER") {
            console.log("You lose! Paper covers Rock.");
        } 
        else {
            console.log("You win! Rock smashes Scissors.")
        }
    }
    else if(playerSelection === "PAPER") {
        if(computerChoice === "SCISSORS") {
            console.log("You lose! Scissors cuts Paper.")
        }
        else {
            console.log("You win!. Paper covers Rock");
        }
    }
    else if(playerSelection === "SCISSORS") {
        if(computerChoice === "ROCK") {
            console.log("You lose! Rock smashes Scissors.")
        }
        else {
            console.log("You win!. Scissors cuts Paper");
        }
    }
}