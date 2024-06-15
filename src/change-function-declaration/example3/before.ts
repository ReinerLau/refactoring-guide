interface ACustomer {
  address: { state: string };
}

export function inNewEngland(aCustomer: ACustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}
