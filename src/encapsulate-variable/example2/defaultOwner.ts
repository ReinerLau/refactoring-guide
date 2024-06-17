let defaultOwnerData = { firstName: "Martic", lastName: "Fowler" };

export function defaultOwner() {
  return Object.assign({}, defaultOwnerData);
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
