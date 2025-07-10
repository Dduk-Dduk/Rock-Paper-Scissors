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
            
        } else if (computerChoice === "Paper"){

        } else {

        }
    } else if (humanChoice === "Paper"){
        if(computerChoice === "Rock"){
            
        } else if (computerChoice === "Scissors"){

        } else {

        }
    } else {

    }
}