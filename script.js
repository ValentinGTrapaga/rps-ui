let computerChoices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var compScore = 0;
let playerChoice;

function computerPlay () {
    let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result.toLowerCase();
  }

/* function eligeJugador() {
    playerChoice = prompt("Please choose: Rock, Paper, Scissors")
    playerChoice = playerChoice.toLowerCase()
    if(computerChoices.includes(playerChoice)) {
        return playerChoice
    }
    else {
        alert("Error, must choose only between Rock, Paper, Scissors. You lost this chance!")
    }
} */

const score = document.getElementById("score")
const round = document.getElementById("round")

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice.toLowerCase()) {
        round.innerText = `It's a draw`
        score.innerText = `Result is Player: ${playerScore}, Computer: ${compScore}`
    }
    if ((playerChoice == "rock" && computerChoice.toLowerCase() == "scissors") ||
    (playerChoice == "paper" && computerChoice.toLowerCase() == "rock")) {
        playerScore++
        round.innerText = `You win, ${playerChoice} beats ${computerChoice}`
        score.innerText = `Result is Player: ${playerScore}, Computer: ${compScore}`
    }
    if ((computerChoice.toLowerCase() == "rock" && playerChoice == "scissors") ||
    (computerChoice.toLowerCase() == "paper" && playerChoice == "rock")) {
        compScore++
        round.innerText = `You lose, ${computerChoice} beats ${playerChoice}`
        score.innerText = `Result is Player: ${playerScore}, Computer: ${compScore}`
    }
}

const btns = document.querySelectorAll('.boton')

for (i of btns) {
    i.addEventListener('click', (e) => {
        computerChoice = computerPlay()
        playerChoice = e.target.id
        playRound(playerChoice, computerChoice)
        if ((playerScore === 5) || (compScore === 5)) {
            btns.forEach((e) => e.className = "boton col btn btn-dark mx-2 disabled")
            score.innerText = `Game over! It was the first to score 5 points.
            Result is Player: ${playerScore}, Computer: ${compScore}`
            round.style.display = "none"
        }
    })
}



/* function game() {
    for (let i = 0; i < 5; i++) {
        computerChoice = computerPlay()
        playerChoice = eligeJugador()
        playRound(playerChoice, computerChoice)
        console.log(`El resultado es Jugador: ${playerScore}, Maquina: ${compScore}`)
     }
} */