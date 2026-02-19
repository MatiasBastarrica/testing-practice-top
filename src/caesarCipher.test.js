import { describe, expect, test } from "@jest/globals";
import { caesarCipher } from "./caesarCipher.js";

test("Caesar cipher 'abc' with shift 3", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("Caesar cipher 'xyz' with shift 3", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
