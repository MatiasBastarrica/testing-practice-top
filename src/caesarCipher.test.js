import { describe, expect, test } from "@jest/globals";
import { caesarCipher } from "./caesarCipher.js";

test("Caesar cipher a bunch of stirngs", () => {
  const testCases = [
    {
      string: "aBc",
      shift: 3,
      expect: "dEf",
    },
    {
      string: "xyz",
      shift: 3,
      expect: "abc",
    },
    {
      string: "wxy",
      shift: 3,
      expect: "zab",
    },
    {
      string: "abcde",
      shift: 1,
      expect: "bcdef",
    },
    {
      string: "Hello, World! 24",
      shift: 3,
      expect: "Khoor, Zruog! 24",
    },
  ];

  testCases.forEach((testCase) => {
    expect(caesarCipher(testCase.string, testCase.shift)).toBe(testCase.expect);
  });
});
