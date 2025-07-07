function getComputerChoice() {
    let number = Math.random() * 3
    if (number < 1) {
        console.log("Rock")
    } else if (number < 2){
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}
getComputerChoice()