// ret User Input & options
const args = process.argv.slice(2);
const userInput = args[0].toLowerCase();
const options = ["rock", "scissors", "paper"];

// random computer choice
const computerChoice = options[Math.floor(Math.random() * options.length)];

// check if the user provided exactly one argument
if (args.length !== 1) {
  console.error("Please provide exactly one option: Rock, Paper or Scissors.");
  return;
}

// check if user input is valid option
if (!options.includes(userInput)) {
  console.log("Please choose between: Rock | Paper | Scissors");
}

// results
const result = `Your choice: ${userInput} | Computer's choice: ${computerChoice} | `;
const win = `Result: You win!`;
const draw = `Result: It's a draw. Try again!`;
const loose = `Result: You loose. Try again!`;

if (userInput === options[0]) {
  switch (computerChoice) {
    case options[0]:
      console.log(result, draw);
      return;
    case options[1]:
      console.log(result, win);
      return;
    case options[2]:
      console.log(result, loose);
      return;
  }
} else if (userInput === options[1]) {
  switch (computerChoice) {
    case options[0]:
      console.log(result, loose);
      return;
    case options[1]:
      console.log(result, draw);
      return;
    case options[2]:
      console.log(result, win);
      return;
  }
} else if (userInput === options[2]) {
  switch (computerChoice) {
    case options[0]:
      console.log(result, win);
      return;
    case options[1]:
      console.log(result, loose);
      return;
    case options[2]:
      console.log(result, draw);
      return;
  }
}
