const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const option = choices[Math.floor(math.random() * choices.length)];
    return option;
}

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

