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

let playerScore = 0, computerScore = 0;
function handleClick(button)
{
    let playerSelection = button.getAttribute('id');
    let computerSelection = computerPlay();
    let resultString = `The computer chose ${computerSelection}.<br>`;
    let roundResult = playRound(playerSelection, computerSelection);
    if(roundResult == 0) {
        playerScore++;
        resultString+=`You won, ${playerSelection} beats ${computerSelection}`;
    }
    if(roundResult == 1) {
        computerScore++;
        resultString += `You lost, ${computerSelection} beats ${playerSelection}`;
    }
    if(roundResult == 2) {
        resultString += `It's a tie!`;
    }
    let resultElement = document.querySelector("#result");
    let scoreElement = document.querySelector("#score");
    let content = document.querySelector(".content");
    resultElement.innerHTML = resultString;
    scoreElement.innerHTML = `Current score: ${playerScore}-${computerScore}`;
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button)  => {
    button.addEventListener('click', () => {
        handleClick(button);
    });
});

