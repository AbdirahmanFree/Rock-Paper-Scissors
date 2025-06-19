let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let choice = prompt("Rock Paper or Scissors?");
    return choice.toLowerCase()

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        humanScore+=1;
        computerScore+=1;
        console.log(`Tie! you both selected ${humanChoice}`);
    }
    else {
        if (humanChoice == 'rock') {
            if (computerChoice == 'paper'){
                computerScore +=1;
                console.log(`You Lose! paper beats rock`);
            }
            else {
                humanScore+=1;
                console.log(`You Win! rock beats scissors`)
            }
        }
        if (humanChoice == 'paper') {
            if (computerChoice == 'rock'){
                humanScore +=1;
                console.log(`You win! paper beats rock`);
            }
            else {
                computerScore+=1;
                console.log(`You Lose! scissors beats paper`)
            }
        }
        if (humanChoice == 'scissors') {
            if (computerChoice == 'rock'){
                computerScore +=1;
                console.log(`You Lose! rock beats scissors`);
            }
            else {
                humanScore+=1;
                console.log(`You Win! scissors beats paper`)
            }
        }
        
    }

    
}


