let humanScore = 0;
let computerScore = 0;

const subHead = document.querySelector("h2");
const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const display = document.querySelector("#display");
const myScreen = document.querySelector("body");
const rockBtn = document.querySelector("#rock");
const rockHandler = ()=> playRound('rock',getComputerChoice())
const paperBtn = document.querySelector("#paper");
const paperHandler = ()=> playRound('paper',getComputerChoice())
const scissorsBtn = document.querySelector("#scissors");
const scissorsHandler = ()=> playRound('scissors',getComputerChoice())


const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", () => startGame());
function startGame() {
    rockBtn.addEventListener("click", rockHandler);
    paperBtn.addEventListener("click", paperHandler);
    scissorsBtn.addEventListener("click", scissorsHandler);
    humanScore = 0;
    humanScoreDisplay.textContent = "Human: 0"
    computerScore= 0;
    computerScoreDisplay.textContent = "Computer: 0"
    myScreen.setAttribute("style","background-color: white;");
    subHead.textContent = "First to 5 wins!";
    
}


function getComputerChoice(){
    let choice = Math.floor(Math.random() *3);
    if (choice == 0) {
        return "rock"
    }
    else if (choice ==1) {
        return "paper"
    }
    else {
        return "scissors"
    }

}




function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        humanScoreDisplay.textContent = `Human: ${humanScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
        console.log(`Tie! you both selected ${humanChoice}`);
        display.textContent = `Tie! you both selected ${humanChoice}`;
    }
    else {
        if (humanChoice == 'rock') {
            if (computerChoice == 'paper'){
                computerScore +=1;
                computerScoreDisplay.textContent = `Computer: ${computerScore}`;
                console.log(`You Lose! paper beats rock`);
                display.textContent = `You Lose! paper beats rock`;
            }
            else {
                humanScore+=1;
                humanScoreDisplay.textContent = `Human: ${humanScore}`;
                console.log(`You Win! rock beats scissors`)
                display.textContent = `You Win! rock beats scissors`;
            }
        }
        if (humanChoice == 'paper') {
            if (computerChoice == 'rock'){
                humanScore +=1;
                humanScoreDisplay.textContent = `Human: ${humanScore}`;
                console.log(`You win! paper beats rock`);
                display.textContent = `You win! paper beats rock`;
            }
            else {
                computerScore+=1;
                computerScoreDisplay.textContent = `Computer: ${computerScore}`;
                console.log(`You Lose! scissors beats paper`)
                display.textContent = `You Lose! scissors beats paper`;
            }
        }
        if (humanChoice == 'scissors') {
            if (computerChoice == 'rock'){
                computerScore +=1;
                computerScoreDisplay.textContent = `Computer: ${computerScore}`;
                console.log(`You Lose! rock beats scissors`);
                display.textContent = `You Lose! rock beats scissors`;
            }
            else {
                humanScore+=1;
                humanScoreDisplay.textContent = `Human: ${humanScore}`;
                console.log(`You Win! scissors beats paper`);
                display.textContent = `You Win! scissors beats paper`;
            }
        }
        
    }
    if(humanScore ==5){
        subHead.textContent = "YOU WIN";
        gameOver();
        myScreen.setAttribute("style","background-color: green;");
    }
    if (computerScore == 5){
        subHead.textContent = "YOU LOSE";
        gameOver();
        myScreen.setAttribute("style","background-color: red;");
    }

}




function gameOver() {
    rockBtn.removeEventListener("click", rockHandler)
    paperBtn.removeEventListener("click",paperHandler)
    scissorsBtn.removeEventListener("click",scissorsHandler)
}







