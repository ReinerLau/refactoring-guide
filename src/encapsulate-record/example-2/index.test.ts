import { describe, expect, it } from "vitest";
import { compareUsage, getRawDataOfCustomers } from ".";

describe("封装记录-封装嵌套记录", () => {
  it("读取", () => {
    const result = compareUsage("1920", "2016", "1");
    expect(result).toEqual({
      laterAmount: 50,
      change: -20,
    });
  });
  it("更新", () => {
    expect(getRawDataOfCustomers()["1920"].usages["2016"]["2"]).toBe(100);
  });
});
