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

if (userInput === options[0]) {
  switch (computerChoice) {
    case options[0]:
      console.log(draw);
      return;
    case options[1]:
      console.log(win);
      return;
    case options[2]:
      console.log(loose);
      return;
  }
} else if (userInput === options[1]) {
  switch (computerChoice) {
    case options[0]:
      console.log(loose);
      return;
    case options[1]:
      console.log(draw);
      return;
    case options[2]:
      console.log(win);
      return;
  }
} else if (userInput === options[2]) {
  switch (computerChoice) {
    case options[0]:
      console.log(win);
      return;
    case options[1]:
      console.log(loose);
      return;
    case options[2]:
      console.log(draw);
      return;
  }
}
