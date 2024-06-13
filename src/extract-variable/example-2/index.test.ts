import { describe, expect, it } from "vitest";
// import { Order } from "./before";
import { Order } from "./after";

describe("提炼变量-范例2", () => {
  it("happy path", () => {
    const order = new Order({
      quantity: 1,
      itemPrice: 1,
    });

    expect(order.price).toBe(1.1);
  });
});
