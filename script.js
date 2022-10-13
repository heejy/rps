function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "WTF?";
    }
}

function playRound (playerSelection, computerSelection){
    if(playerSelection === computerSelection) {
        return "draw"
    }
    else {
        if( (playerSelection === 'rock' && computerSelection ===  "scissors") ||
            (playerSelection === 'paper' && computerSelection ===  "rock") ||
            (playerSelection === 'scissors' && computerSelection ===  "paper") ) {
                return "player"
            }
        else {
            return "computer"
        }
    }
}
const NUM_OF_POINTS = 3;
let playerPoints = 0;
let computerPoints = 0;
while (playerPoints < NUM_OF_POINTS && computerPoints < NUM_OF_POINTS) {
    let playerSelection = prompt("R? P? S?").toLowerCase();
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    if (winner === "player") {
        playerPoints++;
        console.log(`${playerSelection} vs ${computerSelection}: you won! (${playerPoints}:${computerPoints})`)
    } else if (winner ===  "computer") {
        computerPoints++;
        console.log(`${playerSelection} vs ${computerSelection}: you lost! (${playerPoints}:${computerPoints})`)
    }
    else {
        console.log(`${playerSelection} vs ${computerSelection}: draw! (${playerPoints}:${computerPoints})`)
    }
 }
 let h1 = document.getElementById("result")
 if(computerPoints === NUM_OF_POINTS) {
    h1.innerHTML = "You lost";
 }
 else if(playerPoints === NUM_OF_POINTS) {
    h1.innerHTML = "You won!";
 }

