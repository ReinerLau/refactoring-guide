import { acquireReading, Reading } from ".";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
export const baseCharge = aReading.baseCharge;
