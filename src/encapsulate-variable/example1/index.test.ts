import { describe, expect, it } from "vitest";
import { defaultOwner, spaceship } from "./after";
describe("封装变量-范例1", () => {
  it("get", () => {
    expect(spaceship.owner).toEqual({
      firstName: "Martin",
      lastName: "Fowler",
    });
  });
  it("set", () => {
    expect(defaultOwner).toEqual({
      firstName: "Rebecca",
      lastName: "Parsons",
    });
  });
});
