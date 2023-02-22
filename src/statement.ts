/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-02-22 13:45:34
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-02-22 16:47:45
 * @FilePath: \refactoring-guide\src\statement.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function statement(invoice, plays) {
  const statementData: any = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  return renderPlainText(statementData, plays);

  // 浅拷贝，目的是尽量不修改函数传进来的参数
  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(aPerformance);
    result.amount = amountFor(result);
    return result;
  }

  function playFor(aPerformance: any) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance: any) {
    let result = 0;
    switch (aPerformance.play.type) {
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
        throw new Error(`unknown type: ${aPerformance.play.type}`);
    }
    return result;
  }
}

function renderPlainText(data: any, plays: any) {
  let result = `Statement for ${data.customer}\n`;

  for (let pref of data.performances) {
    result += `${pref.play.name}: ${usd(pref.amount)} (${
      pref.audience
    } seats)\n`;
  }
  result += `Amount owed is ${usd(totalAmount())}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;

  function totalAmount() {
    let result = 0;
    for (let pref of data.performances) {
      result += pref.amount;
    }
    return result;
  }

  function totalVolumeCredits() {
    let volumeCredits = 0;
    for (let pref of data.performances) {
      volumeCredits += volumeCreditsFor(pref);
    }
    return volumeCredits;
  }

  function usd(aNumber: number) {
    return new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function volumeCreditsFor(pref: any) {
    let result = 0;
    result += Math.max(pref.audience - 30, 0);
    if ("comedy" === pref.play.type) result += Math.floor(pref.audience / 5);
    return result;
  }
}
