# Rock-Paper-Scissors

This is a simple JavaScript console version of the classic game Rock-Paper-Scissors.

## How It Works

- The game consists of 5 rounds, played between a human and the computer. The scores are tracked using two variables: humanScore and computerScore.

## Main Functions

- playGame()
  This is the main function that runs the game. It calls playRound() five times to simulate five rounds of Rock-Paper-Scissors.

- playRound(getHumanChoice, getComputerChoice)
  This function takes two functions as arguments:

- getHumanChoice() prompts the user for their choice (rock, paper, or scissors).

- getComputerChoice() generates a random choice for the computer by mapping a number between 0 and 2 to rock, paper, or scissors.

It then compares the two choices and updates the score based on the outcome of each round.
