import assert from "assert";
import { testInput } from "./testInput";
import { input } from "./input";

function isSubset(subset: Set<number>, superset: Set<number>) {
  const subsetArray = Array.from(subset);
  return subsetArray.every((element) => superset.has(element));
}

function isOverlapping(set1: Set<number>, set2: Set<number>) {
  const set1Array = Array.from(set1);
  return set1Array.some((element) => set2.has(element));
}

function part1(input: string): number {
  let total = 0;
  const inputs = input.split("\n");
  for (const pair of inputs) {
    const [a, b] = pair.split(",");
    const [a1, a2] = a.split("-");
    const [b1, b2] = b.split("-");

    const aSet = new Set<number>();
    for (let i = parseInt(a1); i <= parseInt(a2); i++) {
      aSet.add(i);
    }

    const bSet = new Set<number>();
    for (let i = parseInt(b1); i <= parseInt(b2); i++) {
      bSet.add(i);
    }

    const largerSet = aSet.size >= bSet.size ? aSet : bSet;
    const smallerSet = aSet.size < bSet.size ? aSet : bSet;

    if (isSubset(smallerSet, largerSet)) {
      total++;
    }
  }

  return total;
}

function part2(input: string): number {
  let total = 0;
  const inputs = input.split("\n");
  for (const pair of inputs) {
    const [a, b] = pair.split(",");
    const [a1, a2] = a.split("-");
    const [b1, b2] = b.split("-");

    const aSet = new Set<number>();
    for (let i = parseInt(a1); i <= parseInt(a2); i++) {
      aSet.add(i);
    }

    const bSet = new Set<number>();
    for (let i = parseInt(b1); i <= parseInt(b2); i++) {
      bSet.add(i);
    }

    const largerSet = aSet.size >= bSet.size ? aSet : bSet;
    const smallerSet = aSet.size < bSet.size ? aSet : bSet;

    if (isOverlapping(smallerSet, largerSet)) {
      total++;
    }
  }

  return total;
}

assert.equal(part1(testInput), 2);
console.log(part1(input));

assert.equal(part2(testInput), 4);
console.log(part2(input));
