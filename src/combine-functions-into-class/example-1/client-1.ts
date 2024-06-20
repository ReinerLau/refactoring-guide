import { acquireReading, baseRate } from ".";

const aReading = acquireReading();
export const baseCharge =
  baseRate(aReading.month, aReading.year) * aReading.quantity;
