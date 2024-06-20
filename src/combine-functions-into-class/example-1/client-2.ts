import { acquireReading, baseRate } from ".";

const aReading = acquireReading();
export const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

function taxThreshold(year: number) {
  return year;
}
