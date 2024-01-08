// https://github.com/dubzzz/fast-check/pull/4592
import { getValue } from "../src/main.mjs";

test("from setup", () => {
  expect(globalThis.directFromSetup).toBe("ok");
});
test("from package", () => {
  expect(getValue()).toBe("ok");
});
