import { expect, it } from "vitest";
import { alerts } from ".";
it("引入参数对象-范例", () => {
  expect(alerts).toEqual([
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 58, time: "2016-11-10 09:30" },
  ]);
});
