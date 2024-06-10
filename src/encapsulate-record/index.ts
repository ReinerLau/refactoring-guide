const organization = { name: "Acme Gooseberries", country: "GB" };

result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = newName;

function getRawDataOfOrganization() {
  return organization;
}
