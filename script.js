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


const buttons = document.querySelectorAll('.selection');
const resultsDiv = document.querySelector('.results')
let h1 = document.getElementById("result")

const NUM_OF_POINTS = 3;
let playerPoints = 0;
let computerPoints = 0;




buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (e) => {
        //console.log( playRound(selection, getComputerChoice()) )

        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice();
        const paragraph = document.createElement('p');
        let winner = playRound(playerSelection, computerSelection);
        if (winner === "player") {
            playerPoints++;
            paragraph.textContent = `${playerSelection} vs ${computerSelection}: you won! (${playerPoints}:${computerPoints})`
        } else if (winner ===  "computer") {
            computerPoints++; 
            paragraph.textContent = `${playerSelection} vs ${computerSelection}: you lost! (${playerPoints}:${computerPoints})`
        }
        else {
            paragraph.textContent = `${playerSelection} vs ${computerSelection}: draw! (${playerPoints}:${computerPoints})`
        }
        resultsDiv.appendChild(paragraph)

        if(computerPoints === NUM_OF_POINTS) {
            h1.innerHTML = "You lost";
         }
         else if(playerPoints === NUM_OF_POINTS) {
            h1.innerHTML = "You won!";
         }

    })
} )



