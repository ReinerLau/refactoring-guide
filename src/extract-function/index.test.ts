import { expect, it, vi } from "vitest";
import { printOwing } from ".";

it("extract-function", () => {
  const log = vi.spyOn(console, "log");

  printOwing();

  expect(log).toHaveBeenCalledWith(`name: test`);
  expect(log).toHaveBeenCalledWith(`amount: 0`);
});
