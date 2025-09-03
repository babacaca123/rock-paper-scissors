console.log("WORK!")

humanSelection = ""
computerSelection = ""

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0){
        computerSelection = "rock";
    }
    else if (randomNum === 1){
        computerSelection = "paper";
    }
    else if (randomNum === 2){
        computerSelection = "scissors";
    }
    return computerSelection
 
}

function getHumanChoice(){
    userInput = prompt("Rock, paper or scissors: ")
    humanSelection = userInput.toLowerCase();
    
}

humanScore = 0;
computerScore = 0;

function playRound(humanSelection,computerSelection ){
    if ((humanSelection === "rock" && computerSelection === "rock") || (humanSelection === "paper" && computerSelection === "paper") ||
        (humanSelection  === "scissors" && computerSelection === "scissors")){
        console.log(`You both chose ${humanSelection}, try again`) }

    else if ((humanSelection === "rock" && computerSelection === "scissors") ||
     (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")){
        console.log(`${humanSelection} beats ${computerSelection}, you win!`)
        humanScore += 1
    }    
    else{ 
        console.log(`${humanSelection} doesn't beat ${computerSelection}, you lost!`)
        computerScore += 1
    } 


    } 

roundNumber = 1;

function playGame(){
    while (roundNumber != 6){
        getComputerChoice();
        getHumanChoice();
        playRound(humanSelection,computerSelection);
        console.log(`The score is ${humanScore} : ${computerScore} (you:bot)`)
        roundNumber += 1


    }
 

}
playGame();