class Organization {
  public _data: {
    name: string;
    country: string;
  };
  constructor(data) {
    this._data = data;
  }

  get name() {
    return this._data.name;
  }

  set name(aString: string) {
    this._data.name = aString;
  }
}

export const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

export let result = "";
const newName = "test";

result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = newName;

export function getOrganization() {
  return organization;
}
