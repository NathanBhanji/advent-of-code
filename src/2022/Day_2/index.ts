//rock paper scissors
//total number of wins based on input

import { input } from "./input";

function calculateWins(input: string): number {
  const inputs = input.split("\n");
  const mappings =  new Map([['A','X'],['B','Y'],['C','Z']]);
  let score = 0;
  for (const i of inputs) {
    const [player1, player2] = i.split(" ");
    
    switch (player2) {
        case "X":
            score += 1;
            player1 === "C" ? (score += 6) : (score += 0);
            break;
        case "Y":
            score += 2;
            player1 === "A" ? (score += 6) : (score += 0);
            break;
        case "Z":
            score += 3;
            player1 === "B" ? (score += 6) : (score += 0);
            break;
    }
    if (mappings.has(player1)) {
        const mappedValue = mappings.get(player1);
        if (mappedValue === player2) {
            score += 3;
        }
    }
  }
  return score;
}

console.log(calculateWins(input));
