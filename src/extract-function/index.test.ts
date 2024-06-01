import { describe, expect, it, vi } from "vitest";
import { noLocalVariables } from ".";

describe("提炼函数", () => {
  it("无局部变量", () => {
    const log = vi.spyOn(console, "log");

    noLocalVariables();

    expect(log).toHaveBeenCalledWith("test");
  });
});
