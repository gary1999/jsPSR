const scoreTracker = document.querySelector('#scoreTracker');
let gameRounds = 0;

const div = document.createElement('div');
div.style.backgroundColor='yellow';
div.style.height='300px';
div.style.width='300px';

div.style.display='flex';
div.style.alignSelf='center';
div.style.alignItems='center';
div.style.justifyContent='center';
div.style.whiteSpace='pre-wrap';

div.textContent=`The current round is ${gameRounds}`
//div.textContent = userPlay();

scoreTracker.appendChild(div);

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

const playerClickChoice = document.querySelectorAll('.bButton');
playerClickChoice.forEach(playerClickChoice => playerClickChoice.addEventListener("click", playerChoice));


function gameTracker(choice){
    while (gameRounds < 6){
        result = game(choice);
        console.log(gameRounds);
        update(result);
        break;
    }

}

function update(){
    div.textContent = `The current round is ${gameRounds}\nYou played: ${getUserChoiceCompare()}\nThe computer played: ${getComputerChoiceCompare()}`;
    div.textContent += `\n${result}`;

    if(result == "You lose"){
        div.style.backgroundColor='red';
    }
    else if(result == "You win"){
        div.style.backgroundColor='green';
    }
    else{
        div.style.backgroundColor='yellow';
    }
}

//gameTracker();