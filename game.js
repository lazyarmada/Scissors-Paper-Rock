// The Rule: Rock beats Scissors beats paper beats Rock
// CPU will choose Rock Paper Scissors at random
function getComputerChoice() {
// CPU chooses a number is chosen between 0 and 1
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
// Player clicks either Rock Paper or Scissors button
function getPlayerChoice {
    
}
// Game will check what CPU and Player has chosen
// Game end with whoever chooses the dominate choice

