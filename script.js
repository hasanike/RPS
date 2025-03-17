//Establish the variable.//
const choices = ["rock", "paper", "scissors"];

//Function to ramdonly assign value to Computer's choice//
function getComputerChoice(){
    const option = choices[Math.floor(math.random() * choices.length)];
    return option;
}

//Function to compare User choice vs Computer choice//
function checkwinner(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors")
        (playerSelection == "scissors" && computerSelection == "paper")
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "User Wins";
    }
    else {
        return "Computer Wins";
    }

}

