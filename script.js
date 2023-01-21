let counterP = 0; //counter for player
let counterC = 0; //counter for computer

// creating a list of all the available choices
let choices = ["Rock", "Paper", "Scissors"];
// function which gives a random choice from the list "choices" each time its called
function getComputerChoice(){
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

let btn = document.getElementById("rounded"); // button which is used for sending how many rounds is played
let rounds = document.getElementById("rounds"); // input for how many rounds are there to be played
let number = 0;
btn.addEventListener('click', () =>{
    number = rounds.value;
})


//main function which uses 2 arguments to decide whos the winner between them
function playRound(playerChoice, choice){
    lowerP = playerChoice.toString().toLowerCase(); //ensures the input is always in the same format
    lowerC = choice.toString().toLowerCase(); //ensures the input is always in the same format

    if(lowerP === "rock" && lowerC === "scissors"){
        counterP++;
        document.getElementById("player").innerHTML = counterP
    }else if(lowerP === "rock" && lowerC === "paper"){
        counterC++;
        document.getElementById("computer").innerHTML = counterC
    }else if(lowerP === "paper" && lowerC === "rock"){
        counterP++
        document.getElementById("player").innerHTML = counterP
    }else if(lowerP === "paper" && lowerC === "scissors") {
        counterC++;
        document.getElementById("computer").innerHTML = counterC
    }else if(lowerP === "scissors" && lowerC === "paper"){
        counterP++;
        document.getElementById("player").innerHTML = counterP
    }else if(lowerP === "scissors" && lowerC === "rock"){
        counterC++;
        document.getElementById("computer").innerHTML = counterC
    }

    // if either counter is equal to the number of rounds, the game is finished, all the buttons are disabled
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


/*
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
} */ // unrelated function which was used for the console version



// added event listeners for each button so when its clicked function "playRound" is called
document.getElementById("rock").addEventListener("click", () => {playRound(document.getElementById("rock").value, getComputerChoice())});
document.getElementById("paper").addEventListener("click", () => {playRound(document.getElementById("paper").value, getComputerChoice())});
document.getElementById("scissors").addEventListener("click", () => {playRound(document.getElementById("scissors").value, getComputerChoice())});

