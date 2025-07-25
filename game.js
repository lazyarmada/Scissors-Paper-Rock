// The Rule: Rock beats Scissors beats paper beats Rock
// CPU will choose Rock Paper Scissors at random
function getComputerChoice() {
 let rps = ["rock", "paper", "scissors"] 
 let random = rps[Math.floor(Math.random() * rps.length)]
    return random
}

// Declare the Start Game button as the getHumanChoice
const playerButton = document.getElementById("human-input")
const scoreLog = document.getElementById("log")
// make a function to getHumanChoice and turn the button into a click prompt


function getHumanChoice() {
    return prompt("Type your choice! Rock, Paper, or Scissors!")
}

// game will keep score of both player and cpu
let humanScore = Number(document.getElementById("humanScore").innerText)
let cpuScore = Number(document.getElementById("cpuScore").innerText)
// Game will play round by round
// Round will use human and cpu choices as arguments

function playRound(humanSelection, cpuSelection) { 
    // humanSelection and cpuSelection is always different
    // if humanSelection is equal to cpuSelection, it's a tie
    if (humanSelection === cpuSelection) {
        // increment both scores
        humanScore++;
        cpuScore++;
        document.getElementById("humanScore").innerText = humanScore;
        document.getElementById("cpuScore").innerText = cpuScore;
        return (scoreLog.innerText = "This has ended in a TIE! Try Again!");
    }
    //increment winner's score and announces winner

    // if/else if for each time humanSelection beats cpuSelection, increment humanScore by 1
    else if (humanSelection === "rock" && cpuSelection === "scissors") {
        humanScore++;
        document.getElementById("humanScore").innerText = humanScore;
        return (scoreLog.innerText = "You WIN! Rock beats Scissors!");
    }
    else if (humanSelection === "paper" && cpuSelection === "rock") {
        humanScore++;
        document.getElementById("humanScore").innerText = humanScore;
        return (scoreLog.innerText = "You WIN! Paper beats Rock!");
    }
    else if (humanSelection === "scissors" && cpuSelection === "paper") {
        humanScore++;
        document.getElementById("humanScore").innerText = humanScore;
        return (scoreLog.innerText = "You WIN! Scissor beats Paper");
    }
    else if (humanSelection === "rock" && cpuSelection === "paper") { 
        cpuScore++;
        document.getElementById("cpuScore").innerText = cpuScore;
        return (scoreLog.innerText = "You LOSE! Paper beats Rock");
    }

    else if (humanSelection === "paper" && cpuSelection === "scissors") {
        cpuScore++;
        document.getElementById("cpuScore").innerText = cpuScore;
        return (scoreLog.innerText = "You LOSE! Scissors beats Paper");
    }
    else if (humanSelection === "scissors" && cpuSelection === "rock") {
        cpuScore++;
        document.getElementById("cpuScore").innerText = cpuScore;
        return (scoreLog.innerText = "You LOSE! Rock beats Scissors")
    }
    
}

let humanSelection = getHumanChoice();
let cpuSelection = getComputerChoice();
console.log(cpuSelection)
console.log(playRound(humanSelection, cpuSelection));
// playGame will be 5 rounds
// whichever score is higher after 5 rounds is the declared winner, Game end
