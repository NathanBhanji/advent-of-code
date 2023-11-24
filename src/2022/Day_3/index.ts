import assert from "assert";
import { testInput } from "./testInput";
import { input } from "./input";

function part1(input: string): number {
  const inputs = input.split("\n");

  let total = 0;
  for (const compartments of inputs) {
    const halfLength = Math.floor(compartments.length / 2);
    const part1 = compartments.slice(0, halfLength);
    const part2 = compartments.slice(halfLength);

    for (let i = 0; i < part1.length; i++) {
      if (part2.includes(part1[i])) {
        const letter = part1[i];
        if (letter === letter.toUpperCase()) {
          total += letter.charCodeAt(0) - 38;
        } else {
          total += letter.charCodeAt(0) - 96;
        }
        break;
      }
    }
  }

  return total;
}

function part2(input: string): number {
  const inputs = input.split("\n");

  let total = 0;
  for (let i = 0; i < inputs.length - 2; i += 3) {
    const row1 = inputs[i];
    const row2 = inputs[i + 1];
    const row3 = inputs[i + 2];

    for (let j = 0; j < row1.length; j++) {
      const letter = row1[j];
      const inRow2 = row2.includes(letter);
      const inRow3 = row3.includes(letter);

      if (inRow2 && inRow3) {
        if (letter === letter.toUpperCase()) {
          total += letter.charCodeAt(0) - 38;
        } else {
          total += letter.charCodeAt(0) - 96;
        }
        break;
      }
    }
  }
  return total;
}

assert.equal(part1(testInput), 157);
assert.equal(part2(testInput), 70);

console.log(part1(input));
console.log(part2(input));
