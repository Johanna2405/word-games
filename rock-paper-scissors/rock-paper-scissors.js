// Requirements:
// The program should take the player’s move as an input from process.argv.
// The program should randomly generate a move for the computer.
// Determine the winner based on the rules of Rock Paper Scissors.
// Output the result (win, lose, or draw) to the console.
// Example:
// node rockPaperScissors.js rock
// # Output: You chose rock. Computer chose scissors. You win!

// 1. Get User Input

const args = process.argv.slice(2);

// check if the user provided exactly one element
if (args.length !== 1) {
  console.error("Please provide exactly one option: rock, paper or scissors");
  return;
}

// create var from input
const userInput = args[0];

// check if user input is valid option -> later: check case sensitivity !
if (userInput != ("rock" || "paper" || "scissors")) {
  console.log("Please provide exactly one option: rock, paper or scissors");
}

// 2. var for game elements
// const rock = "rock";
// const scissors = "scissors";
// const paper = "paper";

const options = ["rock", "scissors", "paper"];

// results: -1 = lost 0 = draw 1 = win
// const loose = -1;
// const draw = 0;
// const win = 1;

// comupter choice - function?

const computerChoice = options[Math.floor(Math.random() * options.length)];

// switch test

// switch (true) {
//   case "rock":
//     return 1;
//   case "scissors":
//     return 2;
//   case "paper":
//     return 3;
// }

// first attempt

if (userInput === "rock" && computerChoice === "rock") {
  console.log(
    "Computer's choice: ",
    computerChoice,
    "Result: It is a draw. Try again!"
  );
} else if (userInput === "rock" && computerChoice === "scissors") {
  console.log("Computer's choice: ", computerChoice, "Result: You win!");
} else if (userInput === "rock" && computerChoice === "paper") {
  console.log(
    "Computer's choice: ",
    computerChoice,
    "Result: You loose. Try again!"
  );
} else if (userInput === "scissors" && computerChoice === "rock") {
  console.log(
    "Computer's choice: ",
    computerChoice,
    "Result: You loose. Try again!"
  );
} else if (userInput === "scissors" && computerChoice === "scissors") {
  console.log(
    "Computer's choice: ",
    computerChoice,
    "Result: It is a draw. Try again!"
  );
} else if (userInput === "scissors" && computerChoice === "paper") {
  console.log("Computer's choice: ", computerChoice, "Result: You win!");
} else if (userInput === "paper" && computerChoice === "rock") {
  console.log("Computer's choice: ", computerChoice, "Result: You win!");
} else if (userInput === "paper" && computerChoice === "scissors") {
  console.log(
    "Computer's choice: ",
    computerChoice,
    "Result: You loose. Try again!"
  );
} else if (userInput === "paper" && computerChoice === "paper") {
  console.log(
    "Computer's choice: ",
    computerChoice,
    "Result: It is a draw. Try again!"
  );
}
