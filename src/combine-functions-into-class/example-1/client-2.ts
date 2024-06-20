import { acquireReading, Reading } from ".";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
export const taxableCharge = Math.max(
  0,
  aReading.baseCharge - taxThreshold(aReading.year)
);

function taxThreshold(year: number) {
  return year;
}
