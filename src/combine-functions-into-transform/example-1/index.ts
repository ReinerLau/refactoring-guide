export interface Reading {
  customer: string;
  quantity: number;
  month: number;
  year: number;
  baseCharge?: number;
}

const reading: Reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
};

export function acquireReading() {
  return reading;
}

export function baseRate(month: number, year: number) {
  return month + year;
}

export function enrichReading(original: Reading) {
  const result = Object.assign({}, original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
}
function calculateBaseCharge(aReading: Reading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
