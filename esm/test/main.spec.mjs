import { getValue } from "../src/main.mjs";

test("from setup", () => {
  expect(globalThis.directFromSetup).toBe("ok");
});
test("from package", () => {
  expect(getValue()).toBe("ok");
});
