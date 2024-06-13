import { describe, expect, it } from "vitest";
import { price } from "./after";
// import { price } from "./before";

describe("提炼变量-范例1", () => {
  it("happy path", () => {
    const order = {
      quantity: 1,
      itemPrice: 1,
    };

    const result = price(order);

    expect(result).toBe(1.1);
  });
});
