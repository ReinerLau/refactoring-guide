export const organization = { name: "Acme Gooseberries", country: "GB" };

export let result = "";
const newName = "test";

result += `<h1>${organization.name}</h1>`;
organization.name = newName;
