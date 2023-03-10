import {describe, expect, test} from "@jest/globals";
import findMissingNumberWithAverageHalf from "./find.js";

const generateSequence = (count, [first, second]) => {
  const array = [];
  for (let number = 1; number <= count; number++) {
    if (number !== first && number !== second) {
      array.push(number);
    }
  }
  return array;
};

const generateRange = (count) => {
  const array = [];
  for (let number = 1; number <= count; number++) {
    array.push(number);
  }
  return array;
};

describe('Find missing number in sequence of numbers', () => {
  test("Check find with simple sequence 1...10", () => {
      const sequence = [1,2,3,6,7,8,9,10];
      const numbers = findMissingNumberWithAverageHalf(sequence);
      expect(numbers).toEqual([4, 5]);
  });
  test("Check find with numbers sequence 1...10", () => {
    const sequence = [1,3,4,5,6,8,9,10];
    const numbers = findMissingNumberWithAverageHalf(sequence);
    expect(numbers).toEqual([2, 7]);
  });

  test("Check find with numbers sequence 1...10000", () => {
    const sequence = generateSequence(10000, [34, 867]);
    const numbers = findMissingNumberWithAverageHalf(sequence);
    expect(numbers).toEqual([34, 867]);
  });
  test("Check find with numbers sequence 1...1e7", () => {
    const sequence = generateSequence(10000000, [1234, 54321]);
    const numbers = findMissingNumberWithAverageHalf(sequence);
    expect(numbers).toEqual([1234, 54321]);
  });
  test("Check test fails when sequence 1...10000 does not have two missing numbers", () => {
    const sequence = generateRange(10000);
    expect(() => findMissingNumberWithAverageHalf(sequence)).toThrow('The sequence array does not have two missing numbers');
  });
});
