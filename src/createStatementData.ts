/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-02-22 17:11:31
 * @LastEditors: reiner850593913 lk850593913@gmail.com
 * @LastEditTime: 2023-02-22 22:43:48
 */
class PerformanceCalculator {
  performances: any;
  constructor(aPerformance) {
    this.performances = aPerformance;
  }
}

export function createStatementData(invoice, plays) {
  const statementData: any = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  return statementData;
  // 浅拷贝，目的是尽量不修改函数传进来的参数
  function enrichPerformance(aPerformance) {
    const calculator = new PerformanceCalculator(aPerformance);
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
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

  function volumeCreditsFor(aPerformance: any) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }
  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
