import { describe, expect, it, vi } from "vitest";
import { noLocalVariables, withLocalVariables } from ".";

describe("提炼函数", () => {
  it("无局部变量", () => {
    const log = vi.spyOn(console, "log");

    noLocalVariables();

    expect(log).toHaveBeenCalledWith("test");
    expect(log).toHaveBeenCalledWith("reiner");
  });

  it("有局部变量", () => {
    const log = vi.spyOn(console, "log");

    withLocalVariables();

    expect(log).toHaveBeenCalledWith("reiner");
  });
});
