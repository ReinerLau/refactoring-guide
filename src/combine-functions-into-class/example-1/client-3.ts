import { acquireReading, Reading } from ".";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
export const basicChargeAmnout = aReading.baseCharge;
