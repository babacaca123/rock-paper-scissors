console.log("hello world")

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

