import { describe, expect, it } from "vitest";
import { Counter, getCount } from ".";

describe("提炼变量", () => {
  const data = { first: 1, second: 2, third: 3 };
  it("只在当前函数中有意义", () => {
    const count = getCount(data);

    expect(count).toBe(14);
  });

  it("在一个类中", () => {
    const counter = new Counter(data);

    expect(counter.getCount()).toBe(14);
  });
});
