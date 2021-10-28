function getRandomNumber (max) {
    return Math.floor(Math.random() * max);
}


function computerPlay(){
    computerChoice = getRandomNumber(3);
    let computerChoiceResult = "";
    switch (computerChoice){
        case 0:
            //console.log("Paper");
            computerChoiceResult = "Paper";
            break;
        case 1:
            //console.log("Scissors");
            computerChoiceResult = "Scissors";
            break;
        case 2:
            //console.log("Rock");
            computerChoiceResult = "Rock";
            break;
        default:
            break;
    }    

    return (computerChoiceResult)
}

console.log(computerPlay());
// computerPlay();
// computerPlay();
// computerPlay();


