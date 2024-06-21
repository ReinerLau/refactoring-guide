import { describe, expect, it } from "vitest";
import { getRawDataOfOrganization, result } from ".";

describe("封装记录-范例", () => {
  it("读取", () => {
    expect(result).toBe("<h1>Acme Gooseberries</h1>");
  });

  it("更新", () => {
    expect(getRawDataOfOrganization().name).toBe("test");
  });
});
