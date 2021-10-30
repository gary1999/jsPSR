function getRandomNumber (max) {
    return Math.floor(Math.random() * max);
}

function computerPlay(){
    computerChoice = getRandomNumber(3);
    let computerChoiceResult = "";
    switch (computerChoice){
        case 0:
            //console.log("Paper");
            computerChoiceResult = "paper";
            break;
        case 1:
            //console.log("Scissors");
            computerChoiceResult = "scissors";
            break;
        case 2:
            //console.log("Rock");
            computerChoiceResult = "rock";
            break;
        default:
            break;
    }    

    return (computerChoiceResult)
}

function userPlay(){
    let userInput = prompt("What would you like to play?");
    userInput = userInput.toLowerCase();
    return (userInput);
}

let userScore = 0;
let roundCounter = 0;

function compare(userChoice, computerChoice){
    
    if (userChoice === computerChoice) {
        choiceDisplay(userChoice, computerChoice)
        console.log("Draw");
        roundCounter += 1
    }

    else if (userChoice === "paper" && computerChoice === "scissors" ||
             userChoice === "scissors" && computerChoice === "rock" || 
             userChoice === "rock" && computerChoice === "paper" ){
        choiceDisplay(userChoice, computerChoice)
        console.log("You lose");
        roundCounter += 1
    }

    else{
        choiceDisplay(userChoice, computerChoice)
        console.log("You win");
        userScore += 1;
    }

}

function choiceDisplay(userChoice, computerChoice){
    console.log("You played: " + userChoice);
    console.log("Computer played: " + computerChoice);
}

function game(){
    for (i = 0; i < 5; i++){
        console.log("Round " + (i + 1));

        //testing purposes
        let userChoiceCompare = "rock";
        //let userChoiceCompare = userPlay();

        let computerChoiceCompare = computerPlay();
        compare(userChoiceCompare, computerChoiceCompare);
    }
    console.log("You won " + userScore + " out of " + (userScore + roundCounter) + " rounds.")

}

game();
