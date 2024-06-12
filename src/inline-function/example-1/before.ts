interface ADrive {
  numberOfLateDeliveries: number;
}

export function rating(aDriver: ADrive) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver: ADrive) {
  return aDriver.numberOfLateDeliveries > 5;
}
