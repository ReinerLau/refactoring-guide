import { expect, it } from "vitest";
import { inNewEngland } from "./after";
// import { inNewEngland } from "./before";

it("改变函数声明-范例2", () => {
  const someCustomers = [
    { address: { state: "MA" } },
    { address: { state: "US" } },
  ];

  const newEnglanders = someCustomers.filter((c) =>
    inNewEngland(c.address.state)
  );

  expect(newEnglanders).toEqual([{ address: { state: "MA" } }]);
});
