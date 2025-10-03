const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a TIE!";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent = `You chose: ${playerChoice}`;
    computerDisplay.textContent = `Computer chose: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "blueText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            break;
        case "It's a TIE!":
            resultDisplay.classList.add("blueText");
            break;
    }
}