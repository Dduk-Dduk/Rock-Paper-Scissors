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
    let number = parseInt(prompt("0 for Rock, 1 for Paper, 2 for Scissors!"))
    if(number === 0){
        return "Rock"
    } else if (number === 1){
        return "Paper"
    } else {
        return "Scissors"
    }
}
