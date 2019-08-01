function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice == 0) {
        return 'rock';
    }
    if(randomChoice == 1) {
        return 'paper';
    }
    if(randomChoice == 2) {
        return 'scissors';
    }
}

/*
Function that plays a round of rock paper scissors and returns
0, if the player won
1, if the computer won
2, if it's a tie
*/
function playRound(playerSelection, computerSelection)
{
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    if(playerSelection == 'rock') {
        switch(computerSelection) {
            case 'rock':
                return 2;
                break;
            case 'paper':
                return 1;
                break;
            case 'scissors':
                return 0;
                break;
        }
    }
    if(playerSelection == 'paper') {
        switch(computerSelection) {
            case 'rock':
                return 0;
                break;
            case 'paper':
                return 2;
                break;
            case 'scissors':
                return 1;
                break;
        }
    }
    if(playerSelection == 'scissors') {
        switch(computerSelection) {
            case 'rock':
                return 1;
                break;
            case 'paper':
                return 0;
                break;
            case 'scissors':
                return 2;
                break;
        }
    }
}

function game() {
    let playerPoints = 0, computerPoints = 0;
    while(playerPoints != 3 && computerPoints != 3) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        if(roundResult == 0) {
            playerPoints++;
            console.log(`You won, ${playerSelection} beats ${computerSelection}\nCurrent score: ${playerPoints}-${computerPoints}`);
        }
        if(roundResult == 1) {
            computerPoints++;
            console.log(`You lost, ${computerSelection} beats ${playerSelection}\nCurrent score: ${playerPoints}-${computerPoints}`);
        }
    }
    if(playerPoints == 3) {
        console.log("You won! Congratulations!");
    }
    if(computerPoints == 3) {
        console.log("You lost! Better luck next time!");
    }
}

game();