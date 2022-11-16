var choices = ["Rock", "Paper", "Scissors"];
var choice = getComputerChoice();
var playerChoice = "paPER";
var counterP = 0; //counter for player
var counterC = 0; //counter for computer
function getComputerChoice(){
    var choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function playRound(playerChoice, choice){
    lowerP = playerChoice.toString().toLowerCase();
    lowerC = choice.toString().toLowerCase();
    console.log(lowerP);
    console.log(lowerC);
    if(lowerP === lowerC){
        //console.log("Its a draw");
    }else if(lowerP === "rock" && lowerC === "scissors"){
        //console.log("You win! Rock beats scissors");
        counterP++;
    }else if(lowerP === "rock" && lowerC === "paper"){
        //console.log("You lose, paper beats rock");
        counterC++;
    }else if(lowerP === "paper" && lowerC === "rock"){
        //console.log("You win! Paper beats rock");
        counterP++
    }else if(lowerP === "paper" && lowerC === "scissors") {
        //console.log("You lose! Scissors beats paper");
        counterC++;
    }else if(lowerP === "scissors" && lowerC === "paper"){
        //console.log("You win! Scissors beats paper");
        counterP++;
    }else if(lowerP === "scissors" && lowerC === "rock"){
        //console.log("You lose, rock beats scissors");
        counterC++;
    }
    return counterP, counterC;
}

console.log(choice);
//console.log(playRound(playerChoice, choice));

function play(){
    for(let i = 0; i<5; i++){
        playerChoice = prompt("Enter your choice: ", "what will it be...");
        playRound(playerChoice, getComputerChoice());
    }
    if(counterP > counterC){
        console.log("You win, yay");
    }else if(counterP < counterC){
        console.log("You lost, nay");
    }else{
        console.log("Its a tie");
    }
}
play(); 