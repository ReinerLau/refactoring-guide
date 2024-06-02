import { describe, expect, it } from "vitest";
import { isMoreThanFive } from ".";

describe("内联变量", () => {
  it("happy path", () => {
    const data = {
      count: 6,
    };

    expect(isMoreThanFive(data)).toBe(true);
  });
});
