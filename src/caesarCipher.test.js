import { describe, expect, test } from "@jest/globals";
import { caesarCipher } from "./caesarCipher.js";

test("Caesar cipher a bunch of stirngs", () => {
  const testCases = [
    {
      string: "abc",
      shift: 3,
      expect: "def",
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
  ];

  testCases.forEach((testCase) => {
    expect(caesarCipher(testCase.string, testCase.shift)).toBe(testCase.expect);
  });
});
