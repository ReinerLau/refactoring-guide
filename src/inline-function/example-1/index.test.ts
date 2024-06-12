import { describe, expect, it } from "vitest";
import { rating } from "./after";

describe("内联函数-范例1", () => {
  it("大于5时返回2", () => {
    const aDriver = {
      numberOfLateDeliveries: 6,
    };
    expect(rating(aDriver)).toBe(2);
  });
  it("等于5时返回1", () => {
    const aDriver = {
      numberOfLateDeliveries: 5,
    };
    expect(rating(aDriver)).toBe(1);
  });
  it("小于5时返回1", () => {
    const aDriver = {
      numberOfLateDeliveries: 4,
    };
    expect(rating(aDriver)).toBe(1);
  });
});
