let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    let number = Math.random() * 3
    if (number < 1) {
        return "Rock"
    } else if (number < 2){
        return("Paper")
    } else {
        return("Scissors")
    }
}

function getHumanChoice(){
    let choice = (prompt("Insert rock, paper or scissors!")).toLowerCase()
    if(choice === "rock"){
        return "Rock"
    } else if (choice === "paper"){
        return "Paper"
    } else {
        return "Scissors"
    }
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === "Rock"){
        if (computerChoice === "Scissors"){
            console.log("You win! Rock beats Scissors!")
            humanScore += 1
        } else if (computerChoice === "Paper"){
            console.log("You lose! Paper beats Rock!")
            computerScore += 1
        } else {
            console.log("It's a tie!")
        }
    } else if (humanChoice === "Paper"){
        if(computerChoice === "Rock"){
            console.log("You win! Paper beats Rock!")
            humanScore += 1
        } else if (computerChoice === "Scissors"){
            console.log("You lose! Scissors beats Paper!")
            computerScore += 1
        } else {
            console.log("It's a tie!")
        }
    } else {
        if (computerChoice === "Paper"){
            console.log("You win! Scissors beats Paper!")
            humanScore += 1
        } else if (computerChoice === "Rock"){
            console.log("You lose! Rock beats scissors!")
            computerScore += 1
        } else {
            console.log("It's a tie!")
        }
    }
}