

//playerClickChoice.addEventListener("click", playerChoice);

function playerChoice(e){
    //console.log(e);
    if (this.classList.contains('paperButton')){
        console.log("Paper");
    }
    else if(this.classList.contains('scissorsButton')){
        console.log("Scissors");
    }
    else{
        console.log("Rock")
    }
}

const playerClickChoice = document.querySelectorAll('.bButton');
playerClickChoice.forEach(playerClickChoice => playerClickChoice.addEventListener("click", playerChoice));
