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


function playGame(){
    let humanScore = 0
    let computerScore = 0
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
    playRound() 
}

playGame()

// Create three buttons for rock, paper and scissors
const buttonRock = document.createElement("button")
const buttonPaper = document.createElement("Paper")
const buttonScissors = document.createElement("Scissors")

buttonRock.addEventListener("click", playRound("Rock", getComputerChoice()))
buttonPaper.addEventListener("click", playRound("Paper", getComputerChoice()))
buttonScissors.addEventListener("click", playRound("Scissors", getComputerChoice()))