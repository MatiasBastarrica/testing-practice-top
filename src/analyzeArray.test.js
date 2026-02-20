import { describe, expect, test } from "@jest/globals";
import { analyzeArray } from "./analyzeArray.js";

test("Analazye [1,8,3,4,2,6]", () => {
  // expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe({
  //   average: 4,
  //   min: 1,
  //   max: 8,
  //   length: 6,
  // });

  const arr = [1, 8, 3, 4, 2, 6];

  const actual = analyzeArray(arr);

  const expected = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  expect(actual.average).toBe(expected.average);
  expect(actual.min).toBe(expected.min);
  expect(actual.max).toBe(expected.max);
  expect(actual.length).toBe(expected.length);
});
