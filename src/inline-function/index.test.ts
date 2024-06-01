import { describe, expect, it } from "vitest";
import { inlineFunction } from ".";

describe("内联函数", () => {
  it("happy path", () => {
    const res = inlineFunction(6);

    expect(res).toBe(true);
  });
});
