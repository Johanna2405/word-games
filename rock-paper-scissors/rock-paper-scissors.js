// Get User Input & options
const args = process.argv.slice(2);
const userInput = args[0].toLowerCase();
const options = ["rock", "scissors", "paper"];

// Random computer choice
const computerChoice = options[Math.floor(Math.random() * options.length)];

// check if the user provided exactly one element
if (args.length !== 1) {
  console.error("Please provide exactly one option: Rock, Paper or Scissors.");
  return;
}

// check if user input is valid option
if (!options.includes(userInput)) {
  console.log("Please choose between: Rock | Paper | Scissors");
}

// results
const win = `Your choice: ${userInput} | Computer's choice: ${computerChoice} | Result: You win!`;
const draw = `Your choice: ${userInput} | Computer's choice: ${computerChoice} | Result: It's a draw. Try again!`;
const loose = `Your choice: ${userInput} | Computer's choice: ${computerChoice} | Result: You loose. Try again!`;

if (userInput === "rock") {
  switch (computerChoice) {
    case "rock":
      console.log(draw);
      return;
    case "scissors":
      console.log(win);
      return;
    case "paper":
      console.log(loose);
      return;
  }
} else if (userInput === "scissors") {
  switch (computerChoice) {
    case "rock":
      console.log(loose);
      return;
    case "scissors":
      console.log(draw);
      return;
    case "paper":
      console.log(win);
      return;
  }
} else if (userInput === "paper") {
  switch (computerChoice) {
    case "rock":
      console.log(win);
      return;
    case "scissors":
      console.log(loose);
      return;
    case "paper":
      console.log(draw);
      return;
  }
}
