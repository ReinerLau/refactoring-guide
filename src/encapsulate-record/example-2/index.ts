class CustomerData {
  public _data;
  constructor(data) {
    this._data = data;
  }
  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
  get rawData() {
    return JSON.parse(JSON.stringify(this._data));
  }
}

export let customerData: any = new CustomerData({
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
});

const customerID = "1920";
const year = "2016";
const month = "2";
const amount = 100;

getCustomerData().setUsage(customerID, year, month, amount);

export function compareUsage(
  customerID: string,
  laterYear: string,
  month: string
) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerID].usages[parseInt(laterYear) - 1][month];
  return { laterAmount: later, change: later - earlier };
}

function getCustomerData() {
  return customerData;
}
export function getRawDataOfCustomers() {
  return customerData.rawData;
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}
