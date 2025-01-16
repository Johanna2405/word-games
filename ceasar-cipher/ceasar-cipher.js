// get input
const args = process.argv.slice(2, 3);
const inputPhrase = args[0].toLowerCase();
const inputNumber = args[1];
const abcArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// slice inputPhrase in single letters
// compare letters with abc Array somehow, like do a copy with blanks and get index OR: get letter index from abcArr (any?)
// calculate new index with inputNumber
// create output by concatinating string
