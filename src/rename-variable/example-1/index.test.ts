import { describe, expect, it } from "vitest";
import { result, tphd } from ".";

describe("变量改名-范例", () => {
  it("读取", () => {
    expect(result).toBe("<h1>undefined</h1>");
  });

  it("更新", () => {
    expect(tphd).toBe("test");
  });
});
