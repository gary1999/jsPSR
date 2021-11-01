const scoreTracker = document.querySelector('#scoreTracker');
let gameRounds = 0;
const playAgainButton = document.createElement('BUTTON');

const div = document.createElement('div');
div.style.backgroundColor='yellow';
div.style.height='300px';
div.style.width='300px';

div.style.display='flex';
div.style.alignSelf='center';
div.style.alignItems='center';
div.style.justifyContent='center';
div.style.flexDirection='column';
div.style.whiteSpace='pre-wrap';

div.textContent=`Make a choice to begin`
//div.textContent = userPlay();

scoreTracker.appendChild(div);

//let gameEnd = false;

let playerScore = 0;
let computerScore = 0;
const playerClickChoice = document.querySelectorAll('.bButton');

function playerChoice(){
    if (this.classList.contains('paperButton')){
        gameRounds += 1;
        gameTracker("paper");
    }
    else if(this.classList.contains('scissorsButton')){
        gameRounds += 1
        gameTracker("scissors");
    }
    else{
        gameRounds += 1
        gameTracker("rock");
    }
    
}

function update(){
    if(result == "You lose"){
        computerScore += 1
        console.log("computer score: " + computerScore);
        div.style.backgroundColor='red';
    }
    else if(result == "You win"){
        playerScore += 1
        console.log("player score: " + playerScore);
        div.style.backgroundColor='green';
    }
    else if (result == "Draw"){
        div.style.backgroundColor='yellow';
    }
    else{
    }
    div.textContent = `The current round is ${gameRounds}`
    div.textContent +=`\nYour current score is: ${playerScore}`
    div.textContent +=`\nComputer current score is: ${computerScore}`
    div.textContent +=`\nYou played: ${getUserChoiceCompare()}`
    div.textContent +=`\nThe computer played: ${getComputerChoiceCompare()}`;
    div.textContent +=`\n${result}`;

}



function gameEnd(){
    playAgainButton.innerHTML = "Click me to restart";
    playAgainButton.classList.add("restart");
    playAgainButton.addEventListener('click', gameRestart)
    div.appendChild(playAgainButton);
}

function gameRestart(){
    if (playAgainButton.classList.contains("restart")){
        playAgainButton.remove();
    }
    playerClickChoice.forEach(playerClickChoice => playerClickChoice.addEventListener("click", playerChoice));
    div.style.backgroundColor='yellow';
    playerScore = 0;
    computerScore = 0;
    gameRounds = 0;
    div.textContent = `The current round is ${gameRounds}`
}

function gameTracker(choice){
    while (gameRounds < 20){
        result = game(choice);
        console.log(gameRounds);
        update(result);
        break;
    }

    if (playerScore == 5 || computerScore == 5){
        playerClickChoice.forEach(playerClickChoice => playerClickChoice.removeEventListener("click", playerChoice));
        
        if(playerScore == 5){
            div.textContent =`WINNER!!!`
            div.textContent += `\nYou had ${playerScore} points.`
            div.textContent += `\nYou won ${playerScore} points in ${gameRounds} rounds`
        }
        else{
            div.textContent=`LOSER!!!`
            div.textContent += `\nYou had ${playerScore} points.`
            div.textContent += `\nComputer won ${computerScore} points in ${gameRounds} rounds`
        }

        //div.textContent.remove();
        //console.log("test");
        gameEnd();
    }

}

gameRestart();

//gameTracker();