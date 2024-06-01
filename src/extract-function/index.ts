export const noLocalVariables = () => {
  const name = "reiner";

  print();
  printName();

  function print() {
    console.log("test");
  }

  function printName() {
    console.log(name);
  }
};

export const withLocalVariables = () => {
  const name = "reiner";

  printName(name);
};

const printName = (name: string) => {
  console.log(name);
};
