var choices = ["rock", "paper", "scissors"];
var choice = getComputerChoice();
function getComputerChoice(){
    var choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

console.log(choice);