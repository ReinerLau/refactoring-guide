import { describe, expect, it, vi } from "vitest";
import { printOwing } from "./after";
// import { printOwing } from "./before";

describe("提炼函数-对局部变量再赋值", () => {
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

  it("print details", () => {
    const spy = vi.spyOn(console, "log");
    const invoice = {
      orders: [{ amount: 1 }],
      dueDate: new Date(),
      customer: "ReinerLau",
    };

    printOwing(invoice);

    const today = new Date();
    const newDueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );

    expect(spy).toHaveBeenCalledWith(`name: ${invoice.customer}`);
    expect(spy).toHaveBeenCalledWith(`amount: 1`);
    expect(spy).toHaveBeenCalledWith(`due: ${newDueDate.toLocaleDateString()}`);
  });
});
