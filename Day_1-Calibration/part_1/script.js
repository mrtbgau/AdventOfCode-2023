import fs from "node:fs";

const content = fs.readFileSync("values.txt", { encoding: "utf8" });

const lines = content.split("\n");

let sum = 0;

lines.forEach((line) => {
  let numbersInLine = [];

  for (const char of line) {
    if (!isNaN(char)) {
      numbersInLine.push(char.toString());
    }
  }

  const cleanedNumbersInLine = numbersInLine.filter(
    (value) => !isNaN(parseInt(value))
  );

  if (cleanedNumbersInLine.length === 1) {
    sum += parseInt(cleanedNumbersInLine[0] + cleanedNumbersInLine[0]);
  } else if (cleanedNumbersInLine.length > 1) {
    sum += parseInt(
      cleanedNumbersInLine[0] +
        cleanedNumbersInLine[cleanedNumbersInLine.length - 1]
    );
  }
});

console.log("Sum:", sum);
