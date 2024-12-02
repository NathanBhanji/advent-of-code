import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.split(/\s+/).map(Number));

const leftList = input.map(([left]) => left).sort((a, b) => a - b);
const rightList = input.map(([, right]) => right).sort((a, b) => a - b);

const totalDistance = leftList.reduce(
  (sum, num, i) => sum + Math.abs(num - rightList[i]),
  0
);

console.log(`Part 1 Answer: ${totalDistance}`);
