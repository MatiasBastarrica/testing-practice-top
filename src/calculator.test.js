import { describe, expect, test } from "@jest/globals";
import { calculator } from "./calculator.js";

test("Use the calculator", () => {
  const testCases = [
    {
      num1: 4,
      num2: 2,
      expected: {
        add: 6,
        subtract: 2,
        multiply: 8,
        divide: 2,
      },
    },
    {
      num1: 15,
      num2: 3,
      expected: {
        add: 18,
        subtract: 12,
        multiply: 45,
        divide: 5,
      },
    },
  ];

  const operations = ["add", "subtract", "multiply", "divide"];

  testCases.forEach((testCase) => {
    operations.forEach((operation) => {
      expect(calculator[operation](testCase.num1, testCase.num2)).toBe(
        testCase.expected[operation],
      );
    });
  });
});
