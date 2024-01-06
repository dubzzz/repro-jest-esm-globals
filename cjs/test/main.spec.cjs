const { getValue } = require("../src/main.cjs");

test("from setup", () => {
  expect(globalThis.directFromSetup).toBe("ok");
});
test("from package", () => {
  expect(getValue()).toBe("ok");
});
