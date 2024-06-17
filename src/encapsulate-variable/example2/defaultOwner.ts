let defaultOwnerData = { firstName: "Martic", lastName: "Fowler" };

export function defaultOwner() {
  return defaultOwnerData;
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
