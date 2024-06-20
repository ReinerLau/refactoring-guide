import { acquireReading, baseRate, Reading } from ".";

const aReading = acquireReading();
export const basicChargeAmnout = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading: Reading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
