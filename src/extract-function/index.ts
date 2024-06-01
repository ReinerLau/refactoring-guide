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

  const data = {
    name: "test",
  };

  printName(name);
  changeDataName(data);

  return data;
};

const printName = (name: string) => {
  console.log(name);
};

const changeDataName = (data) => {
  data.name = "test1";
};

export const changeLocalVariables = () => {
  const count = changeCount();

  console.log(count);

  return count;
};

const changeCount = () => {
  let result = 0;
  result++;
  return result;
};
