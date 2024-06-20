import { acquireReading, enrichReading } from ".";

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge;
export const taxableCharge = Math.max(0, base! - taxThreshold(aReading.year));

function taxThreshold(year: number) {
  return year;
}
