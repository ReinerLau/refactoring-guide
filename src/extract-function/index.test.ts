import { describe, expect, it, vi } from "vitest";
import { changeLocalVariables, noLocalVariables, withLocalVariables } from ".";

describe("提炼函数", () => {
  it("无局部变量", () => {
    const log = vi.spyOn(console, "log");

    noLocalVariables();

    expect(log).toHaveBeenCalledWith("test");
    expect(log).toHaveBeenCalledWith("reiner");
  });

  describe("有局部变量", () => {
    it("只是读取局部变量", () => {
      const log = vi.spyOn(console, "log");

      withLocalVariables();

      expect(log).toHaveBeenCalledWith("reiner");
    });

    it("局部变量是数据结构同时对其修改", () => {
      const data = withLocalVariables();

      expect(data.name).toBe("test1");
    });
  });

  it("对局部变量再赋值", () => {
    const count = changeLocalVariables();

    expect(count).toBe(1);
  });
});
