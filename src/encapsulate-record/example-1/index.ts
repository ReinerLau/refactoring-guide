class Organization {
  public _data: {
    name: string;
    country: string;
  };
  constructor(data) {
    this._data = data;
  }
}

export const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

export let result = "";
const newName = "test";

result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = newName;

export function getRawDataOfOrganization() {
  return organization._data;
}

function getOrganization() {
  return organization;
}
