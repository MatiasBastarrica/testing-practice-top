import { describe, expect, test } from "@jest/globals";
import { reverseString } from "./reverseString.js";

test("Reverse a string", () => {
  const testCases = [
    {
      string: "12345",
      expected: "54321",
    },
    {
      string: "abcdef",
      expected: "fedcba",
    },
  ];

  testCases.forEach((test) => {
    expect(reverseString(test.string)).toBe(test.expected);
  });
});
