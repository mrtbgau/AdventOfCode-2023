import fs from "node:fs";

const content = fs.readFileSync("values.txt");
console.log(content);
