interface Reading {
  temp: number;
  time: string;
}

interface Station {
  name: string;
  readings: Reading[];
}

class NumberRange {
  private _data: { min: number; max: number };
  constructor(min: number, max: number) {
    this._data = { min, max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
  contains(arg) {
    return arg >= this.min && arg <= this.max;
  }
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

export function readingsOutsideRange(station: Station, range: NumberRange) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

const operatingPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 55,
};

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

export const alerts = readingsOutsideRange(station, range);
