const resultsDiv = document.querySelector("#results");
const scoresDiv = document.querySelector("#scores");

humanSelection = ""
computerSelection = ""



humanScore = 0;
computerScore = 0;

function showScore(){
    scoresDiv.textContent = `The score is ${humanScore} : ${computerScore} (you:bot)`;
    roundNumber += 1
}

function checkWinner(){
    if (humanScore == 5){
        scoresDiv.textContent = `congrats! you beat the bot (The score is ${humanScore} : ${computerScore} (you:bot))`
    }
    else if(computerScore == 5){
        scoresDiv.textContent = `damn! you lost to the bot (The score is ${humanScore} : ${computerScore} (you:bot)`
    }
}

function playRound(humanSelection,computerSelection ){
    if ((humanSelection === "rock" && computerSelection === "rock") || (humanSelection === "paper" && computerSelection === "paper") ||
        (humanSelection  === "scissors" && computerSelection === "scissors")){
        resultsDiv.textContent = `You both chose ${humanSelection}, try again` }

    else if ((humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")){
        resultsDiv.textContent = `${humanSelection} beats ${computerSelection}, you win!`;
        humanScore += 1
    }    
    else{ 
        resultsDiv.textContent = `${humanSelection} doesn't beat ${computerSelection}, you lost!`;
        computerScore += 1
    } 
    showScore();
    checkWinner();

    } 

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
    
const buttons = document.querySelectorAll("button");

    
buttons[0].addEventListener("click", () => 
    {
        const computerSelection = getComputerChoice();
        playRound("rock", computerSelection)});
buttons[1].addEventListener("click", () => 
    {
        const computerSelection = getComputerChoice();
        playRound("paper", computerSelection)});     
buttons[2].addEventListener("click", () => 
    {
        const computerSelection = getComputerChoice();
        playRound("scissors", computerSelection)});        



roundNumber = 1;





