import { acquireReading, baseRate, enrichReading, Reading } from ".";

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
export const basicChargeAmnout = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading: Reading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
