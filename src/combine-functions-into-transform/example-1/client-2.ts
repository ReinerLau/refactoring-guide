import { acquireReading, enrichReading } from ".";

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
export const taxableCharge = aReading.taxableCharge;
