let humanScore = 0;
let computerScore = 0;

// Get your DOM elements
const userInput = document.querySelector("#userInput"); // optional, shows user choice
const button1 = document.getElementById("paper");
const button2 = document.getElementById("rock");
const button3 = document.getElementById("scissors");

// Create a div to display results
const resultsDiv = document.createElement("div");
resultsDiv.textContent = "Results will appear here!";
resultsDiv.style.padding = "10px";
resultsDiv.style.border = "1px solid black";
resultsDiv.style.width = "200px";
const container = document.querySelector("#container");
container.appendChild(resultsDiv);

// Add button listeners
button1.addEventListener("click", () => handleClick("paper"));
button2.addEventListener("click", () => handleClick("rock"));
button3.addEventListener("click", () => handleClick("scissors"));

// Handle a single click / round
function handleClick(choice) {
    userInput.textContent = choice;           // show what user picked
    const computerChoice = getComputerChoice();
    const resultText = playRound(choice, computerChoice); // returns text result
    resultsDiv.textContent = `You chose ${choice}. Computer chose ${computerChoice}. ${resultText}\nScore: You ${humanScore} - Computer ${computerScore}`;
    
    clearAfterDelay();
}

// Generate computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Play one round and update scores
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You Win!";
    } else {
        computerScore++;
        return "Computer Wins!";
    }
}

// Optional: clear user input and results after 1.5 seconds
