class Organization {
  constructor(data) {
    this._data = data;
  }
  set name(aString) {
    this._data.name = aString;
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getOrganization().name = newName;

function getRawDataOfOrganization() {
  return organization._data;
}

function getOrganization() {
  return organization;
}
