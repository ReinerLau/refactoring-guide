import { expect, it } from "vitest";
import { cpyNm } from ".";

it("变量改名-给常量改名", () => {
  expect(cpyNm).toBe("Acme Gooseberries");
});
