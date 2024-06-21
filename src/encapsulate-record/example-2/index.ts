export const customerData = {
  "1920": {
    name: "martin",
    id: "1920",
    usages: {
      "2016": {
        "1": 50,
        "2": 55,
      },
      "2015": {
        "1": 70,
        "2": 63,
      },
    },
  },
  "38673": {
    name: "neal",
    id: "38673",
  },
};

const customerID = "1920";
const year = "2016";
const month = "2";
const amount = 100;

customerData[customerID].usages[year][month] = amount;

export function compareUsage(
  customerID: string,
  laterYear: string,
  month: string
) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier =
    customerData[customerID].usages[parseInt(laterYear) - 1][month];
  return { laterAmount: later, change: later - earlier };
}
