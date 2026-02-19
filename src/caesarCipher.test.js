import { describe, expect, test } from "@jest/globals";
import { caesarCipher } from "./caesarCipher.js";

test("Caesar cipher 'abc' with shift 3", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});
