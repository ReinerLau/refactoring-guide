export interface Reading {
  customer: string;
  quantity: number;
  month: number;
  year: number;
}

const reading: Reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
};

export function acquireReading() {
  return reading;
}

export function baseRate(month: number, year: number) {
  return month + year;
}
