import { describe, expect, it } from "vitest";
import { defaultOwner, spaceship } from ".";
describe("封装变量-范例", () => {
  it("读取", () => {
    expect(spaceship.owner).toEqual({
      firstName: "Martic",
      lastName: "Fowler",
    });
  });

  it("更新", () => {
    expect(defaultOwner).toEqual({
      firstName: "Rebecca",
      lastName: "Parsons",
    });
  });
});
