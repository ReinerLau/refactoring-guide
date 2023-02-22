/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-02-22 13:45:34
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-02-22 16:20:14
 * @FilePath: \refactoring-guide\src\statement.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function statement(invoice, plays) {
  return renderPlainText(invoice, plays);
}

function renderPlainText(invoice: any, plays: any) {
  let result = `Statement for ${invoice.customer}\n`;

  for (let pref of invoice.performances) {
    result += `${playFor(pref).name}: ${usd(amountFor(pref))} (${pref.audience} seats)\n`;
  }
  result += `Amount owed is ${usd(totalAmount())}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;

  function totalAmount() {
    let result = 0;
    for (let pref of invoice.performances) {
      result += amountFor(pref);
    }
    return result;
  }

  function totalVolumeCredits() {
    let volumeCredits = 0;
    for (let pref of invoice.performances) {
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
    if ("comedy" === playFor(pref).type)
      result += Math.floor(pref.audience / 5);
    return result;
  }

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

