import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.split(/\s+/).map(Number));

const leftList = input.map(([left]) => left);
const rightList = input.map(([, right]) => right);

const similarityScore = leftList.reduce((sum, num) => {
  const occurrences = rightList.filter((x) => x === num).length;
  return sum + num * occurrences;
}, 0);

console.log(`Part 2 Answer: ${similarityScore}`);
