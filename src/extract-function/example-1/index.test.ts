import { describe, expect, it, vi } from "vitest";
import { printOwing } from "./after";
// import { printOwing } from "./before";

describe("提炼函数-无局部变量", () => {
  it("print banner", () => {
    const spy = vi.spyOn(console, "log");
    const invoice = {
      orders: [{ amount: 1 }],
      dueDate: new Date(),
      customer: "ReinerLau",
    };

    printOwing(invoice);

    expect(spy).toHaveBeenCalledWith("***********************");
    expect(spy).toHaveBeenCalledWith("**** Customer Owes ****");
  });
});
