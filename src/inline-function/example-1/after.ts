interface ADrive {
  numberOfLateDeliveries: number;
}

export function rating(aDriver: ADrive) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}
