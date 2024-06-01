export const printOwing = () => {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  function printDetails(outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
};

const invoice = {
  customer: "test",
};

const printBanner = () => {};

const calculateOutstanding = () => 0;
