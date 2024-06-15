export let defaultOwner = {
  firstName: "Martin",
  lastName: "Fowler",
};

export const spaceship = {
  owner: {
    firstName: "",
    lastName: "",
  },
};

spaceship.owner = defaultOwner;

defaultOwner = { firstName: "Rebecca", lastName: "Parsons" };
