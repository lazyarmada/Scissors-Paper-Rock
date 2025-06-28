// The Rule: Rock beats Scissors beats paper beats Rock
// CPU will choose Rock Paper Scissors at random
function getComputerChoice() {
// CPU randomly chooses a number between 0 and 1
    let cpuNumber = Math.random()
    // if 0 or more, its rock
    // if .33 to .66, its paper
    // if its more than .66, its scissor
        if (cpuNumber < 0.33) {
            return "rock"
        }
        else if (cpuNumber < 0.66) {
            return "paper"
        }
        else {
            return "scissors"
        }
    }
    console.log(getComputerChoice())

const playButton = document.querySelector("#human-input")
const log = document.querySelector("#log")

// PLayer clicks start game button and prompted to type in choice
playButton.addEventListener("click", () => {
    let playerChoice = prompt("Type in Rock, Paper, or Scissors");
    // if cancel or no input, then player will get "Try Again" error
    if (playerChoice === null || playerChoice === "") {
        log.innerText = "ERROR! Try Again!";
    }
    // Else continue playChoice
        else {
            // let player type in choice of Rock Paper or Scissors.
            let choice = playerChoice.toLowerCase();
            // if typed Rock Paper, or Scissors, Log will keep track of playChoice
            // anything else will make an ERROR message
            if (choice === "rock") {
                log.innerText = "You have chosen ROCK!";
            }
            else if (choice === "paper") {
                log.innerText = "You have chosen PAPER!";
            }
            else if (choice === "scissors") {
                log.innerText = "You have chosen SCISSORS!"
            }
            else { 
                log.innerText = "ERROR! Invalid Choice! Please try again!";
            }
            console.log(choice)
        }
})
        



// Player clicks either Rock Paper or Scissors button
function getPlayerChoice() {
    
}
// Game will check what CPU and Player has chosen
// Game end with whoever chooses the dominate choice
