import { describe, expect, test } from "@jest/globals";
import { calculator } from "./calculator.js";

test("Sum 4+2", () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test("Subtract 4-2", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("Multiply 4*2", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test("Divide 4/2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("Sum 15+3", () => {
  expect(calculator.add(15, 3)).toBe(18);
});

test("Subtract 15-3", () => {
  expect(calculator.subtract(15, 3)).toBe(12);
});

test("Multiply 15*3", () => {
  expect(calculator.multiply(15, 3)).toBe(45);
});

test("Divide 15/3", () => {
  expect(calculator.divide(15, 3)).toBe(5);
});
