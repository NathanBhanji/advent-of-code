//rock paper scissors
//total number of wins based on input

import { input } from "./input";

const player1 = ["A", "B", "C"];
const player2 = ["X", "Y", "Z"];

function part1(input: string, player1: string[], player2: string[]): number {
  const inputs = input.split("\n");
  let score = 0;
  for (const i of inputs) {
    const [p1, p2] = i.split(" ");
    const p1Index = player1.indexOf(p1);
    const p2Index = player2.indexOf(p2);

    score += p2Index + 1;
    if (p1Index === p2Index) {
      score += 3;
    } else if (p2Index === 0 && p1Index === 2) {
      score += 6;
    } else if (p2Index === 1 && p1Index === 0) {
      score += 6;
    } else if (p2Index === 2 && p1Index === 1) {
      score += 6;
    }
  }
  return score;
}

function getLosingIndex(opponentIndex: number): number {
  switch (opponentIndex) {
    case 0:
      return 2;
    case 1:
      return 0;
    case 2:
      return 1;
    default:
      throw new Error("Invalid input");
  }
}

function getWinningIndex(opponentIndex: number): number {
  switch (opponentIndex) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 0;
    default:
      throw new Error("Invalid input");
  }
}

function part2(input: string, player1: string[], player2: string[]): number {
  const inputs = input.split("\n");
  let score = 0;
  for (const i of inputs) {
    const [p1, p2] = i.split(" ");
    const p1Index = player1.indexOf(p1);
    const p2Index = player2.indexOf(p2);

    switch (p2Index) {
      case 0:
        score += getLosingIndex(p1Index) + 1;
        break;
      case 1:
        score += p1Index + 1 + 3;
        break;
      case 2:
        score += getWinningIndex(p1Index) + 1 + 6;
        break;
    }
  }
  return score;
}

console.log(part1(input, player1, player2));
console.log(part2(input, player1, player2));
