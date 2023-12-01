import { input, testInput, testInput2 } from "./input";
import { sum, map, keys, values } from "lodash";
import assert from "assert";

function getNumber(line: string) {
  const numbers = line.match(/\d/g) as RegExpMatchArray;
  return Number(`${numbers.at(0)}${numbers.at(-1)}`);
}

function part1(input: string[]) {
  return sum(map(input, getNumber));
}

type WordToNumber = {
  [key: string]: number;
};

const wordToNumber: WordToNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};

function mappedWord (word: string) {
    return wordToNumber[word] || word
}


function getShittyNumber(line: string) {
    const beginRegex = line.match(`(${keys(wordToNumber).join('|')}|${values(wordToNumber).join('|')})`) as RegExpMatchArray;
    const endRegex = line.match(`.*(${keys(wordToNumber).join('|')}|${values(wordToNumber).join('|')})`) as RegExpMatchArray;
    return Number(`${mappedWord(beginRegex[1])}${mappedWord(endRegex[1])}`)
}

function part2(input: string[]) {
    return sum(map(input, getShittyNumber));
}

assert.equal(part1(testInput.split("\n")), 142);
assert.equal(part2(testInput2.split("\n")), 281);

console.log(part1(input.split("\n")));
console.log(part2(input.split("\n")));

// eat shit branch protection
