class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = newName;

function getRawDataOfOrganization() {
  return organization._data;
}

function getOrganization() {
  return organization;
}
