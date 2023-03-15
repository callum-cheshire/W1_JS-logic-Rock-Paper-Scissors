// Rock, Paper, Scissors!

// Task 1: Logic ✅
// PLAN:
// Create two variable for inputs, counts and gamesPlayed. ✅
// Create array for [rps[0], paper, scissors]. ✅
// Create if statements for each outcome. ✅

const outcome = ['You win!','The computer wins!','It\'s a draw!'];
const rps = [`rock`, `paper`, `scissors`];

let playerMove = rps[0];
let computerMove = rps[Math.floor(Math.random()*rps.length)];

function randomise(input) {
    computerMove = rps[Math.floor(Math.random()*rps.length)]
}

let playerCount = 0;
let computerCount = 0;
let gamesPlayed = 0;
let winner = outcome[0];
let playAgain = true; 
const results = {
wins: 0,
losses: 0,
draw: 0,
};
let userName = `Jon`;
let tryNameAgain = true;

function firstIsUppercase(userName) {
    if (typeof userName !== 'string' || userName.length === 0) {
      return false;
    }
  
    if (userName[0].toUpperCase() === userName[0]) {
      return true;
    }
  
    return false;
  }


// TASK 2 Function ✅
// PLAN 
// Create a function that takes into the score valuable as parameters ✅
// Function should return appropriate score ✅

function getWinner(playerMove, computerMove) {

if (gamesPlayed < 1) {
    userName = prompt(`Enter your username: (must be 10 characters or less and 
                        start with a capital letter)`);
    
    if (firstIsUppercase(userName) === false || userName.length > 10) {
        tryNameAgain = confirm("Incorrect input, try again?");
        console.log(userName,userName.length);
        if (tryNameAgain === true) {
            getWinner();
        }
    }
}

// Create a function to check first letter of userName is upper case ✅
// Place function outside of game ✅
// Call function after user input - TEST ✅
// if true - continue - TEST ✅
// if false - try again - TEST ✅

playerMove = prompt("Type: \'rock\', \'paper\' or \'scissors\' (lowercase)");

// let playerInput = false;
// if (playerMove != "rock" || playerMove != "paper" || playerMove != "scissors") {
//     confirm("Incorrect input, try again?");
//     if (playerInput === true) {
//     }
// }

randomise(computerMove);

if (playerMove === rps[0] && computerMove === rps[2]) {
    playerCount++;
    computerCount--;
    gamesPlayed++;
    winner = outcome[0];
    results.wins++;
    alert(winner = outcome[0]);
}
if (playerMove === rps[0] && computerMove === rps[1]) {
    computerCount++;
    playerCount--;
    gamesPlayed++;
    winner = outcome[1];
    results.losses++;
    alert(winner);
}
if (playerMove === rps[0] && computerMove === rps[0]) {
    gamesPlayed++;
    winner = outcome[2];
    results.draw++;
    alert(winner);
}
if (playerMove === rps[2] && computerMove === rps[2]) {
    gamesPlayed++;
    winner = outcome[2];
    results.draw++;
    alert(winner);
}
if (playerMove === rps[2] && computerMove === rps[1]) {
    playerCount++;
    computerCount--;
    gamesPlayed++;
    winner = outcome[0];
    results.wins++;
    alert(winner);
}
if (playerMove === rps[2] && computerMove === "rps[0]") {
    computerCount++;
    playerCount--;
    gamesPlayed++;
    winner = outcome[1];
    results.losses++;
    alert(winner);
}
if (playerMove === rps[1] && computerMove === rps[2]) {
    computerCount++;
    playerCount--;
    gamesPlayed++;
    winner = outcome[1];
    results.losses++;
    alert(winner);

}if (playerMove === rps[1] && computerMove === "paper") {
    gamesPlayed++;
    winner = outcome[2];
    results.draw++;
    alert(winner);
}
if (playerMove === rps[1] && computerMove === rps[0]) {
    playerCount++;
    computerCount--;
    gamesPlayed++;
    winner = outcome[0];
    results.wins++;
    alert(winner);
} 
return winner;
} 

// TASK 3 - User Input ✅
// PLAN: 
// Create a prompt which changes playerMove to a user-inputted value Loop ✅
// Display the result of each game with an alert ✅


while (playAgain === true){ 
let result = getWinner(playerMove, computerMove); 
playAgain = confirm(`Well played, ` + userName + `!` + 
`\nGames played: ` + gamesPlayed + 
`\nWins: ` + results.wins +
`\nLosses: ` + results.losses +
`\nDraws: ` + results.draw +
`\nDo you want to play again?`); 
} 


// Task 4 - Computer Player ✅
//PLAN:
// Create 'random' function ✅
// Implement function within main function ✅

// Task 5 - Game Loop✅
// PLAN:
// when game is finished, offer player to 'play again' ✅
// Have while loop act acccording to player choice ✅

// Task 6 - Scores ✅
// PLAN:
// Creat object to track scores ✅
// Amend if statements to adjust scores over set of games ✅
// Output results to player after each game ✅

// Task 7 - Get the player's name using a prompt
// Create prompt which amends variable userName Loop✅
// In prompt tell user what is allowed and not ✅
// Check if user input is less than 10 characters, TEST ✅
// ^ use an if statement to determine, TEST ✅
// ^ Have the if statement allow the user to retry, or quit, TEST ✅
// Part2
// Check if first letter of userInput is a capital letter ✅

