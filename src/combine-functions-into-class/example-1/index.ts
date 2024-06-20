export class Reading {
  private _customer: string;
  private _quantity: number;
  private _month: number;
  private _year: number;
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
}

const reading = {
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
