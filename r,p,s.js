function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors']
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

let playerChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase()
let playerSelection = playerChoice;
let computerSelection = computerPlay().toLowerCase();


function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie game!`
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You Lose, ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You Lose, ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You Win, ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You Lose, ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You Win, ${playerSelection} beats ${computerSelection}`
    }
}

console.log(playGame(playerSelection, computerSelection))