import { describe, expect, it } from "vitest";
import { _title, result } from ".";

describe("变量改名-范例", () => {
  it("读取", () => {
    expect(result).toBe("<h1>undefined</h1>");
  });

  it("更新", () => {
    expect(_title).toBe("test");
  });
});
