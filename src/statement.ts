/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-02-22 13:45:34
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-02-22 15:25:19
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
    const play = plays[pref.playID];
    let thisAmount = 0;

    thisAmount = amountFor(pref, play);

    volumeCredits += Math.max(pref.audience - 30, 0);
    if ("comedy" === play.type) volumeCredits += Math.floor(pref.audience / 5);

    result += `${play.name}: ${format(thisAmount / 100)} (${
      pref.audience
    } seats)\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;

  // 提炼函数，
  // pref、play 是不会被修改的变量作为参数传递
  function amountFor(pref: any, play: any) {
    // 在里面初始化就在里面初始化
    let thisAmount = 0;
    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (pref.audience > 30) {
          thisAmount += 1000 * (pref.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30000;
        if (pref.audience > 20) {
          thisAmount += 10000 + 500 * (pref.audience - 20);
        }
        thisAmount += 300 * pref.audience;
        break;
      default:
        throw new Error(`unknown type: ${play.type}`);
    }
    // thisAmount 是被修改的变量作为函数的结果返回
    return thisAmount;
  }
}
