interface Reading {
  temp: number;
  time: string;
}

interface Station {
  name: string;
  readings: Reading[];
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

export function readingsOutsideRange(
  station: Station,
  min: number,
  max: number
) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

const operatingPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 55,
};

export const alerts = readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);
