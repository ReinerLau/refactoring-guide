interface ACustomer {
  name: string;
  location: string;
}

export function reportLines(aCustomer: ACustomer) {
  const lines: any[] = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
}
