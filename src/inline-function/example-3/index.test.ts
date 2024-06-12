import { describe, expect, it } from "vitest";
import { reportLines } from "./after";

describe("内联函数-范例3", () => {
  it("happy path", () => {
    const aCustomer = {
      name: "ReinerLau",
      location: "China",
    };
    expect(reportLines(aCustomer)).toEqual([
      ["name", aCustomer.name],
      ["location", aCustomer.location],
    ]);
  });
});
