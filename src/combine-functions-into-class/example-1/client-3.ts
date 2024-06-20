import { acquireReading, baseRate, Reading } from ".";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
export const basicChargeAmnout = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading: Reading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
