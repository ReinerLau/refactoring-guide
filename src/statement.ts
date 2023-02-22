/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-02-22 13:45:34
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-02-22 15:41:10
 * @FilePath: \refactoring-guide\src\statement.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let pref of invoice.performances) {
    let thisAmount = 0;

    thisAmount = amountFor(pref);

    volumeCredits += Math.max(pref.audience - 30, 0);
    if ("comedy" === playFor(pref).type)
      volumeCredits += Math.floor(pref.audience / 5);

    result += `${playFor(pref).name}: ${format(thisAmount / 100)} (${
      pref.audience
    } seats)\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;

  // 以查询取代临时变量
  function playFor(aPerformance: any) {
    return plays[aPerformance.playID];
  }

  // 提炼函数，
  // pref、play 是不会被修改的变量作为参数传递
  // 重命名 pref - aPerformance 使可读性更好
  function amountFor(aPerformance: any) {
    // 在里面初始化就在里面初始化
    let result = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`unknown type: ${playFor(aPerformance).type}`);
    }
    // thisAmount 是被修改的变量作为函数的结果返回
    // 永远将函数的返回值命名为 result"
    return result;
  }
}
