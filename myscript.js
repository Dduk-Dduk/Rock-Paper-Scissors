const results = document.querySelector("#results")

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
                results.textContent = "You win! Rock beats Scissors!"
                humanScore += 1
            } else if (computerChoice === "Paper"){
                results.textContent = "You lose! Paper beats Rock!"
                computerScore += 1
            } else {
                results.textContent = "It's a tie!"
            }
        } else if (humanChoice === "Paper"){
            if(computerChoice === "Rock"){
                results.textContent = "You win! Paper beats Rock!"
                humanScore += 1
            } else if (computerChoice === "Scissors"){
                results.textContent = "You lose! Scissors beats Paper!"
                computerScore += 1
            } else {
                results.textContent ="It's a tie!"
            }
        } else {
            if (computerChoice === "Paper"){
                results.textContent = "You win! Scissors beats Paper!"
                humanScore += 1
            } else if (computerChoice === "Rock"){
                results.textContent = "You lose! Rock beats scissors!"
                computerScore += 1
            } else {
                results.textContent = "It's a tie!"
            }
        }
    }   
    playRound() 
}

playGame()
const buttonRock = document.querySelector("#rock")
const buttonPaper = document.querySelector("#paper")
const buttonScissors = document.querySelector("#scissors")

buttonRock.addEventListener("click", () => {playRound("Rock", getComputerChoice())})
buttonPaper.addEventListener("click", () => {playRound("Paper", getComputerChoice())})
buttonScissors.addEventListener("click", () => {playRound("Scissors", getComputerChoice())})