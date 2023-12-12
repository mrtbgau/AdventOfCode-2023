import fs from "node:fs";

const digitWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const getTwoDigitNumber = (inputString) => {
  let leftDigit, rightDigit;
  let i = 0;
  let len = inputString.length;

  do {
    if (!Number(leftDigit)) {
      if (Number(inputString[i])) {
        leftDigit = Number(inputString[i]);
      } else {
        for (const digit of digitWords) {
          if (inputString.substring(i).startsWith(digit)) {
            leftDigit = digitWords.indexOf(digit);
          }
        }
      }
    }

    if (!Number(rightDigit)) {
      if (Number(inputString[len - i])) {
        rightDigit = Number(inputString[len - i]);
      } else {
        for (const digit of digitWords) {
          if (inputString.substring(len - i).startsWith(digit)) {
            rightDigit = digitWords.indexOf(digit);
          }
        }
      }
    }
  } while (i++ < len);

  return (leftDigit || 0) * 10 + (rightDigit || 0);
};

fs.readFile("values.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const inputLines = data.split("\n").filter((line) => line.trim() !== "");

  const sum = inputLines.reduce((acc, line) => {
    return acc + getTwoDigitNumber(line);
  }, 0);

  console.log("Sum:", sum);
});
