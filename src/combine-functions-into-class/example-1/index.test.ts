import { describe, expect, it } from "vitest";
import { baseCharge } from "./client-1";
import { taxableCharge } from "./client-2";
import { basicChargeAmnout } from "./client-3";
describe("函数组合成类-范例", () => {
  it("客户端1", () => {
    expect(baseCharge).toBe(20220);
  });

  it("客户端2", () => {
    expect(taxableCharge).toBe(18203);
  });

  it("客户端3", () => {
    expect(basicChargeAmnout).toBe(20220);
  });
});
