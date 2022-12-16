var choices = ["Rock", "Paper", "Scissors"];
var counterP = 0; //counter for player
var counterC = 0; //counter for computer
function getComputerChoice(){
    var choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

let btn = document.getElementById("rounded");
let rounds = document.getElementById("rounds");
let number = 0;
btn.addEventListener('click', () =>{
    number = rounds.value;
})

function playRound(playerChoice, choice){
    lowerP = playerChoice.toString().toLowerCase();
    lowerC = choice.toString().toLowerCase();
    console.log("The players choice is: " + lowerP);
    console.log("The computers choice is: " +lowerC);

    if(lowerP === lowerC){
        //console.log("Its a draw");
    }else if(lowerP === "rock" && lowerC === "scissors"){
        //console.log("You win! Rock beats scissors");
        counterP++;
        document.getElementById("player").innerHTML = counterP
    }else if(lowerP === "rock" && lowerC === "paper"){
        //console.log("You lose, paper beats rock");
        counterC++;
        document.getElementById("computer").innerHTML = counterC
    }else if(lowerP === "paper" && lowerC === "rock"){
        //console.log("You win! Paper beats rock");
        counterP++
        document.getElementById("player").innerHTML = counterP
    }else if(lowerP === "paper" && lowerC === "scissors") {
        //console.log("You lose! Scissors beats paper");
        counterC++;
        document.getElementById("computer").innerHTML = counterC
    }else if(lowerP === "scissors" && lowerC === "paper"){
        //console.log("You win! Scissors beats paper");
        counterP++;
        document.getElementById("player").innerHTML = counterP
    }else if(lowerP === "scissors" && lowerC === "rock"){
        //console.log("You lose, rock beats scissors");
        counterC++;
        document.getElementById("computer").innerHTML = counterC
    }

    if(counterP == number || counterC == number){
        const rock = document.getElementById('rock');
        const paper = document.getElementById('paper');
        const scsissors = document.getElementById('scissors');
        rock.disabled = true;
        paper.disabled = true;
        scsissors.disabled = true;
    }

    return counterP, counterC;

}


function play(n){
    n = prompt("How many rounds do you wish to play?: ", "choose at least one please");
    console.log("There will be " + n + " rounds, you better win this boi :)");
    for(let i = 0; i < n; i++){
        playerChoice = prompt("Enter your choice: ", "what will it be...");
        playRound(playerChoice, getComputerChoice());
    }
    if(counterP > counterC){
        console.log("You absolute legend, the player won, but at what cost...");
    }else if(counterP < counterC){
        console.log("You absolute loser, the player lost, you failed us all...");
    }else{
        console.log("Its a tie");
    }
}



document.getElementById("rock").addEventListener("click", () => {playRound(document.getElementById("rock").value, getComputerChoice())});
document.getElementById("paper").addEventListener("click", () => {playRound(document.getElementById("paper").value, getComputerChoice())});
document.getElementById("scissors").addEventListener("click", () => {playRound(document.getElementById("scissors").value, getComputerChoice())});

