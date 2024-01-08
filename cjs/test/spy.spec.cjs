// https://github.com/dubzzz/fast-check/pull/4604
const { run } = require("../src/spy.cjs");
const { run: run2 } = require("../src/spy2.cjs");
const SpyInternals = require("../src/spy-internals.cjs");

test("spyer", () => {
  const callMe = jest.spyOn(SpyInternals, "callMe");
  callMe.mockReturnValue("from test");

  const out = run();

  expect(callMe).toHaveBeenCalled();
  expect(out).toBe("from test");
});
test("spyer2", () => {
  const callMe = jest.spyOn(SpyInternals, "callMe");
  callMe.mockReturnValue("from test");

  const out = run2();

  expect(callMe).toHaveBeenCalled();
  expect(out).toBe("from test");
});
