var choices = ["Rock", "Paper", "Scissors"];
var choice = getComputerChoice();
var playerChoice = "Rock";
function getComputerChoice(){
    var choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function playRound(playerChoice, choice){
    lowerP = playerChoice.toLowerCase();
    lowerC = choice.toLowerCase();
    console.log(lowerP);
    console.log(lowerC);
    if(lowerP === "rock" && lowerC === "scissors"){
        console.log("You win! Rock beats scissors");
    }else if(lowerP === "rock" && lowerC === "rock"){
        console.log("It's a draw");
    }else if(lowerP === "rock" && lowerC === "paper"){
        console.log("You lose, paper beats rock");
    }else if(lowerP === "paper" && lowerC === "rock"){
        console.log("You win! Paper beats rock");
    }else if(lowerP === "paper" && lowerC === "paper"){
        console.log("Its a draw");
    }else if(lowerP === "paper" && lowerC === "scissors") {
        console.log("You lose! Scissors beats paper");
    }else if(lowerP === "scissors" && lowerC === "paper"){
        console.log("You win! Scissors beats paper");
    }else if(lowerP === "scissors" && lowerC === "rock"){
        console.log("You lose, rock beats scissors");
    }else if(lowerP === "scissors" && lowerC === "scissors"){
        console.log("Its a draw");
    }
}

console.log(choice);
console.log(playRound(playerChoice, choice));