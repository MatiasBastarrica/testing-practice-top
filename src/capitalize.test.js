import { describe, expect, test } from "@jest/globals";
import { capitalize } from "./capitalize.js";

test("Capitalize ciao", () => {
  expect(capitalize("ciao")).toBe("Ciao");
});

test("Capitalize hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Capitalize Yeah", () => {
  expect(capitalize("Yeah")).toBe("Yeah");
});

test("Capitalize a string", () => {
  const testCases = [
    {
      string: "hello",
      expected: "Hello",
    },
    {
      string: "ciao",
      expected: "Ciao",
    },
    {
      string: "yeah",
      expected: "Yeah",
    },
    {
      string: "adios",
      expected: "Adios",
    },
  ];

  testCases.forEach((testCase) => {
    expect(capitalize(testCase.string)).toBe(testCase.expected);
  });
});
