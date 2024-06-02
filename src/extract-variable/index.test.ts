import { describe, expect, it } from "vitest";
import { getCount } from ".";

describe("提炼变量", () => {
  it("只在当前函数中有用", () => {
    const count = getCount({ first: 1, second: 2, third: 3 });

    expect(count).toBe(14);
  });
});
