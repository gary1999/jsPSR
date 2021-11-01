function getRandomNumber (max) {
    return Math.floor(Math.random() * max);
}

//User's choice between Paper/Scissors/Rock
function userChoice(choice){
    let userChoice = choice;
    //userChoice = userChoice.toLowerCase();
    return (userChoice);
}

//Computer's random choice between Paper/Scissors/Rock
function computerChoice(){
    computerRandomChoice = getRandomNumber(3);
    let computerChoiceResult = "";
    switch (computerRandomChoice){
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

function compare(userChoice, computerChoice){
    
    console.log(computerChoice);
    let result;

    if (userChoice === computerChoice) {
        //choiceDisplay(userChoice, computerChoice)
        
        result = ("Draw");
        //roundCounter += 1
    }

    else if (userChoice === "paper" && computerChoice === "scissors" ||
             userChoice === "scissors" && computerChoice === "rock" || 
             userChoice === "rock" && computerChoice === "paper" ){
        //choiceDisplay(userChoice, computerChoice)
        result = ("You lose");
        //roundCounter += 1
    }

    else{
        //choiceDisplay(userChoice, computerChoice)
       result = ("You win");
        //userScore += 1;
    }

    return (result);

}

let userChoiceCompare;
let computerChoiceCompare;
let roundResult;

function game(choice){
    userChoiceCompare = userChoice(choice);
    computerChoiceCompare = computerChoice();
    roundResult = compare(userChoiceCompare, computerChoiceCompare);
    return (roundResult);
}

function getUserChoiceCompare(){
    return (userChoiceCompare);
}

function getComputerChoiceCompare(){
    return (computerChoiceCompare);
}