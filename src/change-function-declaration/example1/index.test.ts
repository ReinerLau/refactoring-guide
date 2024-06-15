import { expect, it } from "vitest";
import { circumference } from "./after";
// import { circum } from "./before";

it("改变函数声明-范例1", () => {
  const radius = 1;

  const result = circumference(radius);

  expect(result).toBe(2 * Math.PI * radius);
});
