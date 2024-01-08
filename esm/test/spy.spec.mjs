// https://github.com/dubzzz/fast-check/pull/4604
import { jest } from "@jest/globals";
import { run } from "../src/spy.mjs";
import { run as run2 } from "../src/spy2.mjs";
import * as SpyInternals from "../src/spy-internals.mjs";

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
