/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-02-22 13:45:34
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-02-22 17:14:09
 * @FilePath: \refactoring-guide\src\statement.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStatementData } from "./createStatementData";

export function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data: any) {
  let result = `Statement for ${data.customer}\n`;

  for (let pref of data.performances) {
    result += `${pref.play.name}: ${usd(pref.amount)} (${
      pref.audience
    } seats)\n`;
  }
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;

  function usd(aNumber: number) {
    return new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}
