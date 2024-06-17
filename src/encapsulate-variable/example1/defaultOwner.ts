let defaultOwner = { firstName: "Martic", lastName: "Fowler" };

export function getDefaultOwner() {
  return defaultOwner;
}

export function setDefaultOwner(arg) {
  defaultOwner = arg;
}
