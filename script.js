// Establish variables for Rock, Paper, Scissors"

const choices = ["rock", "paper", "scissors"]

// Function to get the Computer's Choice//

function getComputerChoice(){
   let computerChoice = Math.random() * 3;

    if (computerChoice <= .33){
        console.log("rock");
        return "rock";
    } else if (computerChoice <= .66) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors")
        return "scissors";
    }
}
getComputerChoice();
//Function to prompt for User's choice
function getUserChoice() {
    let userChoice = prompt("Select either 'rock', 'paper', or 'scissors' to play");
    console.log(userChoice);
    return userChoice;
}
// Compare User Choice to Computer Choice to get a winner

function getWinner (computerChoice,userChoice){
    if (computerChoice === userChoice){
        console.log("Its a tie");
        return;
    } else if 
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "rock" && userChoice === "scissors") {
        console.log("you Lose");
        return;
    } else {
        console.log("you win");
        return;
    }
}

const userChoice = getUserChoice();
const computerChoice= getComputerChoice();
getWinner(computerChoice,userChoice)