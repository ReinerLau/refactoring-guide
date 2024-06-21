export const organization = { name: "Acme Gooseberries", country: "GB" };

export let result = "";
const newName = "test";

result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = newName;

function getRawDataOfOrganization() {
  return organization;
}
