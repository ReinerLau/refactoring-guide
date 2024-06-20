import { acquireReading, enrichReading } from ".";

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
export const taxableCharge = Math.max(
  0,
  aReading.baseCharge! - taxThreshold(aReading.year)
);

function taxThreshold(year: number) {
  return year;
}
