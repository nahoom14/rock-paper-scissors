// Different choices
const arrChoices = ["Rock", "Paper", "Scissors"];

// getComputerChoice() function call
console.log(getComputerChoice());

// Returns one of the three choices from arrChoices
function getComputerChoice(){
    return arrChoices[Math.floor(Math.random() * 3)];
}