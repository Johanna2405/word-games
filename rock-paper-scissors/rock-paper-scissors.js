// Requirements:
// The program should take the player’s move as an input from process.argv.
// The program should randomly generate a move for the computer.
// Determine the winner based on the rules of Rock Paper Scissors.
// Output the result (win, lose, or draw) to the console.
// Example:
// node rockPaperScissors.js rock
// # Output: You chose rock. Computer chose scissors. You win!

// Get User Input & options

const args = process.argv.slice(2);
const userInput = args[0];
const options = ["rock", "scissors", "paper"];

// Random computer choice

const computerChoice = options[Math.floor(Math.random() * options.length)];

// check if the user provided exactly one element
if (args.length !== 1) {
  console.error("Please provide exactly one option: rock, paper or scissors.");
  return;
}

// check if user input is valid option -> later: check case sensitivity !

if (!options.includes(userInput)) {
  console.log("Please choose between: rock | paper | scissors");
}

if (userInput === "rock") {
  switch (computerChoice) {
    case "rock":
      console.log(
        "Computer's choice: ",
        computerChoice,
        "Result: It is a draw. Try again!"
      );
      return;
    case "scissors":
      console.log("Computer's choice: ", computerChoice, "Result: You win!");
      return;
    case "paper":
      console.log(
        "Computer's choice: ",
        computerChoice,
        "Result: You loose. Try again!"
      );
      return;
  }
} else if (userInput === "scissors") {
  switch (computerChoice) {
    case "rock":
      console.log(
        "Computer's choice: ",
        computerChoice,
        "Result: You loose. Try again!"
      );
      return;
    case "scissors":
      console.log(
        "Computer's choice: ",
        computerChoice,
        "Result: It is a draw. Try again!"
      );
      return;
    case "paper":
      console.log("Computer's choice: ", computerChoice, "Result: You win!");
      return;
  }
} else if (userInput === "paper") {
  switch (computerChoice) {
    case "rock":
      console.log("Computer's choice: ", computerChoice, "Result: You win!");
      return;
    case "scissors":
      console.log(
        "Computer's choice: ",
        computerChoice,
        "Result: You loose. Try again!"
      );
      return;
    case "paper":
      console.log(
        "Computer's choice: ",
        computerChoice,
        "Result: It is a draw. Try again!"
      );
      return;
  }
}
