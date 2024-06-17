export let defaultOwner = { firstName: "Martic", lastName: "Fowler" };

export const spaceship = {
  owner: {
    firstName: "",
    lastName: "",
  },
};

spaceship.owner = getDefaultOwner();

setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });

function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}
