/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-02-22 14:06:21
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-02-22 14:23:48
 * @FilePath: \refactoring-guide\src\tests\statement.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { statement } from "../statement";
import invoices from "../data/invoices.json";
import plays from "../data/plays.json";

describe("statement", () => {
  it("result is right", () => {
    expect(statement(invoices[0], plays)).toBe(`Statement for BigCo\nHamlet: $650.00 (55 seats)\nAs You Like It: $580.00 (35 seats)\nOthello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`);
  });
});
