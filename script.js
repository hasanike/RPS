;

// Function to get the Computer's Choice
function getComputerChoice(){
   let computerChoice = Math.random() * 3

if (computerChoice <= .33){
    console.log("rock");
    return "rock"

}else if (computerChoice <= .66) {
    console.log("paper");
    return "paper"
}
else {
    console.log("scissors")
    return "scissors"
}
}
getComputerChoice()
