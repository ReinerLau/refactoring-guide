interface ACustomer {
  name: string;
  location: string;
}

export function reportLines(aCustomer: ACustomer) {
  const lines: any[] = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}
function gatherCustomerData(out: any[], aCustomer: ACustomer) {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}
