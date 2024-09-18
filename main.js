const choices = ["rock","paper","scissors"];
const winners = [];

// function game() {
//  for (let i = 1; i <= 5; i++)
//    {
//   playRound(i);
//  }
//  logWins();
// }

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
    const computerSelection = computerChoice()
    let playerSelection = "rock"
    playRound("rock",computerSelection)
});

paperButton.addEventListener("click", () => {
    const computerSelection = computerChoice()
    let playerSelection = "paper"
    playRound("paper",computerSelection)
});

scissorsButton.addEventListener("click", () => {
    const computerSelection = computerChoice()
    let playerSelection = "scissors"
    playRound("scissors",computerSelection)
});

function playRound(playerSelection,computerSelection) {
    let winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner)
};
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if (
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "paper" && choiceC === "rock") || 
        (choiceP === "scissors" && choiceC === "paper")
        ) {
    return "Player";
    } else {
        return "Computer"
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
};

function logRound(playerSelection, computerChoice, winner) {
    console.log("Player Choice:", playerSelection)
    console.log("Computer Choise:", computerChoice)
    console.log(winner,"Wins The Round!")
    console.log("-------------------------------")
};

const outcomeDiv = document.querySelector("#outcome"); 

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    outcomeDiv.textContent = winners, "Wins The Round!";
  });
});